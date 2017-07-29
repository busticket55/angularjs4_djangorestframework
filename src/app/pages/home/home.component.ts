import { Component, OnInit } from '@angular/core';
import { User } from '../../model/index';
import { UserService } from '../../services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user_list: Array<any>;
  users: any;
  constructor(private userService: UserService) {

  }
  ngOnInit() {
        console.log("i am in ohome component");
        // get users from secure api end point
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let token = currentUser.token;
        console.log(currentUser.username);
         this.users=currentUser.username;
        this.userService.getUsers()
          .subscribe(title => {
              this.user_list = title
              console.log(title);
              console.log(this.user_list);//.users=users;
          });
      }

}
