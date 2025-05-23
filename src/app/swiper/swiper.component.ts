import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-swiper',
  imports: [CommonModule],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.css',
})
export class SwiperComponent {

  @Input() displayText!:string[];
  @Input() startIndex!:number;
  @Output() currentValue = new EventEmitter<string>();
  @Output() currentIndex = new EventEmitter<number>();
  changeValue=0;
  animSpeed: string = '0.2';

  emitValue():void{
    this.currentValue.emit(this.displayText[this.startIndex]);
  }
  emitIndex():void{
    this.currentIndex.emit(this.startIndex);
  }

  swipeOnClick(valueChange: number): void {
    this.startIndex += valueChange;
    this.changeValue = valueChange;

    const elements: HTMLElement[] = [];

    Array.prototype.forEach.call(
      document.getElementsByClassName('selectedContent'),
      (slide) => elements.push(slide as HTMLElement)
    );

    elements[0].style.transition = 'none';
    elements[0].style.transform = 'translateX(' + valueChange * 350 + 'px)';
    elements[1].style.transition = 'none';
    elements[1].style.transform = 'translateX(0px)';

    this.emitValue();
    this.emitIndex();

    elements.forEach(
      (element)=>this.moveObject(element, valueChange)
    );

    setTimeout(() => {
      this.positionHandler();
    }, 200);

  }

  moveObject(slide: HTMLElement, direction: number): void {
    const newTranslateX = this.getTranslateX(slide) - 350 * direction;
    slide.style.transition = 'transform ' + this.animSpeed + 's';
    slide.style.transform = 'translateX(' + newTranslateX + 'px)';
  }

  positionHandler(): void {
    const middleObject = document.getElementsByClassName(
      'selectedContent'
    )[0] as HTMLElement;
    const sideObject = document.getElementsByClassName(
      'selectedContent'
    )[1] as HTMLElement;

    middleObject.style.transition = 'none';
    sideObject.style.transition = 'none';

    sideObject.style.transform = 'translateX(-350px)';
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
