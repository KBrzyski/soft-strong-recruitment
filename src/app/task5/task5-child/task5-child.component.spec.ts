import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5ChildComponent } from './task5-child.component';

describe('Task5ChildComponent', () => {
  let component: Task5ChildComponent;
  let fixture: ComponentFixture<Task5ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task5ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task5ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
