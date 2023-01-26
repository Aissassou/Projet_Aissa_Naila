import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockService } from '../mock.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private mockService : MockService, private router: Router) { }

  ngOnInit() {
  }

  seDeconnecter(){
    this.mockService.jesuisConnecte=false;
    this.router.navigateByUrl('/connexion');
  }
}
