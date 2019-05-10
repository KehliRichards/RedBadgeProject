import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {StoriesService} from '../story.service/stories.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-psnl-stories',
  templateUrl: './psnl-stories.component.html',
  styleUrls: ['./psnl-stories.component.css']
})
export class PsnlStoriesComponent implements OnInit {
  createStory: FormGroup
  stories =[]

  @Input('tale') tale;

  constructor(private storyService: StoriesService) { }

  ngOnInit() {

    this.getStory()
    }
  
    
    
  getStory(): void{
    this.storyService.getStory().subscribe(Story => {
      this.stories = Story;
      console.log(Story)
    } )
  }

  }


