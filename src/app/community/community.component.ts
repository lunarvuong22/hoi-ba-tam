import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  isAuthenticated:boolean = false;
  user:object;

  constructor() { }

  ngOnInit(): void {

  }

  setAuthentication = (payload:any) : void => {
    this.isAuthenticated = payload.isAuthenticated;
    this.user = payload.user;
  }
}
