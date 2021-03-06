import { Component, Input, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/app.service';
import { User } from '../table/table.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  image: string | null;
  form: any;
  user: User;
  constructor(private dataSharing: DataSharingService) {}

  ngOnInit(): void {
    this.getImage();
    this.getForm();
    this.getUser();
  }

  getImage() {
    this.image = localStorage.getItem('image');
  }

  getForm() {
    this.dataSharing.formData.subscribe((res) => {
      this.form = res;
    });
  }

  getUser() {
    this.dataSharing.userData.subscribe((res) => {
      this.user = res;
    });
  }
}
