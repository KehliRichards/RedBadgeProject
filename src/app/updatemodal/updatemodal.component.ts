import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { StoriesService } from '../story.service/stories.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PsnlStoriesComponent } from '../psnl-stories/psnl-stories.component';



@Component({
  selector: 'app-updatemodal',
  templateUrl: './updatemodal.component.html',
  styleUrls: ['./updatemodal.component.css']
})
export class UpdateModalComponent implements OnInit {
  updateStory: FormGroup;
  stories= [];
  tag=[{value: 'Personal Stories'},
        {value: 'Urban Legends'},
        {value: 'Ghost hunts'},
        {value: 'Haunted Locations'}]


  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private storyService: StoriesService, public dialog: MatDialogRef<any>) { }

  ngOnInit() {
    this.updateStory =this.fb.group({
      title: new FormControl(this.data.title),
      time:new FormControl(this.data.time),
      date:new FormControl(this.data.date),
      img:new FormControl(this.data.img),
      description:new FormControl(this.data.description),
      tag: new FormControl(this.data.tag)

    })


   

  }

 

  onUpdateStory(): void {
    this.stories.unshift(this.updateStory.value)
    this.storyService.updateStory(this.updateStory.value, this.data.id).subscribe(Story => this.stories[0] = Story)
    this.closeDialog();

    
   }

   closeDialog() {
     this.dialog.close();
   }

}
