import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service/auth.service';
import { HuntLocationService } from '../huntLocation.service/hunt-location.service';
import { StoriesService } from '../story.service/stories.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public button = 'd';
  locations = []
  user = [];

  constructor(private sService: StoriesService, private aService: AuthService, private lService: HuntLocationService) { }

  ngOnInit() {
    this.currentUser();
    this.buttonA();
    // console.log(localStorage);
  }

  currentUser(): void {
    this.aService.getUser().subscribe(User => {
      console.log(User);
      this.user = User[0];
      // this.user.reverse();
    })
  }

  buttonA() {
    this.lService.getUsersHauntedLocations().subscribe(Locations => {
      console.log(Locations);
      this.locations = Locations;
      this.locations.reverse();
    })
  }
  buttonB() {
    this.sService.getUsersPersonalStories().subscribe(Stories => {
      console.log(Stories);
      this.locations = Stories;
      this.locations.reverse();
    })
  }
  buttonC() {
    this.sService.getUsersUrbanLegends().subscribe(Legends => {
      console.log(Legends);
      this.locations = Legends;
      this.locations.reverse();
    })
  }
  buttonD() {
    this.lService.getUsersGhostHunts().subscribe(Hunts => {
      console.log(Hunts);
      this.locations = Hunts;
      this.locations.reverse();
    })
  }

}
