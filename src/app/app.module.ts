import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { CollectionComponent } from './collection/collection.component';
import { MainComponent } from './main/main.component';

import { EmailService } from './email.service';
import { AuthService } from './auth.service';
import { CollectionService } from './collection.service';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'collection', component: CollectionComponent},
  {path: '**', redirectTo: '/main'}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServicesComponent,
    ContactComponent,
    CollectionComponent,
    MainComponent,
    UserNavbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    EmailService,
    AuthService,
    CollectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
