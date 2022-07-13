import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
})
export class StepsComponent implements OnInit {
  items: MenuItem[] = [];
  
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Upload a photo',
        routerLink: 'upload',
      },
      {
        label: 'Fill the form',
        routerLink: 'form',
      },
      {
        label: 'Choose a person',
        routerLink: 'table',
      },
      {
        label: 'Overview',
        routerLink: 'overview',
      },
    ];
  }
}
