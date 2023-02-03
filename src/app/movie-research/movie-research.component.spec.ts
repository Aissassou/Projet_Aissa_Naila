import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieResearch } from './movie-research';

describe('MovieResearchComponent', () => {
  let component: MovieResearch;
  let fixture: ComponentFixture<MovieResearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieResearch ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieResearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
