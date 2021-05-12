import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { CreateComponent } from './community/create/create.component';
import { JoinComponent } from './community/join/join.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path:'',  component:WelcomeComponent },
  { path:'community',  component:CommunityComponent, children : [
    { path:'create',  component:CreateComponent },
    { path:'join',  component:JoinComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
