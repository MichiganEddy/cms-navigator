import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResourceNotFoundComponent } from './resource-not-found/resource-not-found.component';
import { SiteAdminComponent } from './site-admin/site-admin.component';
import { WebsiteComponent } from './website/website.component';
import { WebpageComponent } from './webpage/webpage.component';
import { EditTextComponent } from './edit-text/edit-text.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    SignUpComponent,
    ResourceNotFoundComponent,
    SiteAdminComponent,
    WebsiteComponent,
    WebpageComponent,
    EditTextComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
