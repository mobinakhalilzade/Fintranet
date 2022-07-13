import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './steps/components/form/form.component';
import { OverviewComponent } from './steps/components/overview/overview.component';
import { TableComponent } from './steps/components/table/table.component';
import { UploadComponent } from './steps/components/upload/upload.component';
import { StepsComponent } from './steps/steps.component';

const routes: Routes = [
  { path: '', redirectTo: 'steps', pathMatch: 'full' },
  {
    path: 'steps',
    component: StepsComponent,
    children: [
      { path: 'upload', component: UploadComponent },
      { path: 'form', component: FormComponent },
      { path: 'table', component: TableComponent },
      { path: 'overview', component: OverviewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
