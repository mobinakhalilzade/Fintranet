import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/app.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  uploadImage: boolean = false;
  image: string | null;
  constructor(private router: Router,private dataSharing:DataSharingService) {}

  ngOnInit(): void {}

  onChange(event: any) {
    const imgPath = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      'load',
      function () {
        let imagePreview = reader.result as string;
        localStorage.setItem('image', imagePreview);
      },
      false
    );

    if (imgPath) {
      reader.readAsDataURL(imgPath);
      this.uploadImage = true;
      this.image = localStorage.getItem('image');
    }
  }

  nextPage() {
    if (!this.uploadImage) {
      alert('Please upload a photo first');
      return;
    } else {
      this.router.navigate(['steps/form']);
    }
  }
}
