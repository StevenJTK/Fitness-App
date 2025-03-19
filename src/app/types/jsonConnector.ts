import { HttpClient, HttpHandler } from "@angular/common/http";
import { Exercise } from "./Exercise";

export class jsonConnector {


constructor(){};
private exerciseData: Exercise[] = [];

getExercises(difficulty: string): Exercise[] {

    this.exerciseData = [];
    console.log('Hello World');
    

    fetch('/assets/test-exercises.json')  // Ange sökvägen till din JSON-fil
      .then(response => response.json())
      .then(data => {
        if(data)
        this.exerciseData = data;
        console.log(this.exerciseData);  // Kontrollera om data är korrekt hämtad
      })
      .catch(error => {
        console.error('Error fetching JSON data:', error);
      });


        /*// http GET-request to json-file
        this.httpClient
          .get<{ exercise: Exercise[] }>('/assets/test-exercises.json') // expect response as an object with an 'exercise'-property as an array of Exercise-object
          .subscribe((response) => {
            // listens for the anwser from the http-request
            jsonConnector.exerciseData = response.exercise;
          });*/
    return this.exerciseData;
}

}