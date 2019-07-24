import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalDealItemsComponent } from './horizontal-deal-items.component';

describe('HorizontalDealItemsComponent', () => {
  let component: HorizontalDealItemsComponent;
  let fixture: ComponentFixture<HorizontalDealItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalDealItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalDealItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
