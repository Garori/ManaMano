import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPostagensComponent } from './perfil-postagens.component';

describe('PerfilPostagensComponent', () => {
  let component: PerfilPostagensComponent;
  let fixture: ComponentFixture<PerfilPostagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilPostagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPostagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
