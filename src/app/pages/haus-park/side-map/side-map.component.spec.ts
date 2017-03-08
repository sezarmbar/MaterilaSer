/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SideMapComponent } from './side-map.component';

describe('SideMapComponent', () => {
  let component: SideMapComponent;
  let fixture: ComponentFixture<SideMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
