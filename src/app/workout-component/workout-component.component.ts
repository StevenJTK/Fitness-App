import { Component } from '@angular/core';
import { Exercise } from '../types/Exercise';
import { jsonConnector } from '../types/jsonConnector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout-component',
  imports: [CommonModule],
  templateUrl: './workout-component.component.html',
  styleUrl: './workout-component.component.css'
})
export class WorkoutComponent {


filteredExercises: Exercise[] = []; // exercises matching values from form


  //fetches filtered exercises based on queries
  async fetchExercises(level: string, category: string){
    this.filteredExercises = await(jsonConnector.getExercises(level, category));
    console.log("exercises loaded");
  }
}
