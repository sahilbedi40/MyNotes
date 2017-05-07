import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { IUserInfo } from '../Helper/UserInfo';
import { AngularFire, AuthProviders, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AuthenticateService {
  isAuthenticate: boolean = false;
  private _userAuthenticated = new Subject<IUserInfo>();
  user: IUserInfo;
  userInfo = this._userAuthenticated.asObservable();
  constructor(private af: AngularFire) { }


userAuthenticated(userDetails){
      this.user = userDetails;
      this.isAuthenticate = true;
      this._userAuthenticated.next(this.user);
    }
  Login(email: string, password: string): FirebaseListObservable<IUserInfo[]> {
    return this.af.database.list('UserInfo', {
      query: {
        orderByChild: 'Email',
        equalTo: email
      }
    });    
  }

  RegisterUser(userInfo:any)
  {
     var list=this.af.database.list('UserInfo');
     var keyId= list.push(userInfo).key;
     if(keyId != "")
     {
       userInfo.$key=keyId;
       this.userAuthenticated(userInfo);
      return true;
     }
     return false;
  }

  LogOut()
  {
    // this.user = {
    //        Name: "",
    //        Email: "",
    //        PhotoUrl:"",
    //        AuthUserID: "",
    //        Password:"",
    //        GmailEnabled:false,
    //        OutLookEnabled:false
    //        };
      this.isAuthenticate = false;
      //this._userAuthenticated.next(this.user);
  }

}
