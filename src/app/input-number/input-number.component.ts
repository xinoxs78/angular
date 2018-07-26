import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'twice-number',
  templateUrl: './input-number.component.html'
})
export class InputNumberComponent implements OnInit {
  
  result: number;
  
  @Input()
  set value(inputValue: number) {
    this.internalValue = inputValue;
  }
  get value(): number {
    if(this.internalValue === 0){
      return ;
    }else {
      return this.internalValue;
    }
  }
  
  internalValue = 0;

  constructor() { }

  ngOnInit() {
  }

  twice(value) {
    this.result = (value * 2);
  }

}
