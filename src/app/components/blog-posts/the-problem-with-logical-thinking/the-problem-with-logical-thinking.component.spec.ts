/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TheProblemWithLogicalThinkingComponent } from './the-problem-with-logical-thinking.component';

describe('TheProblemWithLogicalThinkingComponent', () => {
  let component: TheProblemWithLogicalThinkingComponent;
  let fixture: ComponentFixture<TheProblemWithLogicalThinkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheProblemWithLogicalThinkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheProblemWithLogicalThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

