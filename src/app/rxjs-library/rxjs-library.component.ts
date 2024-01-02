import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import {of,from,range} from 'rxjs'

@Component({
  selector: 'app-rxjs-library',
  templateUrl: './rxjs-library.component.html',
  styleUrls: ['./rxjs-library.component.css']
})
export class RxjsLibraryComponent implements OnInit {

  constructor(private api:ApiService) {}

  ngOnInit(): void {
      this.myObs.subscribe({
        next : data=> this.array.push(data),
        error : error=> {console.log(error)},
        complete :()=>{
          console.log(this.array)
          for(let i in this.array){
            this.array[i]+=100
          }
          console.log(this.array)
        }
      })

      this.api.fetchData().subscribe({
        next : (response) => {
        this.dataArr = response;
        console.log('next')
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
    })

    this.api.todoList.subscribe(data=>{
      console.log(data)
      this.todos=data
    });

    of([1,2,3,4,5],"str").subscribe(data=>{
      console.log(data)
    })

    from([1,2,3,4,5]).subscribe(data=>{
      console.log(data)
    })

    range(5).subscribe(data=>{
      console.log(data)
    })

  }

  showData(){
    console.log(this.dataArr)
  }

  dataArr:any=[];
  array:any=[];
  todos:any=[];

  myObs = new Observable(function(params:any) {
    params.next(100);
    params.next(200);
    params.complete()
    params.error('Error');
  })




}
