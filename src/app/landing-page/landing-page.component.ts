import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutComponent } from '../workout-component/workout-component.component';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, WorkoutComponent /*TrainingFormComponent*/],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  @ViewChild(WorkoutComponent) workoutComponent!: WorkoutComponent;

  title = 'fitness-app';

  //jättefin lösning :)
  difficultyValues:string[]=['beginner', 'easy', 'intermediate', 'advanced'];

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {}

  chosenDifficulty: string = '';
  selectedDifficultyIndex: number = 0;

  chosenExerciseType: string = '';
  selectedExerciseDifficultyIndex: number = 0;

  //för timern som väntar innan den skrollar
  waitTimer: number = 200;

  updateSelectedDifficulty(event: number){
    this.selectedDifficultyIndex = event+1;
    this.chosenDifficulty = this.difficultyValues[event];
  }
  
  async difficultyChoice(value: string, buttonNumber: number): Promise<void> {
    this.chosenDifficulty = value;
    this.selectedDifficultyIndex = buttonNumber;
    await this.fetchExercises();

    setTimeout(() => {
      //gör så att vid klick så åker man ner långsamt till det valda idt, du kan ändra center till start eller end
      //om man vill landa på ett annat ställe/EMMA
      const scrollElement = document.getElementById('ExerciseChoice');
      if (scrollElement) {
        scrollElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
  }

  async exerciseTypeChoice(value: string, buttonNumber: number): Promise<void> {
    this.chosenExerciseType = value;
    this.selectedExerciseDifficultyIndex = buttonNumber;

    await this.fetchExercises();

    setTimeout(() => {
      //gör så att vid klick så åker man ner långsamt till det valda idt, du kan ändra center till start eller end
      //om man vill landa på ett annat ställe/EMMA
      const scrollElement = document.getElementById('workoutComponent');
      if (scrollElement) {
        scrollElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
  }

  fetchExercises(): void {
    //if (this.chosenDifficulty != '' && this.chosenExerciseType != '') {
    this.workoutComponent.fetchExercises(
      this.chosenDifficulty,
      this.chosenExerciseType
    );
    //}
  }

  jumpToId(id: string) {
    setTimeout(() => {
      //gör så att vid klick så åker man ner långsamt till det valda idt, du kan ändra center till start eller end
      //om man vill landa på ett annat ställe/EMMA
      const scrollElement = document.getElementById(id);
      if (scrollElement) {
        scrollElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 200);
  }
}
