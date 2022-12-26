import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { SortFirstNamePipe } from './pipes/sort-first-name.pipe';
import { SortLastNamePipe } from './pipes/sort-last-name.pipe';
import { SortPhoneNumberPipe } from './pipes/sort-phone-number.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    SortFirstNamePipe,
    SortLastNamePipe,
    SortPhoneNumberPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
