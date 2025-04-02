import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-swiper',
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.css',
})
export class SwiperComponent {

  @Input() displayText!:string[];
  value: number = 0;
  animSpeed: string = '0.2';

  swipeOnClick(valueChange: number): void {
    this.value += valueChange;

    const e:HTMLElement = (document.getElementsByClassName('selectedContent')[1] as HTMLElement)

    e.style.transition = 'none';
    e.style.transform = 'translateX(' + (valueChange * 350) + 'px)';

    Array.prototype.forEach.call(
      document.getElementsByClassName('selectedContent'),
      (slide) => this.moveObject(slide, valueChange)
    );
    setTimeout(() => {
      this.positionHandler();
    }, 200);

    if (this.value === 0){
      (document.getElementsByClassName('arrowLeft')[0] as HTMLElement)
      .style.visibility = 'hidden';

    } else if (this.value === this.displayText.length-1){
      (document.getElementsByClassName('arrowRight')[0] as HTMLElement)
      .style.visibility = 'hidden';
    }
    else{
      (document.getElementsByClassName('arrowLeft')[0] as HTMLElement)
      .style.visibility = 'visible';
      (document.getElementsByClassName('arrowRight')[0] as HTMLElement)
      .style.visibility = 'visible';
    }
    
  }
  moveObject(slide: HTMLElement, direction: number): void {
    slide.innerHTML = this.displayText[this.value] + '';
    const newTranslateX = this.getTranslateX(slide) - (350 * direction);
    slide.style.transition = 'transform ' + this.animSpeed + 's';
    slide.style.transform = 'translateX(' + newTranslateX + 'px)';
    
  }

  positionHandler(): void{
    const middleObject = document.getElementsByClassName('selectedContent')[0] as HTMLElement;
    const sideObject = document.getElementsByClassName('selectedContent')[1] as HTMLElement;

    middleObject.style.transition = 'none';
    sideObject.style.transition = 'none';

    sideObject.style.transform = 'translateX(' + this.getTranslateX(middleObject) + 'px)';
    middleObject.style.transform = 'translateX(0px)';
  }

  getTranslateX(element: HTMLElement): number {
    const computedStyle = window.getComputedStyle(element);
    const transform = computedStyle.transform;

    if (transform === 'none') {
      return 0;
    }

    const match = transform.match(/^matrix\((.*)\)$/);
    if (match && match[1]) {
      const values = match[1].split(',').map(parseFloat);

      return values[4];
    }

    return 0;
  }
}
