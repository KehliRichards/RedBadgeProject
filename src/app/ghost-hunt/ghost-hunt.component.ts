import { Component, OnInit, Input } from '@angular/core';
import { HuntLocationService } from '../huntLocation.service/hunt-location.service';

@Component({
  selector: 'app-ghost-hunt',
  templateUrl: './ghost-hunt.component.html',
  styleUrls: ['./ghost-hunt.component.css']
})
export class GhostHuntComponent implements OnInit {
  public _ghosthunts = {};
  ghosthunts = []

  @Input('hunt') hunt;

  constructor(private hService: HuntLocationService) { }

  ngOnInit() {
    this.findGhostHunts();
  }

  findGhostHunts(): void {
    this.hService.getGhostHunts().subscribe(Ghosthunts => {
      console.log(Ghosthunts);
      this.ghosthunts = Ghosthunts;
    })
  }

}
