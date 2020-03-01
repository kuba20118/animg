/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LikedImgsComponent } from './likedImgs.component';

describe('LikedImgsComponent', () => {
  let component: LikedImgsComponent;
  let fixture: ComponentFixture<LikedImgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedImgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
