import { AfterContentInit, Component,DoCheck,OnInit} from '@angular/core';
declare var FB:any;

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  isAuthenticated:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setAuthentication = (isAuthenticated:boolean) : void => {
    this.isAuthenticated = isAuthenticated;
  }
}
