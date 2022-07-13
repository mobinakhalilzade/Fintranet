import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  form = new BehaviorSubject<any>('');
  formData = this.form.asObservable();

  user = new BehaviorSubject<any>('');
  userData = this.user.asObservable();
}
