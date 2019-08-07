import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-first-custom-input',
  templateUrl: './first-custom-input.component.html',
  styleUrls: ['./first-custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FirstCustomInputComponent),
      multi: true
    }
  ]
})
export class FirstCustomInputComponent implements ControlValueAccessor {
  @Input() type = 'text';
  @Input() isRequired: boolean = false;
  @Input() pattern: string = null;
  @Input() label: string = null;
  @Input() placeholder: string;
  @Input() errorMsg: string;

  @Input()
  _emailValue: any;

  get emailValue() {
    return this._emailValue;
  }

  set emailValue(val) {
    this._emailValue = val;
    this.propagateChange(this._emailValue);
  }

  writeValue(val: any): void {
    if (val !== undefined) {
      this.emailValue = val;
    }
  }

  propagateChange = (_: any) => {};


  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    console.log('register on touch');
    //throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('set disabeld state');
    //throw new Error("Method not implemented.");
  }

}
