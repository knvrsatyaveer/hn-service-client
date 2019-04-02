import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HnSearchResultComponent } from './hn-search-result.component';

describe('HnSearchResultComponent', () => {
  let component: HnSearchResultComponent;
  let fixture: ComponentFixture<HnSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HnSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HnSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
