import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheFilmComponent } from './recherche-film.component';

describe('RechercheFilmComponent', () => {
  let component: RechercheFilmComponent;
  let fixture: ComponentFixture<RechercheFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
