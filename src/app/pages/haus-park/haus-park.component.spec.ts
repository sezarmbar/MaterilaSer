import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HausParkComponent } from './haus-park.component';

describe('HausParkComponent', () => {
  let component: HausParkComponent;
  let fixture: ComponentFixture<HausParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HausParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HausParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
