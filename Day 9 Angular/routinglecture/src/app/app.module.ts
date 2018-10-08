import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  {path: '', component: TodoComponent },
  {path: 'country', component: CountryComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
