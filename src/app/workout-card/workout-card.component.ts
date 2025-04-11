import { Component, Input } from '@angular/core';
import { Exercise } from '../types/Exercise';
import { Translator } from '../types/Translator';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TriggerService } from '../trigger.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-workout-card',
  imports: [CommonModule],
  templateUrl: './workout-card.component.html',
  styleUrl: './workout-card.component.css',
})
export class WorkoutCardComponent {
  @Input() workout!: Exercise;
  @Input() cardIndex!: number;
  private sub!: Subscription;
  exerciseIndex: number = 0;
  windowIndex: number = 0;
  slideToFinishWindow: boolean = false;
  
  constructor(private triggerService:TriggerService,
    private sanitizer: DomSanitizer
  ) {
  }

  formatText(text: string): SafeHtml {
    const withBreaks = text.replace(/\n/g, '<br>');
    return this.sanitizer.bypassSecurityTrustHtml(withBreaks);
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

  ngAfterViewChecked() {
    if (this.windowIndex == 2 && this.slideToFinishWindow) {
      this.slideToFinishWindow = false;
      setTimeout(() => {
        const scrollElement = document.getElementsByClassName("finishSlide")[this.cardIndex];
        if (scrollElement) {
          scrollElement.scrollIntoView({behavior: "smooth", block:"start"});

        }
      }, 200);
    }
  }

  changeExercise(changeValue: number): void {
    this.exerciseIndex += changeValue;
    if (this.exerciseIndex > this.workout.exercises.length - 1) {
      this.windowToDisplay(2);
      this.exerciseIndex -= changeValue;
      this.slideToFinishWindow = true;
    }
    if (this.exerciseIndex < 0) {
      this.exerciseIndex = 0;
    }
    
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
