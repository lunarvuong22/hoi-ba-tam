import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
declare var FB:any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Input('isAuthenticated') isAuthenticated:boolean;
  @Output('setAuthentication') setAuthentication = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  login = () : void => {
    FB.login(response => {
      if (response.authResponse) {
        console.log('logged successful');
        this.setAuthentication.emit({
          isAuthenticated:true,
          user:response,
        });
      } else console.log('failed');
    });
  }

  logout = () : void => {
    FB.getLoginStatus(response => {
      if (response.status == 'connected') {
        FB.logout(response => {
          this.setAuthentication.emit({
            isAuthenticated:false,
            user:{},
          });
        });
      }
    });
  }

}
