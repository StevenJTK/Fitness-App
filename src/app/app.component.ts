import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
//import { TestExercisesComponent } from './test-exercises/test-exercises.component';
import { TrainingFormComponent } from "./training-form/training-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, /*TrainingFormComponent*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fitness-app';

  constructor(private router: Router) {}
  
  chosenDifficulty: string = "";
  selectedDifficultyIndex: number = 0;

  chosenExerciseType: string = "";
  selectedExerciseDifficultyIndex: number = 0;

  difficultyChoice(value:string, buttonNumber: number):void{
    this.chosenDifficulty = value;
    this.selectedDifficultyIndex = buttonNumber;
    location.hash = "#ExerciseChoice";
  }

  exerciseTypeChoice(value:string, buttonNumber: number):void{
    this.chosenExerciseType = value;
    this.selectedExerciseDifficultyIndex = buttonNumber;
    
    const formValues:string = this.chosenExerciseType;

    // navigate to /exercises + send values as query parameters
    this.router.navigate(['/exercises'], {
      queryParams: {level:this.chosenDifficulty, category:this.chosenExerciseType},
    });
  
  }
}
