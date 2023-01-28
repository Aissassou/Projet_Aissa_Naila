import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MockService } from './service/mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-Aissa_Naila';

  constructor(public mockService: MockService,private router: Router){}
  
  signOut(){
    this.mockService.jesuisConnecte=false;
    this.router.navigateByUrl('/accueil');
  }



}
