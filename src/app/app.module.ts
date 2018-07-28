import { NgModule, Injector } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { CommonModule} from '@angular/common';
import { FormsModule}    from '@angular/forms';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  imports: [
    BrowserModule, CommonModule, FormsModule
  ],
  declarations: [
    InputNumberComponent
  ],
  providers: [],
  entryComponents: [InputNumberComponent]
  //,
  //bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }
  
  ngDoBootstrap() { 
    const twiceEl = createCustomElement(InputNumberComponent, { injector: this.injector });
    customElements.define('twice-number', twiceEl);
  }

  
 }
