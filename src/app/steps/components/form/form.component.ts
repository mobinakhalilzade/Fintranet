import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  step2Form: FormGroup;
  submitted: boolean = false;
  nextDay: Date;
  nextFiveDays: Date;
  statuses = [
    { name: 'Active', value: 1 },
    { name: 'Deactive', value: 2 },
    { name: 'In progress', value: 3 },
    { name: 'Expired', value: 4 },
  ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dataSharing: DataSharingService
  ) {}

  ngOnInit() {
    this.EnableNextFiveDays();
    this.createForm();
  }

  EnableNextFiveDays() {
    let today = new Date();
    this.nextDay = new Date(today.setDate(today.getDate() + 1));
    this.nextFiveDays = new Date(today.setDate(today.getDate() + 4));
  }

  createForm() {
    this.step2Form = this.formBuilder.group({
      amount: [Validators.required],
      date: [Validators.required],
      status: [Validators.required],
      source: ['', Validators.required],
    });
  }

  submitStep2FormForm(form: FormGroup) {
    if (form.valid) {
      this.dataSharing.form.next(form.value);
      this.submitted = true;
    } else {
      alert('Please fill the form');
    }
  }

  nextPage() {
    this.router.navigate(['steps/table']);
  }

  prevPage() {
    this.router.navigate(['steps/upload']);
  }
}
