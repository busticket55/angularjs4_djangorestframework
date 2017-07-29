/**
 * Created by ash on 5/9/17.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MyscheduleComponent } from './pages/myschedule/myschedule.component';
import { HomeComponent } from './pages/home/home.component';
import { AllschedulesComponent } from './pages/allschedules/allschedules.component';
import { AuthGuard } from './guards/index';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'myschedule',
    component: MyscheduleComponent
  },
  {
    path: 'allschedules',
    component: AllschedulesComponent
  }
];
 export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
