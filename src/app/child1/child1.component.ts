import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnChanges {

  @Input() name:any;
  message:any;

  ngOnChanges(changes : SimpleChanges) : void{
    if (changes['name']) {
      // Access the current and previous values of the input property
      const currentValue = changes['name'].currentValue;
      const previousValue = changes['name'].previousValue;

      // Perform any logic based on the changes
      this.message = `Input message changed from '${previousValue}' to '${currentValue}'`;
  }
  // console.log(this.message)

}

}
