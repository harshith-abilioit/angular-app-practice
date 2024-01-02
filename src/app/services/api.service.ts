import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ApiService{

  constructor(private http:HttpClient) {
    this.sendTodos()
   }

  fetchData(): Observable<any> {
    return  this.http.get<any>('https://fakestoreapi.com/products');
  }

  todos:any = ["task 1","task 2","task 3"];

  todoList = new BehaviorSubject(this.todos);

  sendTodos(){
    this.todoList.next(this.todos)
    console.log("nxt executed")
  }

  addTodo(todo:any){
    this.todos.push(todo)
  }

}
