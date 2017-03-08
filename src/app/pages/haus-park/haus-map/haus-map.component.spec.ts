import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HausMapComponent } from './haus-map.component';

describe('HausMapComponent', () => {
  let component: HausMapComponent;
  let fixture: ComponentFixture<HausMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HausMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HausMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
