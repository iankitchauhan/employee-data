import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobHistoryComponent } from './add-user-job/job-history.component';
import { CategoryComponent } from './listing/category.component';
import { LoginComponent } from './login/login.component';
import { NameComponent } from './name/name.component';

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
    component: CategoryComponent,
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
