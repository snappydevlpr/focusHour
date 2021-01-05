import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerformComponent } from './timerform.component';

describe('TimerformComponent', () => {
  let component: TimerformComponent;
  let fixture: ComponentFixture<TimerformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
