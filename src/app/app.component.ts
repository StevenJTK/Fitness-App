import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
//import { TestExercisesComponent } from './test-exercises/test-exercises.component';
import { TrainingFormComponent } from './training-form/training-form.component';
import { WorkoutComponent } from './workout-component/workout-component.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    WorkoutComponent /*TrainingFormComponent*/,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild(WorkoutComponent) workoutComponent!: WorkoutComponent;

  title = 'fitness-app';

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {}

  chosenDifficulty: string = '';
  selectedDifficultyIndex: number = 0;

  chosenExerciseType: string = '';
  selectedExerciseDifficultyIndex: number = 0;

  //för timern som väntar innan den skrollar
  waitTimer: number = 200;

  buttonChoice(): void {
    setTimeout(() => {
      //gör så att vid klick så åker man ner långsamt till det valda idt, du kan ändra center till start eller end
      //om man vill landa på ett annat ställe/EMMA
      const scrollElement = document.getElementById('StartButton');
      if (scrollElement) {
        scrollElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 200);
  }

  difficultyChoice(value: string, buttonNumber: number): void {
    this.chosenDifficulty = value;
    this.selectedDifficultyIndex = buttonNumber;

    this.fetchExercises();

    setTimeout(() => {
      //gör så att vid klick så åker man ner långsamt till det valda idt, du kan ändra center till start eller end
      //om man vill landa på ett annat ställe/EMMA
      const scrollElement = document.getElementById('ExerciseChoice');
      if (scrollElement) {
        scrollElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
        scrollElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 200);
  }

  fetchExercises(): void {
    if (this.chosenDifficulty != '' && this.chosenExerciseType != '') {
      this.workoutComponent.fetchExercises(
        this.chosenDifficulty,
        this.chosenExerciseType
      );
    }
  }
}
