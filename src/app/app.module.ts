import { NgModule, Injector } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { CommonModule} from '@angular/common';
import { FormsModule}    from '@angular/forms';
import { InputRadioModule } from './input-radio/input-radio.module';
import { BeatApplicationComponent } from './beat-application/beat-application.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  imports: [
    BrowserModule, InputRadioModule, CommonModule, FormsModule
  ],
  declarations: [
    //AppComponent,
    BeatApplicationComponent,
    InputNumberComponent
  ],
  providers: [],
  entryComponents: [InputNumberComponent,BeatApplicationComponent]
  //,
  //bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }
  
  ngDoBootstrap() { 
    
    const beatEl = createCustomElement(BeatApplicationComponent, {injector: this.injector});
    customElements.define('beat-application', beatEl);

    const twiceEl = createCustomElement(InputNumberComponent, { injector: this.injector });
    customElements.define('twice-number', twiceEl);
  }

  
 }
