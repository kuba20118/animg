/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImgTileComponent } from './img-tile.component';

describe('ImgTileComponent', () => {
  let component: ImgTileComponent;
  let fixture: ComponentFixture<ImgTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
