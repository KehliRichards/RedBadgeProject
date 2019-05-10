import { Component, OnInit, Input } from '@angular/core';
import { HuntLocationService } from '../huntLocation.service/hunt-location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  public _locations = {};
  locations = []

  @Input('location') location;

  constructor(private lService: HuntLocationService) { }

  ngOnInit() {
    this.findLocations();
  }

  findLocations(): void {
    this.lService.getHauntedLocations().subscribe(Locations => {
      console.log(Locations);
      this.locations = Locations;
    })
  }

}
