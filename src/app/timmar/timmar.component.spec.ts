import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimmarComponent } from './timmar.component';

describe('TimmarComponent', () => {
  let component: TimmarComponent;
  let fixture: ComponentFixture<TimmarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimmarComponent]
    });
    fixture = TestBed.createComponent(TimmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
