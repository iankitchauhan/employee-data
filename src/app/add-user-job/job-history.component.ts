import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.css']
})
export class JobHistoryComponent implements OnInit {
  form:FormGroup;
  defaultEmail: any;
  constructor(
    private employeeDataService: EmployeeService,
    private fb: FormBuilder,
    private _location: Location,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.defaultEmail = params.email;
    });
    this.form = this.fb.group({
      company_name: ['', Validators.required],
      title: ['', Validators.required],
      start_date: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      email_id: [this.defaultEmail, Validators.required],
    });
  }
  addJob() {
    this.employeeDataService.addUser(this.form.value, 'user_job_history').subscribe((res: any) => {
      this._location.back();
    })
  }

}
