import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/app.service';
export  interface User {
  id: number;
  firstname: string;
  lastname: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  selected: boolean = false;
  users: User[] = [
    { id: 1, firstname: 'Jon', lastname: 'Mayer' },
    { id: 2, firstname: 'Marya', lastname: 'Daci' },
    { id: 3, firstname: 'Shaun', lastname: 'Pen' },
    { id: 4, firstname: 'Bred', lastname: 'Pit' },
  ];
  selectedUser: User;
  constructor(
    private router: Router,
    private dataSharing: DataSharingService
  ) {}

  ngOnInit() {}

  onRowSelect(event: any) {
    this.selectedUser = event.data;
    this.selected = true;
  }

  onRowUnselect(event: any) {
    this.selected = false;
  }

  nextPage() {
    this.dataSharing.user.next(this.selectedUser);
    this.router.navigate(['steps/overview']);
  }

  prevPage() {
    this.router.navigate(['steps/form']);
  }
}
