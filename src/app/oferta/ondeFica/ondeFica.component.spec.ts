/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OndeFicaComponent } from './ondeFica.component';

describe('OndeFicaComponent', () => {
  let component: OndeFicaComponent;
  let fixture: ComponentFixture<OndeFicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OndeFicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OndeFicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
