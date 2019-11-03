import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  
  
})
export class ContactUsComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private fb :FormBuilder) { }

  ngOnInit() {
    this.reactiveForm=new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    } );
  }

  


  onComposeHandler(){
    
    console.log(this.reactiveForm.value);
   
   
    
  }

}
