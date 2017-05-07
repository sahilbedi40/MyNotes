import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
@Component({
  selector: 'app-social-media-settings',
  templateUrl: './social-media-settings.component.html',
  styleUrls: ['./social-media-settings.component.css']
})
export class SocialMediaSettingsComponent implements OnInit {

  constructor( public af: AngularFire) { 
     this.af.auth.subscribe(user => {
      if(user) {
        console.log(user);
        console.log("Token");
        console.log(user.auth.getToken());
        
        // user logged in
        //this.user = user;
      }
      else {
        // user not logged in
       // this.user = {};
       console.log("error");
      }
    });
  }

  ngOnInit() {
  }

  GmailAuthenticate(){
    this.af.auth.login({
    provider: AuthProviders.Google
  });
  }

}
