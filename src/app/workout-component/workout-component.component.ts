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
    console.log(level);
    if(level == "" && category != ""){
      console.log("show button");
      document.getElementsByClassName('goBackToTopButton')[0].classList.remove("hidden");
      console.log(document.getElementsByClassName('choiceButton')[0].classList)
    }
    else{
      console.log("hide button");
      document.getElementsByClassName('goBackToTopButton')[0].classList.add("hidden");
      console.log(document.getElementsByClassName('choiceButton')[0].classList)
    }
    //this.filteredExercises = await(jsonConnector.getExercises(level, category));
    console.log("exercises loaded");
  }

  jumpToId(id: string){

    setTimeout(() => {
      //gör så att vid klick så åker man ner långsamt till det valda idt, du kan ändra center till start eller end 
      //om man vill landa på ett annat ställe/EMMA
      const scrollElement = document.getElementById(id);
      if (scrollElement) {
      scrollElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      };
    }, 200);

  }
}
