import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Exercise } from './types/Exercise';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fitness-app';

  // prepare API
  exerciseData: Exercise[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    console.log("Hello World")

    this.httpClient.get<Exercise[]>('url').subscribe((response: Exercise[]) => {this.exerciseData = response;})
  }
}
