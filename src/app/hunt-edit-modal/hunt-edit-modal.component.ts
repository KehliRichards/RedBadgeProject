import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HuntLocationService } from '../huntLocation.service/hunt-location.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-hunt-edit-modal',
  templateUrl: './hunt-edit-modal.component.html',
  styleUrls: ['./hunt-edit-modal.component.css']
})
export class HuntEditModalComponent implements OnInit {

  editForm: FormGroup;
  posts = [];

  tags = [
    'Haunted Locations',
    'Personal Stories',
    'Urban Legends',
    'Ghost Hunts'
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private dbService: HuntLocationService, public DialogRef: MatDialogRef<HuntEditModalComponent>
  ) { }


  ngOnInit() {
    this.editForm = this.fb.group({
      tag: new FormControl(this.data.tag),
      location: new FormControl(this.data.location),
      time: new FormControl(this.data.time),
      date: new FormControl(this.data.date),
      description: new FormControl(this.data.description)
    })

  }

  onEditForm(event): void {
    console.log(this.data);
    event.preventDefault();
    console.log(this.editForm.value);
    this.posts.unshift(this.editForm.value)
    this.dbService.editPost(this.editForm.value, this.data.id).subscribe(Posts => this.posts[0] = Posts);
    this.closeDialog();
  }

  closeDialog() {
    this.DialogRef.close()
  }

}
