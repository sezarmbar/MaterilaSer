import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HausTableComponent } from './haus-table.component';

describe('HausTableComponent', () => {
  let component: HausTableComponent;
  let fixture: ComponentFixture<HausTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HausTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HausTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
