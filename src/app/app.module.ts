import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { provideAuth } from 'angular2-jwt';

// import { fakeBackendProvider } from './helpers/index';
// import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RoutingModule } from './app.routes';
// services
// import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/index';
import { AuthenticationService, UserService } from './services/index';
// full calendar
import 'jquery';
import 'moment';
import 'fullcalendar';

// primeng components
import {PanelModule, ScheduleModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';

import { MyscheduleComponent } from './pages/myschedule/myschedule.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './base_components/navbar/navbar.component';
import { SidebarComponent } from './base_components/sidebar/sidebar.component';
import { FooterComponent } from './base_components/footer/footer.component';
import { AllschedulesComponent } from './pages/allschedules/allschedules.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyscheduleComponent,
    SchedulerComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AllschedulesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    GrowlModule,
    ScheduleModule,

  ],
//  providers: [AuthService],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    //fakeBackendProvider,
    //MockBackend,
    //BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
