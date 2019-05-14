import { Component, OnInit } from '@angular/core';
import {StoriesService} from '../story.service/stories.service';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../mydialog/mydialog.component';


@Component({
  selector: 'app-u-legend',
  templateUrl: './u-legend.component.html',
  styleUrls: ['./u-legend.component.css']
})
export class ULegendComponent implements OnInit {
  legend =[]

 

  constructor(private storyService: StoriesService, public dialog: MatDialog) { }

  ngOnInit() {

    this.getLegend()
  }

    openDialog(){
      this.dialog.open(MyDialogComponent)
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
      this.legend =Legend
      this.getLegend();
    })
  }

}
