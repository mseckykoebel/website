/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdaptiveLearningTheDataComponent } from './adaptive-learning-the-data.component';

describe('AdaptiveLearningTheDataComponent', () => {
  let component: AdaptiveLearningTheDataComponent;
  let fixture: ComponentFixture<AdaptiveLearningTheDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptiveLearningTheDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptiveLearningTheDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

