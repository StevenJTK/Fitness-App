import { Component } from '@angular/core';
import { Exercise, Exercises } from '../types/Exercise';
import { jsonConnector } from '../types/jsonConnector';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from '../swiper/swiper.component';

@Component({
  selector: 'app-workout-component',
  imports: [CommonModule, SwiperComponent],
  templateUrl: './workout-component.component.html',
  styleUrl: './workout-component.component.css',
})
export class WorkoutComponent {
  filteredExercises: Exercise[] = []; // exercises matching values from form
  selectedExercises: Exercises[] = [];
selectedCategory: string = "";

  //fetches filtered exercises based on queries
  async fetchExercises(level: string, category: string) {
    this.selectedCategory = category;
    const btn: Element =
      document.getElementsByClassName('goBackToTopButton')[0];
    if (btn) {
      if (level == '' && category != '') {
        console.log('show button');
        btn.classList.remove('hidden');
        console.log(
          document.getElementsByClassName('choiceButton')[0].classList
        );
      } else {
        console.log('hide button');
        btn.classList.add('hidden');
        console.log(
          document.getElementsByClassName('choiceButton')[0].classList
        );
      }
    }
    this.filteredExercises = await jsonConnector.getExercises(level, category);
    console.log('exercises loaded');
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
  test(exercise: Exercise) {
    this.selectedExercises = exercise.exercises;
  }
  //det är så här man gör för att få värdet som slider byter till
  receiveValue(event: string) {
    this.fetchExercises(event, this.selectedCategory);
    console.log(event);
  }
}
