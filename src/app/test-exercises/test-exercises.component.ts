import { Component, Input } from '@angular/core';
import { Exercise } from '../types/Exercise';

@Component({
  selector: 'app-test-exercises',
  imports: [],
  templateUrl: './test-exercises.component.html',
  styleUrl: './test-exercises.component.css',
})
export class TestExercisesComponent {
  @Input() exercises: Exercise = {
    strength: {
      easy: [
        {
          name: '',
          description: '',
          repetitions: '',
          tips: '',
        },
      ],
    },
  };
}
