import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-child-oninit',
  templateUrl: './child-oninit.component.html',
  styleUrls: ['./child-oninit.component.css']
})
export class ChildOninitComponent implements OnInit {

  @Input() oninit:any='data in oninit';

  constructor(){
    // console.log(this.oninit,"cons");
  }

  ngOnInit(): void {
      // console.log(this.oninit,"oninit")
  }

}
