import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDealsItemComponent } from './grid-deals-item.component';

describe('GridDealsItemComponent', () => {
  let component: GridDealsItemComponent;
  let fixture: ComponentFixture<GridDealsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridDealsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDealsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
