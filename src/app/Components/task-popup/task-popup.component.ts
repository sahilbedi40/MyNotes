import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {INote} from '../../Helper/Notes';
import {NoteService} from  '../../Services/note.service';
declare var $;

@Component({
  selector: 'app-task-popup',
  templateUrl: './task-popup.component.html',
  styleUrls: ['./task-popup.component.css']
})
export class TaskPopupComponent implements OnInit {
 isEdit:boolean=false;
 headerText:string="";
 note:INote;
@Output() saveDetail = new EventEmitter();
@Output() removeDetail = new EventEmitter();
  constructor(private noteService:NoteService) {
    this.note={
      Name:"",
      Description:"",
      UserKey:''
    }
   }

  ngOnInit() {
  }

  showModal(isEditFlag:boolean,currentNote:INote){
    this.isEdit=isEditFlag;
    this.headerText=isEditFlag ? "Edit" : "Add" ;
    this.note= Object.assign({}, currentNote);
    $('#noteModal').modal({ backdrop: 'static' });
  }

  hideModal(){
    $('#noteModal').modal('hide');
  }

  SaveNote(){
    this.hideModal();
    this.saveDetail.emit(this.note);
  }

  RemoveNote(){     
     this.hideModal();
     this.removeDetail.emit(this.note);
  }

}
