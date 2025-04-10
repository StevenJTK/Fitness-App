import { Component, Input } from '@angular/core';
import { Exercise } from '../types/Exercise';
import { Translator } from '../types/Translator';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TriggerService } from '../trigger.service';

@Component({
  selector: 'app-workout-card',
  imports: [CommonModule],
  templateUrl: './workout-card.component.html',
  styleUrl: './workout-card.component.css',
})
export class WorkoutCardComponent {
  @Input() workout!: Exercise;
  private sub!: Subscription;
  exerciseIndex: number = 0;
  windowIndex: number = 0;

  constructor(private triggerService:TriggerService) {
  }

  ngOnInit() {
    this.sub = this.triggerService.triggerList.subscribe(() => {this.windowToDisplay(0)});
}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  translate(word: string): string {
    return Translator.engToSvTranslate(word);
  }

  windowToDisplay(index: number) {
    if(index != 0) {
      this.triggerService.triggerAction();
    }
    this.windowIndex = index;
  }

  changeExercise(changeValue: number): void {
    this.exerciseIndex += changeValue;
    if (this.exerciseIndex > this.workout.exercises.length - 1) {
      this.windowToDisplay(2);
      this.exerciseIndex -= changeValue;
    }
    if (this.exerciseIndex < 0) {
      this.exerciseIndex = 0;
    }
    
  }
}
