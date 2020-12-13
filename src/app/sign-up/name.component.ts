import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private fb: FormBuilder
  ) { }
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email_id: ['', Validators.required],
      password: ['', Validators.required],
    });

  }
  signUp() {
    this.employeeDataService.addUser(this.form.value, 'sign_up').subscribe((res: any) => {

    })
  }


}
