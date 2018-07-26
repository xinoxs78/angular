import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, forwardRef, ChangeDetectorRef } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

export const RADIO_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputRadioComponent),
  multi: true
};

@Component({
  selector: 'sb-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.css'],
  providers: [RADIO_VALUE_ACCESSOR]
})
export class InputRadioComponent implements ControlValueAccessor {
    
  @Input()
  label: string;
  
  @Input()
  labelFor: string;

  @Input()
  labelAlign: string;
  
  @Input()
  labelTooltip: string;
  
  @Input()
  id: string;

  @Input()
  name: string; 

  @Input() 
  value: any;
  
  @Input()
  width: number;

  @Input()
  formGroupCss: string; 
  
  @Input()
  inputCss: string;

  @Input()
  helpBlock: string;

  @Input()
  placeholder: string;
  
  @Input()
  isRequired: boolean;

  @Input()
  isReadonly: boolean;

  @Input()
  ngModelBackup: any;

  @Input()
  modelOptions: any;
  
  @Output()
  onChangeValue: EventEmitter<any> = new EventEmitter();

  @Output() 
  onClick: EventEmitter<any> = new EventEmitter();

  //@ViewChild('sbrb') inputViewChild: ElementRef;

  public onModelChange: Function = () => {};
    
  public onModelTouched: Function = () => {};

  public checked: boolean;

  constructor(private cd: ChangeDetectorRef) { }

  writeValue(value: any): void {
    this.checked = (value == this.value);
    this.cd.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }
  
  setDisabledState?(isDisabled: boolean): void {
    this.isReadonly = isDisabled;
  }

  onFocus(event) {
    console.info("Method onFocus not implemented.");
}

  onBlur(event) {
    this.onModelTouched();
}

  onChange(event) {
    if(!this.isReadonly) {
      this.onClick.emit(null);
      this.checked = true;
      this.onModelChange(event.target.value);
  }
}

}
