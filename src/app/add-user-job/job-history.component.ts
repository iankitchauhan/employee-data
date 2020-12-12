import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.css']
})
export class JobHistoryComponent implements OnInit {
  form;
  constructor(
    private cocktail: CocktailService,
    private fb: FormBuilder,
    private _location:Location
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      company_name: ['',Validators.required],
      title: ['',Validators.required],
      start_date: ['',Validators.required],
      location: ['',Validators.required],
      description: ['',Validators.required],
      email_id: ['',Validators.required],
    });
  }
  addJob(){
    this.cocktail.addUser(this.form.value,'user_job_history').subscribe((res: any) => {
      this._location.back();
    })
  }

}
