import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TestExercisesComponent } from './test-exercises/test-exercises.component';
import { TrainingFormComponent } from "./training-form/training-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, TrainingFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fitness-app';

  constructor(private router: Router) {}
  
}
