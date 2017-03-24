import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DogsService} from "./services/dogs.service";
import { FormattedDogNamePipe } from './pipes/formatted-dog-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormattedDogNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
