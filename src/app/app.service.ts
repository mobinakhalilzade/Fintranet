import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  form: Subject<any> = new Subject<any>();
  user: Subject<any> = new Subject<any>();
}
