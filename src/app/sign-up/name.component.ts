import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  form: FormGroup;
  constructor(
    private employeeDataService: EmployeeService,
    private fb: FormBuilder,
   private router: Router
  ) { }
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email_id: ['', Validators.required],
      password: ['', Validators.required],
    });

  }
  signUp() {
    const dataToSend = this.form.value;
    this.employeeDataService.addUser(this.form.value, 'sign_up').subscribe((res: any) => {
      this.router.navigate(['user-history-listing'], { queryParams: { email: dataToSend['email_id'] } })

    })
  }


}
