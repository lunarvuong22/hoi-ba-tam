import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommunityComponent } from './community/community.component';
import { CreateComponent } from './community/create/create.component';
import { JoinComponent } from './community/join/join.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'; 
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { GroupsComponent } from './community/groups/groups.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CommunityComponent,
    CreateComponent,
    JoinComponent,
    GroupsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
