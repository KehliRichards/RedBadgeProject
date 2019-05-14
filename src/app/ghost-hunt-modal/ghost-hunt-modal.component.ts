import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HuntLocationService } from '../huntLocation.service/hunt-location.service';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-ghost-hunt-modal',
  templateUrl: './ghost-hunt-modal.component.html',
  styleUrls: ['./ghost-hunt-modal.component.css']
})
export class GhostHuntModalComponent implements OnInit {

  createForm: FormGroup;
  posts = [];

  tags = [
    'Haunted Locations',
    'Personal Stories',
    'Urban Legends',
    'Ghost Hunts'
  ];

  constructor(private fb: FormBuilder, private dbService: HuntLocationService, public DialogRef: MatDialogRef<GhostHuntModalComponent>
  ) { }


  ngOnInit() {
    this.createForm = this.fb.group({
      tag: new FormControl(),
      location: new FormControl(),
      time: new FormControl(),
      date: new FormControl(),
      description: new FormControl()
    })

  }

  onCreateForm(event): void {
    event.preventDefault();
    console.log(this.createForm.value);
    this.posts.unshift(this.createForm.value)
    this.dbService.createPost(this.createForm.value).subscribe(Posts => this.posts[0] = Posts);
    this.closeDialog();
    // location.reload()
  }

  closeDialog() {
    this.DialogRef.close()
  }

}
