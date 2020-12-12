import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  form:FormGroup;
  constructor(
    private cocktail: CocktailService,
    private fb: FormBuilder
  ) { }
  ngOnInit() {
    this.form = this.fb.group({
      name: ['',Validators.required],
      email_id: ['',Validators.required],
      password: ['',Validators.required],
    });

  }
  signUp(){
    console.log(this.form.value,'form data');
    this.cocktail.addUser(this.form.value,'sign_up').subscribe((res: any) => {
      console.log(res,'res ponsive');
    })
  }


}
