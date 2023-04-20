import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { LoginService } from 'src/app/core/services/login.service';
import { LoginRequest } from 'src/app/core/model/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl(),
    pass: new FormControl()
  })

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let request : LoginRequest = {
      username: this.loginForm.value.usuario!.value,
      password: this.loginForm.value.pass!.value
    }
    this.loginService.logIn(request).subscribe(response => {
      debugger;
      localStorage.setItem("token", response.token);
    })
  }


}
