import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChantierComponent } from './chantier.component';

describe('ChantierComponent', () => {
  let component: ChantierComponent;
  let fixture: ComponentFixture<ChantierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChantierComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChantierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
