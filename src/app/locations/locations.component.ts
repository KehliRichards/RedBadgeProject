import { Component, OnInit, Input } from '@angular/core';
import { HuntLocationService } from '../huntLocation.service/hunt-location.service';
import { MatDialog } from '@angular/material';
import { HauntedLocationsModalComponent } from '../haunted-locations-modal/haunted-locations-modal.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  public _locations = {};
  locations = []

  @Input('location') location;

  constructor(private lService: HuntLocationService, public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(HauntedLocationsModalComponent)

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.findLocations();
    });
  }

  ngOnInit() {
    this.findLocations();
  }

  findLocations(): void {
    this.lService.getHauntedLocations().subscribe(Locations => {
      console.log(Locations);
      this.locations = Locations;
      this.locations.reverse();
    })
  }

  deleteLocation(): void {
    this.lService.deletePost().subscribe(Locations => {
      console.log(Locations);
      this.locations = Locations;
    })
  }

}
