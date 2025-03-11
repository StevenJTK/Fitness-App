import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExercisesComponent } from './test-exercises.component';

describe('TestExercisesComponent', () => {
  let component: TestExercisesComponent;
  let fixture: ComponentFixture<TestExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestExercisesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
