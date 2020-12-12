import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(
    private cocktail: CocktailService,
    private fb: FormBuilder,
    private router:Router
  ) { }
  ngOnInit() {
    this.form = this.fb.group({
      email_id: ['',Validators.required],
      password: ['',Validators.required],
    });

}
  signUp(){
    const dataToSend =this.form.value;
    this.cocktail.addUser(dataToSend,'login').subscribe((res: any) => {
      console.log(res,'res ponsive');
      this.router.navigate(['user-history-listing'],{queryParams:{email:dataToSend['email_id']}})
    })
  }

}
