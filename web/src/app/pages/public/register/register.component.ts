import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/core/model/registerRequest';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    verifyPassword: new FormControl("", Validators.required),
    nombre: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
  })
  
  showSuccess: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let request : RegisterRequest = {
      username: this.registerForm.value.username!,
      password: this.registerForm.value.password!,
      verifyPassword: this.registerForm.value.verifyPassword!,
      nombre: this.registerForm.value.nombre!,
      email: this.registerForm.value.email!,
    }
    this.loginService.register(request).subscribe(response => {
      this.showSuccess = true;
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 2000);
      
    });
  }

}
