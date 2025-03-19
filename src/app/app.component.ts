import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Exercise } from './types/Exercise';
import { TestExercisesComponent } from './test-exercises/test-exercises.component';
import { jsonConnector } from './types/jsonConnector';

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

  
 ngOnInit(){
    this.exerciseData = jsonConnector.getExercises("Medel");
    console.log(this.exerciseData);
 }
}
