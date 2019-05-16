import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { StoriesService } from '../story.service/stories.service';
import { MatDialogRef } from '@angular/material/dialog';




@Component({
  selector: 'app-mydialog',
  templateUrl: './mydialog.component.html',
  styleUrls: ['./mydialog.component.css']
})
export class MyDialogComponent implements OnInit {
  createStory: FormGroup;
  stories= [];
  tag=['Haunted Locations',
  'Personal Stories',
  'Urban Legends',
  'Ghost Hunts']

  constructor( private fb: FormBuilder, private storyService: StoriesService, public dialog: MatDialogRef<any> ) { }

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
    this.closeDialog();
  }

  closeDialog() {
    this.dialog.close();
  }

}
