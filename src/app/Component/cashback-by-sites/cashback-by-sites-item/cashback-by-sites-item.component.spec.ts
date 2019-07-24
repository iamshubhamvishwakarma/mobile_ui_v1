import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbackBySitesItemComponent } from './cashback-by-sites-item.component';

describe('CashbackBySitesItemComponent', () => {
  let component: CashbackBySitesItemComponent;
  let fixture: ComponentFixture<CashbackBySitesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashbackBySitesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbackBySitesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
