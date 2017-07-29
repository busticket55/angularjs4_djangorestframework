/**
 * Created by ash on 5/22/17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthenticationService } from '../services/index';
import { User } from '../model/index';

@Injectable()
export class UserService {
  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
  }

  getUsers(): Observable<User[]> {
    // add authorization header with jwt token
    let headers = new Headers({ 'Accept': 'application/json',
      'Content-Type': 'application/json','Authorization': 'Bearer ' + this.authenticationService.token });


    let options = new RequestOptions({ headers: headers});

    // get users from api

    return this.http.get('https://jsonplaceholder.typicode.com/posts', options)
      .map((response: Response) => response.json());
  }
}
