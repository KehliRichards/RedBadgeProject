import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../story.service/stories.service';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../mydialog/mydialog.component';
import { UpdateModalComponent } from '../updatemodal/updatemodal.component';
import { AuthService } from '../auth.service/auth.service';


@Component({
  selector: 'app-u-legend',
  templateUrl: './u-legend.component.html',
  styleUrls: ['./u-legend.component.css']
})
export class ULegendComponent implements OnInit {
  legend = []
  userId = '';
  postInfo = '';
  isAdmin: boolean = false;


  constructor(private storyService: StoriesService, private aService: AuthService, public dialog: MatDialog, public update: MatDialog) { }

  ngOnInit() {

    this.currentUser();
    this.currentUserA();
    this.getLegend();
    
  }

  openDialog() {
    const create = this.dialog.open(MyDialogComponent)

    create.afterClosed().subscribe(result => {
      this.getLegend();
    })
  }

  updateDialog(id) {
    // console.log(id)
    this.postInfo = id
    const update = this.update.open(UpdateModalComponent, {
      data: this.postInfo
    })

    update.afterClosed().subscribe(result => {
      this.getLegend()
    })
  }

  getLegend(): void {
    this.storyService.getLegend().subscribe(Legends => {
      this.legend = Legends;
      this.legend.reverse();
      console.log(Legends)
    })
  }
  deleteLegend(id): void {
    this.storyService.deleteLegend(id).subscribe(Legend => {
      // this.legend =Legend
      this.getLegend();
    })
  }


  currentUserA(): void {
    this.aService.getUser().subscribe(User => {
      console.log(User[0]);
      // this.user = User[0];
      // this.user.reverse();
      if (User[0].isAdmin === true) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    })
  }

  currentUser(): void {
    this.aService.getUser().subscribe(User => {
      this.userId = User[0].id;
    })
  }

  adminDelete(id): void {
    this.storyService.deletePostAdmin(id).subscribe(Delete => {
      console.log(id);
      this.getLegend();
    })
  }

}
