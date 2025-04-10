import { Component, EventEmitter, Output } from '@angular/core';
import { Exercise, Exercises } from '../types/Exercise';
import { jsonConnector } from '../types/jsonConnector';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from '../swiper/swiper.component';
import { Translator} from '../types/Translator';
import { WorkoutCardComponent } from "../workout-card/workout-card.component";

@Component({
  selector: 'app-workout-component',
  imports: [CommonModule, SwiperComponent, WorkoutCardComponent],
  templateUrl: './workout-component.component.html',
  styleUrl: './workout-component.component.css',
})
export class WorkoutComponent {
 @Output() newValueSelected = new EventEmitter<number>();

  filteredExercises: Exercise[] = []; // exercises matching values from form
  selectedExercises: Exercises[] = [];
  selectedCategory: string = '';
  currentLevel: string = '';
  swiperChoices:string[]= ['Nybörjare', 'Lätt', 'Medel', 'Utmanande'];
  workoutCards: WorkoutCardComponent[] = [];

  //fetches filtered exercises based on queries
  async fetchExercises(level: string, category: string) {
    this.selectedCategory = category;
    this.currentLevel = level;
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

  getLevelIndex(){
    for(let i = 0; i < this.swiperChoices.length; i++)
    {
      if(this.swiperChoices[i].toLowerCase() == this.translate(this.currentLevel).toLowerCase())
      {
        return i;
      }
    }
    return 0;
  }

  translate(word: string):string{
    return Translator.engToSvTranslate(word);
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
  recieveValue(event: string) {
    this.fetchExercises(event, this.selectedCategory);
  }
  recieveIndex(event: number){
    this.newValueSelected.emit(event);
  }
  ngAfterViewChecked() {
    this.workoutCards = [];
    Array.prototype.forEach.call(
      document.getElementsByClassName("workoutCard"),
      (card) => /* this.workoutCards.push(card as WorkoutCardComponent) */
      console.log((card as WorkoutCardComponent).workout)
    );
    console.log(this.workoutCards.length);
  }
}


