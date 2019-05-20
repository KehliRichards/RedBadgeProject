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

  objectArray = [];
  obj = {};

  editForm: FormGroup;
  posts = [];
  
  latitude = 39.690617;
  longitude = -86.173619;
  locationChosen = false;

  clickedLatitude = this.data.longitude;
  clickedLongitude = this.data.longitude;

  chosenLatitude = ['latitude'];
  chosenLongitude = ['longitude'];

  tags = [
    'Haunted Locations',
    'Personal Stories',
    'Urban Legends',
    'Ghost Hunts'
  ];

  onChosenLocation(event) {
    console.log(event);
    this.clickedLatitude = event.coords.lat;
    this.clickedLongitude = event.coords.lng;
    this.chosenLatitude.push(event.coords.lat);
    this.chosenLongitude.push(event.coords.lng);
    this.locationChosen = true;
    console.log(this.chosenLatitude);
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private dbService: HuntLocationService, public DialogRef: MatDialogRef<HuntEditModalComponent>
  ) { }


  ngOnInit() {
    this.editForm = this.fb.group({
      tag: new FormControl(this.data.tag),
      location: new FormControl(this.data.location),
      // time: new FormControl(this.data.time),
      date: new FormControl(this.data.date),
      description: new FormControl(this.data.description)
    })

  }

  onEditForm(event): void {
    event.preventDefault();
 
    this.objectArray = Object.entries(this.editForm.value);
    this.objectArray.push(this.chosenLatitude, this.chosenLongitude);

    let object = {};
    this.objectArray.forEach(function (data) {
      object[data[0]] = data[1]
    });
    this.obj = object;

    console.log(this.obj);
    this.posts.unshift(this.obj)
    this.dbService.editPost(this.obj, this.data.id).subscribe(Posts => this.posts[0] = Posts);
    this.closeDialog();
  }

  closeDialog() {
    this.DialogRef.close()
  }

}
