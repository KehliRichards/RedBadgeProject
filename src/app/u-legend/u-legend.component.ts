import { Component, OnInit, Input } from '@angular/core';
import{FormGroup} from '@angular/forms';
import {StoriesService} from '../story.service/stories.service';

@Component({
  selector: 'app-u-legend',
  templateUrl: './u-legend.component.html',
  styleUrls: ['./u-legend.component.css']
})
export class ULegendComponent implements OnInit {
  createLegend: FormGroup
  legend =[]

  @Input('urband') urban;

  constructor(private storyService: StoriesService) { }

  ngOnInit() {

    this.getLegend()
  }

  getLegend(): void {
    this.storyService.getLegend().subscribe(Legends => {
      this.legend =Legends;
      console.log(Legends)
    })
  }

}
