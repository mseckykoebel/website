/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TheRebelsFindingYourValuesOrForgingYourOwnComponent } from './the-rebels-finding-your-values-or-forging-your-own.component';

describe('TheRebelsFindingYourValuesOrForgingYourOwnComponent', () => {
  let component: TheRebelsFindingYourValuesOrForgingYourOwnComponent;
  let fixture: ComponentFixture<TheRebelsFindingYourValuesOrForgingYourOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheRebelsFindingYourValuesOrForgingYourOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheRebelsFindingYourValuesOrForgingYourOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

