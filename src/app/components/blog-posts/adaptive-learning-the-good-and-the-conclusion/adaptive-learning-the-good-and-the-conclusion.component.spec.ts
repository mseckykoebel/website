/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdaptiveLearningTheGoodAndTheConclusionComponent } from './adaptive-learning-the-good-and-the-conclusion.component';

describe('AdaptiveLearningTheGoodAndTheConclusionComponent', () => {
  let component: AdaptiveLearningTheGoodAndTheConclusionComponent;
  let fixture: ComponentFixture<AdaptiveLearningTheGoodAndTheConclusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptiveLearningTheGoodAndTheConclusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptiveLearningTheGoodAndTheConclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

