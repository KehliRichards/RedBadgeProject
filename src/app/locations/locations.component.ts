import { Component, OnInit, Input } from '@angular/core';
import { HuntLocationService } from '../huntLocation.service/hunt-location.service';
import { MatDialog } from '@angular/material';
import { AuthService } from '../auth.service/auth.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  public _locations = {};
  locations = []

  @Input('location') location;

  constructor(private lService: HuntLocationService, public dialog: MatDialog, private aService: AuthService) { }

  isAdmin: boolean = false;
  userid = '';

  ngOnInit() {
    this.findLocations();
    this.currentUserA();
    this.currentUser();
  }


  currentUserA(): void {
    this.aService.getUser().subscribe(User => {
      console.log(User[0]);
      // this.user = User[0];
      // this.user.reverse();
      if(User[0].isAdmin === true) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    })
  }

  currentUser(): void {
    this.aService.getUser().subscribe(User => {
      console.log(User[0]);
      this.userid = User[0].id;
    })
  }


  findLocations(): void {
    this.lService.getHauntedLocations().subscribe(Locations => {
      console.log(Locations);
      this.locations = Locations;
      this.locations.reverse();
    })
  }


  adminDelete(id): void {
    this.lService.deletePostAdmin(id).subscribe(Delete => {
      console.log(id);
      this.findLocations();
    })
  }

}