import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobHistoryComponent } from './add-user-job/job-history.component';
import { EmployeelistComponent } from './listing/employee-listing.component';
import { LoginComponent } from './login/login.component';
import { NameComponent } from './sign-up/name.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: NameComponent,
  },
  {
    path: 'user-history-listing',
    component: EmployeelistComponent,
  },
  {
    path: 'add-user-history',
    component: JobHistoryComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
