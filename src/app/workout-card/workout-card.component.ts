import { Component, Input } from '@angular/core';
import { Exercise } from '../types/Exercise';
import { Translator } from '../types/Translator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout-card',
  imports: [CommonModule],
  templateUrl: './workout-card.component.html',
  styleUrl: './workout-card.component.css',
})
export class WorkoutCardComponent {
  @Input() workout!: Exercise;
exerciseIndex:number = 0;
  windowIndex:number = 0;

  translate(word: string): string {
    return Translator.engToSvTranslate(word);
  }

  windowToDisplay(index: number){
this.windowIndex = index;
  }
  changeExercise(changeValue:number):void{
    this.exerciseIndex += changeValue;
    if (this.exerciseIndex > this.workout.exercises.length -1){
      console.log("du är klar");
      this.exerciseIndex -= changeValue
    }
  }
}
