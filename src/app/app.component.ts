import { Component } from '@angular/core';
import {AuthenticateService} from  './Services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  userName:string;
  imgUrl:string;
  constructor(protected route:Router,protected authService:AuthenticateService){
    authService.isAuthenticate=false;
    this.userName ="test";
    this.authService.userInfo.subscribe(userDetails => {
      this.userName = userDetails.Name;
      this.imgUrl=userDetails.PhotoUrl !="" ?userDetails.PhotoUrl:"../assets/images/noimage.jpg";
    })
  }

   LogOut(){
     this.authService.LogOut();
    this.route.navigate(["./Login"]);
   }

}
