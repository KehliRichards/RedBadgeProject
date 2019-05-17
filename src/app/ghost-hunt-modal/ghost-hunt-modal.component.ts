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

  // currentTime = '';

  objectArray = [];
  obj = {};

  createForm: FormGroup;
  posts = [];
  latitude = 39.690617;
  longitude = -86.173619;
  locationChosen = false;

  clickedLatitude = null;
  clickedLongitude = null;

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

  constructor(private fb: FormBuilder, private dbService: HuntLocationService, public DialogRef: MatDialogRef<GhostHuntModalComponent>
  ) { }


  ngOnInit() {
    // let today = new Date();
    // this.currentTime  = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

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
    this.objectArray = Object.entries(this.createForm.value);
    this.objectArray.push(this.chosenLatitude, this.chosenLongitude);

    let object = {};
    this.objectArray.forEach(function (data) {
      object[data[0]] = data[1]
    });
    this.obj = object;

    this.posts.unshift(this.obj)
    this.dbService.createPost(this.obj).subscribe(Posts => this.posts[0] = Posts);
    this.closeDialog();
  }



  closeDialog() {
    this.DialogRef.close()
    this.chosenLatitude = ['latitude'];
    this.chosenLongitude = ['longitude'];
  }

}
