import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsfestivoComponent } from './esfestivo.component';

describe('EsfestivoComponent', () => {
  let component: EsfestivoComponent;
  let fixture: ComponentFixture<EsfestivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsfestivoComponent]
    });
    fixture = TestBed.createComponent(EsfestivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
