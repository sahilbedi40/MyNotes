import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticateService} from  './Services/authenticate.service';
import {NoteService} from './Services/note.service';

import { AppComponent } from './app.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { LoginComponent } from './Components/login/login.component';
import { AngularFireModule, AuthMethods,AuthProviders} from "angularfire2";
import { SocialMediaSettingsComponent } from './Components/social-media-settings/social-media-settings.component';
import { LoaderComponent } from './Components/loader/loader.component';
import { TaskPopupComponent } from './Components/task-popup/task-popup.component';
import { RegisterComponent } from './Components/register/register.component';
import { SetPasswordComponent } from './Components/set-password/set-password.component';
import {LoaderService} from './Services/loader.service';

const appRoutes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'Login'},
  { path: 'Login', component: LoginComponent },
  { path: 'Dashboard',component: DashBoardComponent},
  {path:'AccountSettings', component:SocialMediaSettingsComponent} ,
  {path:'Register', component:RegisterComponent}
];

const firebaseConfig = {
    apiKey: "AIzaSyDyw0L-36iLMIPhmyrLsy4apFJb5miGdRY",
    authDomain: "feeds-157317.firebaseapp.com",
    databaseURL: "https://feeds-157317.firebaseio.com",
    storageBucket: "feeds-157317.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    LoginComponent,
    SocialMediaSettingsComponent,
    LoaderComponent,
    TaskPopupComponent,  
    RegisterComponent, SetPasswordComponent, LoaderComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  providers: [AuthenticateService,NoteService,LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
