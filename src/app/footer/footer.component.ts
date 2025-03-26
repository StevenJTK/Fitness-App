import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  isVisible: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    console.log(
      `ScrollY: ${scrollY}, WindowHeight: ${windowHeight}, DocumentHeight: ${documentHeight}`
    );

    // check if it's scrolled to the bottom
    this.isVisible = scrollY + windowHeight >= documentHeight - 10;
  }
}
