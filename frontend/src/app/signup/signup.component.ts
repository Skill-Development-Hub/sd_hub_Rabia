import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  signupForm!: FormGroup

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      studentID : '',
      name : '',
      age : '',
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(14)]],
      number : ''
    })
  }

  onSubmit(): void {
    if(this.signupForm.valid){
      const {studentID, name, age, email, password, number} = this.signupForm.value;
      console.log('SignUp Data: ',{studentID, name, age, email, number});
    }
    else {
      console.log("Validation failed");
    }
  }

}
