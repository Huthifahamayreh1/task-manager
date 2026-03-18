import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFotm } from './task-fotm';

describe('TaskFotm', () => {
  let component: TaskFotm;
  let fixture: ComponentFixture<TaskFotm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskFotm],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskFotm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
