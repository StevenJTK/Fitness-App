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

  windowIndex:number = 0;

  translate(word: string): string {
    return Translator.engToSvTranslate(word);
  }

  windowToDisplay(index: number){
this.windowIndex = index;
  }
}
