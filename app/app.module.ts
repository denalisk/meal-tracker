import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { Component, Injectable, NgModule } from '@angular/core';
import { HttpModule, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@NgModule({
  imports: [ BrowserModule, FormsModule, Injectable, HttpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
