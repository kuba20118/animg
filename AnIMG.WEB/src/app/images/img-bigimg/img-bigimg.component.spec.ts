/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImgBigimgComponent } from './img-bigimg.component';

describe('ImgBigimgComponent', () => {
  let component: ImgBigimgComponent;
  let fixture: ComponentFixture<ImgBigimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgBigimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgBigimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
