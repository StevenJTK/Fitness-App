import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Exercise } from './types/Exercise';
import { TestExercisesComponent } from './test-exercises/test-exercises.component';
import { jsonConnector } from './types/jsonConnector';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, TestExercisesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fitness-app';

  // prepare API
  exerciseData: Exercise[] = [];

  constructor(private httpClient: HttpClient) {}

  /*ngOnInit() {
    console.log('Hello World');

    // http GET-request to json-file
    this.httpClient
      .get<{ exercise: Exercise[] }>('/assets/test-exercises.json') // expect response as an object with an 'exercise'-property as an array of Exercise-object
      .subscribe((response) => {
        // listens for the anwser from the http-request
        this.exerciseData = response.exercise;
      });
  }*/
 ngOnInit(){
  new jsonConnector().getExercises("Svår");
 }
 test(){
  //new jsonConnector().getExercises("lätt");
 }
}
