import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { LocationsComponent } from './locations/locations.component';
import { PsnlStoriesComponent } from './psnl-stories/psnl-stories.component';
import { ULegendComponent } from './u-legend/u-legend.component';
import { GhostHuntComponent } from './ghost-hunt/ghost-hunt.component';
import { AuthComponent } from './auth/auth.component';
import { AllComponent } from './all/all.component';

import { AuthService } from './auth.service/auth.service';
import { AuthGuard } from './auth.guard/auth.guard';
import { GhostHuntModalComponent } from './ghost-hunt-modal/ghost-hunt-modal.component';
import { HauntedLocationsModalComponent } from './haunted-locations-modal/haunted-locations-modal.component';
import { HuntEditModalComponent } from './hunt-edit-modal/hunt-edit-modal.component';
import { LocationEditModalComponent } from './location-edit-modal/location-edit-modal.component';
import { MyDialogComponent } from './mydialog/mydialog.component';
import { UpdateModalComponent } from './updatemodal/updatemodal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProfileComponent,
    LocationsComponent,
    PsnlStoriesComponent,
    ULegendComponent,
    GhostHuntComponent,
    AuthComponent,
    AllComponent,
    GhostHuntModalComponent,
    HauntedLocationsModalComponent,
    HuntEditModalComponent,
    LocationEditModalComponent,
    MyDialogComponent,
    UpdateModalComponent
  ],
  entryComponents: [GhostHuntModalComponent, HauntedLocationsModalComponent, HuntEditModalComponent, LocationEditModalComponent, MyDialogComponent, UpdateModalComponent],



  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOxufilZizAdak2M71czQBRJW-X9M7bP0'
    })
  ],
  // exports: [
  //   MatDatepickerModule
  // ],
  providers: [HttpClient, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
