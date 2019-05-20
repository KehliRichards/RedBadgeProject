import { Component, OnInit } from '@angular/core';
import { HuntLocationService } from '../huntLocation.service/hunt-location.service';
import { StoriesService } from '../story.service/stories.service';
import { isNumber } from 'util';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {

  public newestPost = [];

  idsSL = [];
  idsHL = [];

  newSL: number = null;
  newHL: number = null;

  newestHL = [];
  newestSL = [];

  dParsedSL: number = null;
  dParsedHL: number = null;

  latitude = 39.690617;
  longitude = -86.173619;


  constructor(private hService: HuntLocationService, private sService: StoriesService) { }

  ngOnInit() {
    this.findNewest();

  }

  findNewest(): void {
    this.hService.getAllHL().subscribe(HuntLocations => {
      for(let i = 0; i <= HuntLocations.length; i++) {
        if(HuntLocations[i] === undefined) {
          break;
        } else {
          this.idsHL.push(i);
        }
      }
      this.newHL = Math.max.apply(null, this.idsHL);
      this.newestHL = HuntLocations[this.newHL];
      this.dParsedHL = Date.parse(HuntLocations[this.newHL].createdAt);
    })

    this.sService.getAllSL().subscribe(StoryLegends => {
      for(let i = 0; i <= StoryLegends.length; i++) {
        if(StoryLegends[i] === undefined) {
          break;
        } else {
          this.idsSL.push(i);
        }
      }
      this.newSL = Math.max.apply(null, this.idsSL);
      this.newestSL = StoryLegends[this.newSL];
      this.dParsedSL = Date.parse(StoryLegends[this.newSL].createdAt);

      if(this.dParsedHL > this.dParsedSL){
        this.newestPost = this.newestHL;
      } else {
        this.newestPost = this.newestSL;
      }
    })
  }
}
