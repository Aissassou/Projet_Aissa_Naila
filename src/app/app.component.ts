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

  constructor(private mockService: MockService, private router: Router) { }

  signOut() {
    this.mockService.isConnected = false;
    this.router.navigateByUrl('/home');
  }

  isConnected(): boolean {
    return this.mockService.isConnected == true;
  }


}
