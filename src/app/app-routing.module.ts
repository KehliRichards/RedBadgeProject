import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllComponent } from './all/all.component';
import { LocationsComponent } from './locations/locations.component';
import { PsnlStoriesComponent } from './psnl-stories/psnl-stories.component';
import { ULegendComponent } from './u-legend/u-legend.component';
import { GhostHuntComponent } from  './ghost-hunt/ghost-hunt.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: AllComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'stories', component: PsnlStoriesComponent },
  { path: 'legends', component: ULegendComponent },
  { path: 'hunt', component: GhostHuntComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
