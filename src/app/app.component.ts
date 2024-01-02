import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private store:Store<any>) {
    store.select('user').subscribe(data=>{
      this.user=data
      console.log(this.user)
    })
  }

  user:any;
  greet:string = 'good morning';
  binding:string='data from parent'
  newMobile:string=''

  mobilesArr:Array<string> = ["vivo",'redmi',"oneplus"];

  onAdd(){
    this.mobilesArr.push(this.newMobile)
    this.newMobile=''
  }

}
