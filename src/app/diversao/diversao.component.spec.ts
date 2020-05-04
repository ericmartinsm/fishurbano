/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiversaoComponent } from './diversao.component';

describe('DiversaoComponent', () => {
  let component: DiversaoComponent;
  let fixture: ComponentFixture<DiversaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
