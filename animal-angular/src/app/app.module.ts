import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } form '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    AnimalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
