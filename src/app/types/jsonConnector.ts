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
        for(const item of data.exercise){
            if(item.difficulty == difficulty){
                this.exerciseData.push(item);
            }
        }
        console.log(this.exerciseData)
      })
      .catch(error => {
        console.error('Error fetching JSON data:', error);
      });

    return this.exerciseData;
}

}