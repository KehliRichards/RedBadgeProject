import { Component, OnInit, Input } from '@angular/core';
import { HuntLocationService } from '../huntLocation.service/hunt-location.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { GhostHuntModalComponent } from '../ghost-hunt-modal/ghost-hunt-modal.component';
import { AuthService } from '../auth.service/auth.service';

@Component({
  selector: 'app-ghost-hunt',
  templateUrl: './ghost-hunt.component.html',
  styleUrls: ['./ghost-hunt.component.css']
})
export class GhostHuntComponent implements OnInit {
  public _ghosthunts = {};
  ghosthunts = []
  userId = ''

  @Input('hunt') hunt;


  constructor(private hService: HuntLocationService, public dialog: MatDialog, private aService: AuthService) { }


  openDialog() {
    const dialogRef = this.dialog.open(GhostHuntModalComponent)

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.findGhostHunts();
    });
  }


  ngOnInit() {
    this.findGhostHunts();
    this.currentUser();
  }

  findGhostHunts(): void {
    this.hService.getGhostHunts().subscribe(Ghosthunts => {
      console.log(Ghosthunts);
      this.ghosthunts = Ghosthunts;
      this.ghosthunts.reverse();
    })
  }

  deleteGhostHunt(id): void {
    this.hService.deletePost(id).subscribe(GhostHunts => {
      this.findGhostHunts();
    })
  }

  currentUser(): void {
    this.aService.getUser().subscribe(User => {
      this.userId = User[0].id;
    })
  }



}
