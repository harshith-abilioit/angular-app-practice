import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private store:Store, private service:ApiService){}

  updateName(input:any){
    this.store.dispatch({type:'name-edit',payload:input.value})
    input.value=''
  }

  updateEmail(input:any){
    this.store.dispatch({type:'email-edit',payload:input.value})
    input.value=''
  }

  updateNumber(input:any){
    this.store.dispatch({type:'number-edit',payload:input.value})
    input.value=''
  }

  // pushArr(){
  //   this.service.namesArr.push('Ahmed');
  //   console.log(this.service.namesArr);
  // }

  @ViewChild('addTodoInput') todoInput:any;

  addTodoItem(todo:any){
    this.service.addTodo(todo)
    this.todoInput.nativeElement.value=''
  }

}
