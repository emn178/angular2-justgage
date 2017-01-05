window['Raphael'] = require('raphael');
import 'justgage';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { JustgageComponent } from './justgage.component';

const components = [JustgageComponent];

@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: components
})
export class JustgageModule { }
