import { Component, OnInit,ViewChild } from '@angular/core';
import {AuthenticateService} from  '../../Services/authenticate.service';
import {NoteService} from  '../../Services/note.service';
import { AngularFire, AuthProviders } from 'angularfire2';
import {INote} from  '../../Helper/Notes';
import {TaskPopupComponent} from '../task-popup/task-popup.component';
import { Router } from '@angular/router';
import {LoaderService} from '../../Services/loader.service';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  NoteList:Array<INote>;
  isHidden:boolean=true;
  currentNote:INote;
  @ViewChild(TaskPopupComponent) popup:TaskPopupComponent;
  constructor( public af: AngularFire,private authService:AuthenticateService,private noteService:NoteService,private route:Router,private loaderService:LoaderService) { 
     
  }

  ngOnInit() {
    if(this.authService.isAuthenticate){
          this.getNoteListByUserID();
    }
    else{
      this.route.navigate(["./Login"]);
    }
    
  }

  getNoteListByUserID(){
    this.noteService.getNoteListByUserID().subscribe(list=>{
         this.NoteList=list;
         console.log(list);
         if(list.length <= 0){
            this.isHidden=false;
         }
    })
  }

  AddNote(){
   this.currentNote={Name:"",Description:"",UserKey:this.authService.user.$key};
    this.popup.showModal(false,this.currentNote);
  }

  handleSaveNote($event){
    this.loaderService.showLoader();
    if ($event.hasOwnProperty('$key')) {
      //update
      this.noteService.UpdateNote($event).then(
        ()=>{
           this.currentNote=null;
           this.loaderService.hideLoader();
        },
        (error)=>{
            this.currentNote=null;
            console.log(error);
            this.loaderService.hideLoader();
        }
      )
    }
    else{
      // add
      this.noteService.SaveNote($event).then(()=>{
        this.currentNote=null;
        this.loaderService.hideLoader();
      },
      (error)=>{
        this.currentNote=null;
        console.log(error);
        this.loaderService.hideLoader();
      }
      )
    }
  }

  HandleRemoveNote($event){
    this.loaderService.showLoader();
   this.noteService.RemoveNote($event.$key).then(()=>{
        this.currentNote=null;
        this.loaderService.hideLoader();
      },
      (error)=>{
        this.currentNote=null;
        console.log(error);
        this.loaderService.hideLoader();
      }
      )
  }

  getNewNoteID(){
      return this.NoteList.length > 0 ? (parseInt(this.NoteList[this.NoteList.length - 1].$key) + 1).toString() : "0";
  }

  UpdateNote(item:any){
    this.currentNote=item;
    this.popup.showModal(true,this.currentNote);
  }

}
