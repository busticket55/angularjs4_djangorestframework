import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/index';

@Component({
  selector: 'app-login',

  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        console.log(result)
        if (result === true) {
          // login successful
          this.router.navigate(['/home']);
        } else {
          // login failed
          this.error = 'Username or password is incorrect';
          //this.loading = false;
          alert("it is wrong");
          this.router.navigate(['/login']);
        }
      });
  }
}
