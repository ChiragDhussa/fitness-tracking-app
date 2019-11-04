import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  faBookOpen = faBookOpen;
  emailPattern: string = "^[_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+)+((\.)[a-z]{2,})+$";

  get getFullName() {
    return this.registrationForm.get('fullName');
  }
  get getEmail() {
    return this.registrationForm.get('email');
  }
  get getSubject() {
    return this.registrationForm.get('subject');
  }
  get getMessage() {
    return this.registrationForm.get('message');
  }
  // registrationForm = new FormGroup({
  //   fullName: new FormControl('Chirag Dhussa'),
  //   email: new FormControl(''),
  //   subject: new FormControl(''),
  //   message: new FormControl('')
  // });
  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    subject: ['', [Validators.required, Validators.minLength(10)]],
    message: ['', [Validators.required, Validators.minLength(25)]]
  });

  ngOnInit() {
  }
}