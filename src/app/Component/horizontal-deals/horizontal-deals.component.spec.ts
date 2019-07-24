import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalDealsComponent } from './horizontal-deals.component';

describe('HorizontalDealsComponent', () => {
  let component: HorizontalDealsComponent;
  let fixture: ComponentFixture<HorizontalDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
