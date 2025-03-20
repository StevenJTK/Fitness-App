import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from '../types/Exercise';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { jsonConnector } from '../types/jsonConnector';

@Component({
  selector: 'app-test-exercises',
  imports: [CommonModule],
  templateUrl: './test-exercises.component.html',
  styleUrl: './test-exercises.component.css',
})
export class TestExercisesComponent implements OnInit {
  filteredExercises: Exercise[] = []; // exercises matching values from form

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchExercises();
  }

  //fetches filtered exercises based on queries
  async fetchExercises(){
    var selectedCategory:string = "";
    var selectedLevel:string = "";
    await(this.route.queryParams.subscribe((params) => {
      selectedCategory = params['category'];
      selectedLevel = params['level'];
    }));
    this.filteredExercises = await(jsonConnector.getExercises(selectedLevel, selectedCategory));
    console.log("exercises loaded");
  }
}
