import { Component } from '@angular/core';

@Component({
  selector: 'app-swiper',
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.css',
})
export class SwiperComponent {
  value: number = 1;

  swipeOnClick(valueChange: number): void {
    this.value += valueChange;

    const e:HTMLElement = (document.getElementsByClassName('selectedContent')[1] as HTMLElement)

    e.style.transition = 'none';
    e.style.transform 
    = 'translateX(' + (valueChange * 350) + 'px)';

    Array.prototype.forEach.call(
      document.getElementsByClassName('selectedContent'),
      (slide) => this.moveObject(slide, valueChange)
    );
    setTimeout(() => {
      this.positionHandler();
    }, 200);
    
  }
  moveObject(slide: HTMLElement, direction: number): void {
    slide.innerHTML = this.value + '';
    const newTranslateX = this.getTranslateX(slide) - (350 * direction);
    slide.style.transition = 'transform 0.1s';
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
