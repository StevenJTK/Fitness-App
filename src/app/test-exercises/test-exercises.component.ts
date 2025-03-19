import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from '../types/Exercise';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-exercises',
  imports: [CommonModule],
  templateUrl: './test-exercises.component.html',
  styleUrl: './test-exercises.component.css',
})
export class TestExercisesComponent implements OnInit {
  exercises: Exercise[] = []; // all exercises
  filteredExercises: Exercise[] = []; // exercises matching values from form

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // fetch exeries som .json
    this.http
      .get<{ exercise: Exercise[] }>('/assets/test-exercises.json')
      .subscribe((data) => {
        this.exercises = data.exercise;
        console.log(data.exercise);
        // fetch query params (category and level)
        this.route.queryParams.subscribe((params) => {
          const selectedCategory = params['category'];
          const selectedLevel = params['level'];

          // filter exercsies based on category and level
          this.filteredExercises = this.exercises.filter(
            (exercise) =>
              { return exercise.category == selectedCategory &&
              exercise.difficulty == selectedLevel
              }
          );
        });
      });
  }
}
