import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaCardsComponent } from './categoria-cards.component';

describe('CategoriaCardsComponent', () => {
  let component: CategoriaCardsComponent;
  let fixture: ComponentFixture<CategoriaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
