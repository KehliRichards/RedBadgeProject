import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HuntLocationService } from '../huntLocation.service/hunt-location.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-haunted-locations-modal',
  templateUrl: './haunted-locations-modal.component.html',
  styleUrls: ['./haunted-locations-modal.component.css']
})
export class HauntedLocationsModalComponent implements OnInit {

  createForm: FormGroup;
  posts = [];

  tags = [
    'Haunted Locations',
    'Personal Stories',
    'Urban Legends',
    'Ghost Hunts'
  ];

  constructor(private fb: FormBuilder, private dbService: HuntLocationService, public DialogRef: MatDialogRef<HauntedLocationsModalComponent>) { }

  ngOnInit() {
    this.createForm = this.fb.group({

      tag: new FormControl(),
      img: new FormControl(),
      location: new FormControl(),
      description: new FormControl()
    })
  }

  onCreateForm(event): void {
    event.preventDefault(); //.replace('\n','<br />')
    console.log(this.createForm.value.description);
    this.posts.unshift(this.createForm.value)
    this.dbService.createPost(this.createForm.value).subscribe(Posts => this.posts[0] = Posts);
    this.closeDialog();
    // location.reload()
  }

  closeDialog() {
    this.DialogRef.close()
  }

}
