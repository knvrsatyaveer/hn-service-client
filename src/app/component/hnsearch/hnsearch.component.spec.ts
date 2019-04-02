import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HnsearchComponent } from './hnsearch.component';

describe('HnsearchComponent', () => {
  let component: HnsearchComponent;
  let fixture: ComponentFixture<HnsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HnsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HnsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
