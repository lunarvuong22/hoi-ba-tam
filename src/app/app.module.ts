import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommunityComponent } from './community/community.component';
import { CreateComponent } from './community/create/create.component';
import { JoinComponent } from './community/join/join.component';
import { AuthComponent } from './community/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CommunityComponent,
    CreateComponent,
    JoinComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
