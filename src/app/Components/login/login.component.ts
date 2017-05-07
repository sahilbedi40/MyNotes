import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AppComponent} from '../../app.component';
import {AuthenticateService} from  '../../Services/authenticate.service';
import {LoaderService} from  '../../Services/loader.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email:string;
password:string;
showError:boolean=false;
  constructor(private route:Router,private authService:AuthenticateService,private loaderService:LoaderService){
    //super(route,authService);
  }

 ngOnInit(){
   if(this.authService.isAuthenticate){
     this.route.navigate(["./Dashboard"]);
   }
 }
  Login(form:any)
  {
    //this.authService.isAuthenticate=true;
    this.showError=false;
    this.loaderService.showLoader();
    this.authService.Login(this.email,this.password)
      .subscribe(data=>{
        if(data[0].Password==this.password)
        {
            this.authService.userAuthenticated(data[0]);
            this.route.navigate(["./Dashboard"]);            
        }
        else{
           this.showError=true;
        }
        this.loaderService.hideLoader();
      },
      (error)=>{
        console.log(error);
        this.loaderService.hideLoader();
      }
      )
    
  }
}
