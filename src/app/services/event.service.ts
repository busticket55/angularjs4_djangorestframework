/**
 * Created by ash on 5/9/17.
 */
import {Injectable} from '@angular/core';
import {Event} from '../model/event.model';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventService {

  private apiURL = ''

  /*getAll(): Event[] {
    return[
      {title: 'Atl', start: '2017-05-21', end: '2017-05-22'}
    ];
  }*/
}
