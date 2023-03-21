import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchbuttonComponent } from './searchbutton/searchbutton.component';
import { TogglebtnComponent } from './togglebtn/togglebtn.component';
import { UsersComponent } from './users/users.component';
import { StyledirDirective } from './styledir.directive';

@NgModule({
  declarations: [AppComponent, SearchbuttonComponent, TogglebtnComponent, UsersComponent, StyledirDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
