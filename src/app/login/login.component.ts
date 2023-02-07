import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MockService } from '../service/mock.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm !: any;
  get email() { return this.loginForm.get('email') };
  get password() { return this.loginForm.get('password') };


  constructor(private mockService: MockService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });

  }


  seConnecter() {
    this.mockService.getConfig().subscribe((res) => {
      if ((res.email != this.email.value) || (res.password != this.password.value)) {
        this.mockService.isConnected = false;
      } else {
        this.mockService.isConnected = true;
        this.router.navigateByUrl('/admin');
      }
    });
  }

}