import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbackBySitesComponent } from './cashback-by-sites.component';

describe('CashbackBySitesComponent', () => {
  let component: CashbackBySitesComponent;
  let fixture: ComponentFixture<CashbackBySitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashbackBySitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbackBySitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
