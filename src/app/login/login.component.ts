import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from  '@angular/forms';
import { Utilisateur } from  '../utilisateur';
import { AuthService } from  '../auth.service';
import { MockService } from '../mock.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm !: any ;
  get email(){return this.loginForm.get('email')};
  get password(){return this.loginForm.get('password')};

  public mockEmail !: string;
  public mockPassword !: string;



  constructor(private authService: AuthService, private mockService: MockService, private router: Router ) { }
    
  ngOnInit() { 
     this.loginForm=new FormGroup({
      email : new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    });

  }

  
  seConnecter(){
     this.mockService.getConfig().subscribe((res) => {
      this.mockEmail = res.email;
      this.mockPassword= res.password;

      if((this.mockEmail!=this.email.value) || (this.mockPassword!=this.password.value)){
        console.log(this.mockEmail);
        this.mockService.jesuisConnecte = false;
        return console.log("invalid id");
      } else {
        this.mockService.jesuisConnecte = true;
        this.router.navigateByUrl('/admin');
      }
    });
  }

}