import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allschedules',
  templateUrl: './allschedules.component.html',
  styleUrls: ['./allschedules.component.css']
})

export class AllschedulesComponent implements OnInit {
  events: any[];
  resources: any[];
  headerConfig: any;
  resourceCol: any[];
  model: any = {};
  loading = false;
  error = '';


constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(){



    this.resources = [
      {
      id: 'a',
        group: '1',
        title: 'Driver 1'
      },
      {
      id: 'b',
        group: '1',
        title: 'Driver2'
      },
      {
        id: 'c',
        group: '1',
        title: 'Driver3'
      },
      {
        id: 'd',
        group: '2',
        title: 'Driver4'
      },
      {
        id: 'e',
        group: '2',
        title: 'Driver5'
      }
    ]
    this.events = [
      {
        id: '1',
        resourceId: 'a',
        title: 'Atlanta',
        start: '2017-05-11',
      },
      {
        id: '2',
        resourceId: 'b',
        title: 'Atlanta',
        start: '2017-05-12'
      },
      {
        id: '3',
        resourceId: 'c',
        title: 'Atlanta',
        start: '2017-05-11',
        end: '2017-05-12'
      },
      {
        id: '4',
        resourceId: 'd',
        title: 'Atlanta',
        start: '2017-05-11',
        end: '2017-05-12'
      },
      {
        id: '5',
        resourceId: 'e',
        title: 'Atlanta',
        start: '2017-05-11',
        end: '2017-05-12'
      }
    ];
    this.headerConfig = {
      left: 'prev,next today',
      center: 'title',
      right: 'timelineMonth,timelineWeek,timelineDay'
    };
    this.resourceCol = [ {
      group: true,
      labelText: 'Driver Group',
      field: 'group'
    },
      {
        labelText: 'Driver',
        field: 'title'
      }];
  }


  /*handleEventClick(e: any) {
    //e.event = Selected event
    //e.jsEvent = Browser click event
    //e.view = Current view object
    console.log('Selected event: ' + e.event);
    console.log('Browser click event: ' + e.jsEvent);
    console.log('Current view object: ' + e.view);
  }*/


}

