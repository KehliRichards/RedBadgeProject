import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { StoriesService } from '../story.service/stories.service';




@Component({
  selector: 'app-mydialog',
  templateUrl: './mydialog.component.html',
  styleUrls: ['./mydialog.component.css']
})
export class MyDialogComponent implements OnInit {
  createStory: FormGroup;
  stories= [];
  tag=[{value: 'Personal Stories'},
        {value: 'Urban Legends'},
        {value: 'Ghost hunts'},
        {value: 'Haunted Locations'}
]

  constructor( private fb: FormBuilder, private storyService: StoriesService ) { }

  ngOnInit() {
    this.createStory =this.fb.group({
      title: new FormControl(),
      time:new FormControl(),
      date:new FormControl(),
      img:new FormControl(),
      description:new FormControl(),
      tag: new FormControl()

    })
  
  }


  onCreateStory(): void {
  // console.log(this.createStory.value)
    this.stories.unshift(this.createStory.value)
    this.storyService.makeStory(this.createStory.value).subscribe(Story => this.stories[0] =Story)
  }

}
