import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTodoComponent } from './components/app-todo/app-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AppTodoComponent
  ]
})
export class AppModule { }
