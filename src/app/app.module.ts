import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//primeng
import {StepsModule} from 'primeng/steps';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsComponent } from './steps/steps.component';
import { UploadComponent } from './steps/components/upload/upload.component';
import { FormComponent } from './steps/components/form/form.component';
import { TableComponent } from './steps/components/table/table.component';
import { OverviewComponent } from './steps/components/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    UploadComponent,
    FormComponent,
    TableComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StepsModule,
    ButtonModule,
    DropdownModule,
    CardModule,
    CalendarModule,
    TableModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
