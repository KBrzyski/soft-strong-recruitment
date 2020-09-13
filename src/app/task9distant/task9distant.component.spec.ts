import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task9distantComponent } from './task9distant.component';

describe('Task9distantComponent', () => {
  let component: Task9distantComponent;
  let fixture: ComponentFixture<Task9distantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task9distantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task9distantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
