import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  present_user : any;
  constructor() { }

  ngOnInit() {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       console.log("i am in current user nva");
       this.present_user = currentUser.username

  }

}
