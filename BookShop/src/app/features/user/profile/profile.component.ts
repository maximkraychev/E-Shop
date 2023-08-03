import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  @ViewChild('form') form!: NgForm;

  editable: boolean = false;

  editProfile() {
    this.editable = !this.editable;
  }

  saveProfile() {
    console.log(this.form);
    
    this.editable = !this.editable;
  }
}
