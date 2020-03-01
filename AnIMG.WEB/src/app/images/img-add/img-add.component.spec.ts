/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImgAddComponent } from './img-add.component';

describe('ImgAddComponent', () => {
  let component: ImgAddComponent;
  let fixture: ComponentFixture<ImgAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
