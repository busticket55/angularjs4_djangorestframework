import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-myschedule',
  templateUrl: './myschedule.component.html',
  styleUrls: ['./myschedule.component.css'],
})
export class MyscheduleComponent implements OnInit {
  events: any[];
  headerConfig: any;

  public constructor() { }

  ngOnInit(): void {
    this.events = [
      {
        "title": "All Day Event",
        "start": "2017-01-01"
      },
      {
        "title": "Long Event",
        "start": "2017-01-07",
        "end": "2017-01-10"
      },
      {
        "title": "Repeating Event",
        "start": "2017-01-09T16:00:00"
      },
      {
        "title": "Repeating Event",
        "start": "2017-01-16T16:00:00"
      },
      {
        "title": "Conference",
        "start": "2017-01-11",
        "end": "2017-01-13"
      }
    ];
    this.headerConfig = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
  }


  handleEventClick(e: any) {
    //e.event = Selected event
    //e.jsEvent = Browser click event
    //e.view = Current view object
    console.log('Selected event: ' + e.event);
    console.log('Browser click event: ' + e.jsEvent);
    console.log('Current view object: ' + e.view);
  }


}
