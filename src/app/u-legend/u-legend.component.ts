import { Component, OnInit } from '@angular/core';
import {StoriesService} from '../story.service/stories.service';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../mydialog/mydialog.component';
import {UpdateModalComponent} from '../updatemodal/updatemodal.component';
import { AuthService } from '../auth.service/auth.service';


@Component({
  selector: 'app-u-legend',
  templateUrl: './u-legend.component.html',
  styleUrls: ['./u-legend.component.css']
})
export class ULegendComponent implements OnInit {
  legend =[]
  userId= '';
  postInfo='';

 

  constructor(private storyService: StoriesService, private aService: AuthService, public dialog: MatDialog, public update: MatDialog) { }

  ngOnInit() {

    this.getLegend()
    this.currentUser()
  }

    openDialog(){
     const create= this.dialog.open(MyDialogComponent)

      create.afterClosed().subscribe(result => {
        this.getLegend
      })
    }

    updateDialog(id){
      // console.log(id)
      this.postInfo =id
      const update = this.update.open(UpdateModalComponent, {
        data: this.postInfo
      })

      update.afterClosed().subscribe(result =>{
        this.getLegend()
      })
    }

  getLegend(): void {
    this.storyService.getLegend().subscribe(Legends => {
      this.legend =Legends;
      this.legend.reverse();
      console.log(Legends)
    })
  }
  deleteLegend(id) : void {
    this.storyService.deleteLegend(id).subscribe(Legend =>{
      // this.legend =Legend
      this.getLegend();
    })
  }

currentUser(): void{
  this.aService.getUser().subscribe(User =>{
    this.userId = User[0].id;
  })
}

}
