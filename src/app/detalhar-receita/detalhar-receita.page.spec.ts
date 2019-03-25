import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharReceitaPage } from './detalhar-receita.page';

describe('DetalharReceitaPage', () => {
  let component: DetalharReceitaPage;
  let fixture: ComponentFixture<DetalharReceitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharReceitaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharReceitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
