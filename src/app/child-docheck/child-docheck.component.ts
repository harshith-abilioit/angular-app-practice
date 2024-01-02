import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-child-docheck',
  templateUrl: './child-docheck.component.html',
  styleUrls: ['./child-docheck.component.css']
})
export class ChildDocheckComponent implements DoCheck {

  @Input() mobiles:any;

  ngDoCheck(): void {
      // console.log('docheck  called')
  }

}
