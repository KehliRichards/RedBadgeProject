import { Component, OnInit, Input } from '@angular/core';
import {StoriesService} from '../story.service/stories.service';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../mydialog/mydialog.component';
import {UpdateModalComponent} from '../updatemodal/updatemodal.component'
import { AuthService } from '../auth.service/auth.service';



@Component({
  selector: 'app-psnl-stories',
  templateUrl: './psnl-stories.component.html',
  styleUrls: ['./psnl-stories.component.css']
})
export class PsnlStoriesComponent implements OnInit {
  stories =[];
  userId='';
  postInfo='';




  // @Input()

  constructor(private storyService: StoriesService,private aService: AuthService, public dialog: MatDialog, public update: MatDialog) { }

  ngOnInit() {
   
    this.currentUser()
    this.getStory()
   
    }
        openDialog(){
         this.dialog.open(MyDialogComponent)

        }

        updateDialog(id){
          // console.log(id)
          this.postInfo =id
          const update = this.update.open(UpdateModalComponent, {
            data: this.postInfo
          })

          update.afterClosed().subscribe(result =>{
            this.getStory()
          })
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
      // this.stories =Story
      this.getStory();
    })
  }

currentUser(): void{
  this.aService.getUser().subscribe(User =>{
    this.userId = User[0].id;
  })
}

  }



