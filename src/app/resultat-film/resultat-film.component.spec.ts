import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatFilmComponent } from './resultat-film.component';

describe('ResultatFilmComponent', () => {
  let component: ResultatFilmComponent;
  let fixture: ComponentFixture<ResultatFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
