if (typeof window === 'object') {
  window['Raphael'] = require('raphael');
  require('justgage');
}

import { NgModule } from '@angular/core';
import { JustgageComponent } from './justgage.component';

@NgModule({
  declarations: [JustgageComponent],
  exports: [JustgageComponent]
})
export class JustgageModule { }
