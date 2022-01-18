import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  loginForm!:FormGroup
  constructor(private fb: FormBuilder, private loginservice:LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submit(){
    console.log(this.loginForm.value)
    this.loginservice.login(this.loginForm.value).subscribe({
      next:(data)=>{
console.log(data)
      },
      error:(err)=>{
console.log(err)
      }
    })
    
  }

}
