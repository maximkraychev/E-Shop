import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BTN_TITLES } from 'src/app/config/btn-title';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { UploadImageService } from './services/upload-image.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
  providers: [
    UploadImageService
  ]
})
export class CreateBookComponent {

  @ViewChild('createBookForm') createForm!: NgForm;

  btnTitile: string = BTN_TITLES.CREATE_BOOK;
  btnLoad: boolean = false;

  selectedImage: File | null = null;
  imageUrl: string | undefined;


  constructor(private uploadImageService: UploadImageService) { }

  async createBookHandler() {

    if (!this.selectedImage) {
      return;
    }

    this.imageUrl = await this.uploadImageService.upload(this.selectedImage);
    console.log(this.imageUrl);


  }

  handleFileInput(event: any): void {
    this.selectedImage = event.target.files[0];
  }
}
