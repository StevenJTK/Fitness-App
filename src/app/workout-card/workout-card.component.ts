import { Component, Input } from '@angular/core';
import { Exercise } from '../types/Exercise';

@Component({
  selector: 'app-workout-card',
  imports: [],
  templateUrl: './workout-card.component.html',
  styleUrl: './workout-card.component.css',
})
export class WorkoutCardComponent {
  @Input() workout!: Exercise;
}
