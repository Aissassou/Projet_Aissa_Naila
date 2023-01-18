import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherMoviesComponent } from './rechercher-movies.component';

describe('RechercherMoviesComponent', () => {
  let component: RechercherMoviesComponent;
  let fixture: ComponentFixture<RechercherMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercherMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
