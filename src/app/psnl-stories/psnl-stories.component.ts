import { Component, OnInit, Input } from '@angular/core';
import {StoriesService} from '../story.service/stories.service';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../mydialog/mydialog.component';



@Component({
  selector: 'app-psnl-stories',
  templateUrl: './psnl-stories.component.html',
  styleUrls: ['./psnl-stories.component.css']
})
export class PsnlStoriesComponent implements OnInit {
  stories =[];




  // @Input()

  constructor(private storyService: StoriesService, public dialog: MatDialog) { }

  ngOnInit() {
   

    this.getStory()
    }
        openDialog(){
         this.dialog.open(MyDialogComponent)

        }
  
    
    
  getStory(): void{
    this.storyService.getStory().subscribe(Story => {
      this.stories = Story;
      this.stories.reverse()
      console.log(Story)
    } )
  }


  deleteStory(id) : void {
    this.storyService.deleteStory(id).subscribe(Story =>{
      this.stories =Story
      this.getStory();
    })
  }



  }



