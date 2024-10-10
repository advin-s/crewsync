import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ListingComponent } from './listing/listing.component';
import { HeaderComponent } from './shared/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './user-form/user-form.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ListingComponent,
    HeaderComponent,
    LayoutComponent,
    ViewUserComponent,
    UserFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
