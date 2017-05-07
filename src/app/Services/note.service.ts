import { Injectable } from '@angular/core';
import {INote} from '../Helper/Notes';
import {AuthenticateService} from './authenticate.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Injectable()
export class NoteService {
private notes:FirebaseListObservable<INote[]>;
  constructor(private af:AngularFire,private authService:AuthenticateService) { 
    if(authService.isAuthenticate){
       this.notes=  this.af.database.list('Notes',{
               query:{
                 orderByChild: 'UserKey',
                 equalTo: this.authService.user.$key
               }
    });
    }
  }

  getNoteListByUserID():FirebaseListObservable<INote[]>{
     return this.notes;
  }

  SaveNote(note){
   return this.notes.push(note);
  }

  UpdateNote(note)
  {
    let data={
      Name:note.Name,
      Description:note.Description,
      UserKey:note.UserKey
    }
    return this.notes.update(note.$key,data);
  }
   
   RemoveNote(key:string)
   {
     return this.notes.remove(key);
   }
   
}
