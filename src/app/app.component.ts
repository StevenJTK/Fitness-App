import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Exercise } from './types/Exercise';
import { TestExercisesComponent } from './test-exercises/test-exercises.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, TestExercisesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fitness-app';

  // prepare API
  exerciseData: Exercise[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    console.log('Hello World');

    
    this.httpClient
      .get<Exercise[]>('/assets/test-exercises.json')
      .subscribe((response: Exercise[]) => {
        this.exerciseData = response;
      });
  }
}
