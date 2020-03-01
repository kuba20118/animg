/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImgEditComponent } from './img-edit.component';

describe('ImgEditComponent', () => {
  let component: ImgEditComponent;
  let fixture: ComponentFixture<ImgEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
