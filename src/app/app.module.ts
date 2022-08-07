import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsersComponent } from './components/users/users.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const APP_ROUTES : Routes = [
  {
    path:'',
    component : UsersComponent,
    pathMatch:'full'
  },
  {
    path:'users',
    component : UsersComponent
  },
  {
    path:'add',
    component : UserFormComponent
  },
  {
    path:'edit/:id',
    component : UserFormComponent
  },
  {
    path:'**',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsersComponent,
    UserFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
