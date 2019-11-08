import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { phoneNumberValidator } from 'src/app/validators/phone-validator';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  emailPattern: string = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  passwordPattern: string = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$";
  namePattern: string = "[a-zA-Z\\s]*$";
  agePattern: string = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$";
  
  loginForm: FormGroup;
  signupForm: FormGroup;

  get getLoginEmail(){
    return this.loginForm.get('email');
  }
  
  get getPassword(){
    return this.loginForm.get('password');
  }
  
  get getFullname(){
    return this.signupForm.get('fullname');
  }
  
  get getEmail(){
    return this.signupForm.get('email');
  }
  
  get getMobile(){
    return this.signupForm.get('mobile');
  }
  
  get getRegistrationPassword(){
    return this.signupForm.get('password');
  }

  get getConfirmPassword(){
    return this.signupForm.get('confirmpassword');
  }

  get getGender(){
    return this.signupForm.get('gender');
  }

  get getHeight(){
    return this.signupForm.get('height');
  }

  get getWeight(){
    return this.signupForm.get('weight');
  }
  
  get getDateOfBirth(){
    return this.signupForm.get('dateofbirth');
  }
  constructor(private lf: FormBuilder, private sf: FormBuilder) { }
  
  ngOnInit() {
    $('.message a').click(function(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   });

    this.loginForm = this.lf.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', Validators.required]
    });
    
    this.signupForm = this.sf.group({
      fullname: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      mobile: ['', [Validators.required, phoneNumberValidator, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
      gender: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      height: ['', [Validators.required]],
      weight: ['', [Validators.required, phoneNumberValidator]],
      dateofbirth: ['', Validators.required]
    }
    ,{
      validator: MustMatch('password', 'confirmpassword')
    }
    );
  }

}

