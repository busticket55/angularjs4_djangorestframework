/**
 * Created by ash on 5/9/17.
 */
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import {Injectable} from '@angular/core';
import {Event} from '../model/event.model';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import { AuthenticationService } from '../services/index';
import { User } from '../model/index';


@Injectable()
export class EventService {
  constructor(public http:Http,
              private authenticationService: AuthenticationService){
	      console.log('EventService is rannnnnn....');
 	 }

	getPost(){
	console.log(this.authenticationService.token);
	let headers = new Headers({
      'Authorization':'Bearer'+this.authenticationService.token
   });

   let options = new RequestOptions({
      headers: headers
    });
  console.log(headers);
	return this.http.get('http://138.197.101.197/api/dummyevents/',options)
		.map (res => res.json());
	}





}
