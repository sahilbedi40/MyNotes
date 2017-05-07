import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../../Services/authenticate.service';
import { Router } from '@angular/router';
import {LoaderService} from '../../Services/loader.service';
declare var $;

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
password:string="";
isHidden:boolean=false;
  constructor(private authService:AuthenticateService,private route:Router,private loaderService:LoaderService) { }

  ngOnInit() {
  }

  SaveGoogleAuthUser()
  {
      if(this.password==""){
        this.isHidden=true;
      }
      else{
           this.loaderService.showLoader();
           this.isHidden=false;
           var data=JSON.parse(localStorage.getItem("userDetail"));
           console.log(data);
           var userDetail={
           Name: data.displayName,
           Email: data.email,
           PhotoUrl: data.photoURL,
           AuthUserID: data.uid,
           Password:this.password,
           GmailEnabled:true,
           OutLookEnabled:false
           }
           
          if(this.authService.RegisterUser(userDetail))
          {
                  this.hideModal();
                  localStorage.setItem("userDetail",JSON.stringify(this.authService.user));
                  this.route.navigate(["./Dashboard"]);

          }
          this.loaderService.hideLoader();
      }
  }

  hideModal(){
    $('#setPasswordModal').modal('hide');
  }

  showModal()
  {
    $('#setPasswordModal').modal({ backdrop: 'static' });
  }

}
