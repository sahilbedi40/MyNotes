import { Component, OnInit,ViewChild } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
import {SetPasswordComponent} from '../set-password/set-password.component';
import {IUserInfo} from '../../Helper/UserInfo';
import {AuthenticateService} from '../../Services/authenticate.service';
import { Router } from '@angular/router';
import {LoaderService} from '../../Services/loader.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
isSubscribeCall:boolean=false;
userInfo:IUserInfo;
ConfirmPassword:string="";
@ViewChild(SetPasswordComponent) _passwordModal:SetPasswordComponent;
  constructor(public af: AngularFire,private authService:AuthenticateService,private route:Router,private loaderService:LoaderService) 
  {

     this.userInfo={
       Name:'',
       Email:'',
       Password:'',
       AuthUserID:'',
      PhotoUrl:'',
      $key:'',
      GmailEnabled:false,
      OutLookEnabled:false
     }

   
       this.af.auth.subscribe(user => {
         if(this.isSubscribeCall){
           if(user) {
            console.log(user);      
            localStorage.setItem("userDetail",JSON.stringify(user.google));  
            this._passwordModal.showModal();
          }
        else {       
          console.log("error");
          }
      }
      
    });
   
    
   }

  ngOnInit() {
  }

  GmailAuthenticate(){
    this.isSubscribeCall=true;
    this.af.auth.login({
    provider: AuthProviders.Google
  });
  }
  
 RegisterUser(){
   if(this.userInfo.Password!=this.ConfirmPassword)
   {
     alert("Password does not match");
   }
   else{
     this.loaderService.showLoader();
        var userDetail={
           Name: this.userInfo.Name,
           Email: this.userInfo.Email,
           PhotoUrl: this.userInfo.PhotoUrl,
           AuthUserID: "",
           Password:this.userInfo.Password,
           GmailEnabled:false,
           OutLookEnabled:false
           }
            if(this.authService.RegisterUser(userDetail))
            {
             localStorage.setItem("userDetail",JSON.stringify(this.authService.user));
             this.route.navigate(["./Dashboard"]);
            }
            this.loaderService.hideLoader();
   }
 }

}
