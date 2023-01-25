import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from  '@angular/forms';
import { Utilisateur } from  '../utilisateur';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm !: any ;
  get email(){return this.loginForm.get('email')};
  get password(){return this.loginForm.get('password')};


  constructor(private authService: AuthService, private router: Router ) { }
    
  ngOnInit() { 
     this.loginForm=new FormGroup({
      email : new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }

  
  seConnecter(){
    if(this.loginForm.invalid){
      return;
    }
    this.authService.seConnecter(this.loginForm.value);
    this.router.navigateByUrl('/admin');
  }

}