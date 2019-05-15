import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

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
    AllComponent
  ],
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
    MatNativeDateModule
  ],
  providers: [HttpClient, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
