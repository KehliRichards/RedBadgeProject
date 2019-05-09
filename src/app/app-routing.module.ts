import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllComponent } from './all/all.component';
import { LocationsComponent } from './locations/locations.component';
import { PsnlStoriesComponent } from './psnl-stories/psnl-stories.component';
import { ULegendComponent } from './u-legend/u-legend.component';
import { GhostHuntComponent } from  './ghost-hunt/ghost-hunt.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard/auth.guard';

const routes: Routes = [
  { path: 'home', component: AllComponent, canActivate: [AuthGuard] },
  { path: 'locations', component: LocationsComponent, canActivate: [AuthGuard] },
  { path: 'stories', component: PsnlStoriesComponent, canActivate: [AuthGuard] },
  { path: 'legends', component: ULegendComponent, canActivate: [AuthGuard] },
  { path: 'hunt', component: GhostHuntComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
