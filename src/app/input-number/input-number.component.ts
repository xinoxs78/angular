import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'twice-number',
  templateUrl: './input-number.component.html'
})
export class InputNumberComponent implements OnInit {
  
  result: number;
  internalValue: number;

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
  


  constructor() { }

  ngOnInit() {
  }

  twice(value) {
    this.result = (value * 2);
  }

}
