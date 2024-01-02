import { Component,OnInit } from '@angular/core';
import {of,from,range, interval,map,filter} from 'rxjs'

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent {

  ngOnInit(): void {
    of([1,2,3,4,5],"str").subscribe(data=>{
      console.log(data)
    })

    from([1,2,3,4,5]).subscribe(data=>{
      console.log(data)
    })

    range(5).subscribe(data=>{
      console.log(data)
    })

    // interval(5000).subscribe(data=>{
    //   console.log(data)
    // })

    let myObsMap = of(1,2,3,4,5).pipe(
      map((data:any)=>{ return data*2})
    )

    myObsMap.subscribe(data=>{
      console.log(data,"map")
    })

    let myObsFilter = of(1,2,3,4,5).pipe(
      filter((data:any)=>{ return data%2==0})
    )

    myObsFilter.subscribe(data=>{
      console.log(data,"filter")
    })


  }

}
