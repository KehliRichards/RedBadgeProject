import { Component, OnInit, Input } from '@angular/core';
import { HuntLocationService } from '../huntLocation.service/hunt-location.service';
import { MatDialog } from '@angular/material';
import { AuthService } from '../auth.service/auth.service';
import { HauntedLocationsModalComponent } from '../haunted-locations-modal/haunted-locations-modal.component';
import { LocationEditModalComponent } from '../location-edit-modal/location-edit-modal.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  public _locations = {};
  locations = []
  userId = ''
  postInfo = ''

  @Input('location') location;

  constructor(private lService: HuntLocationService, public dialog: MatDialog, private aService: AuthService) { }

  isAdmin: boolean = false;

  ngOnInit() {
    this.currentUser();
    this.currentUserA();
    this.findLocations();
  }

  // user: boolean = false;


  openDialog() {
    const dialogRef = this.dialog.open(HauntedLocationsModalComponent)

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.findLocations();
    });
  }

  openDialog1(info) {
    // console.log(id);
    this.postInfo = info;
    const dialogRef = this.dialog.open(LocationEditModalComponent, {
      data: this.postInfo
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.findLocations();
    });
  }

  findLocations(): void {
    this.lService.getHauntedLocations().subscribe(Locations => {
      console.log(Locations);
      this.locations = Locations;
      this.locations.reverse();
    })
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
      this.userId = User[0].id;
      console.log(this.userId);
    })
  }


  adminDelete(id): void {
    this.lService.deletePostAdmin(id).subscribe(Delete => {
      console.log(id);
      this.findLocations();
    })
  }


  deleteLocation(id): void {
    this.lService.deletePost(id).subscribe(Locations => {
      this.findLocations();
    })
  }
}
