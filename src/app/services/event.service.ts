/**
 * Created by ash on 5/9/17.
 */
import {Injectable} from '@angular/core';
import {Event} from '../model/event.model';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';


@Injectable()
export class EventService {

	constructor(public http:Http){


	console.log('EventService is rannnnnn....');
	}


	getPost(){
	return this.http.get('http://138.197.101.197/api/dummyevents/')
		.map (res => res.json());
	}



  private apiURL = ''

  /*getAll(): Event[] {
    return[
      {title: 'Atl', start: '2017-05-21', end: '2017-05-22'}
    ];
  }*/
}
