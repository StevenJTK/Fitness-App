import { Exercise } from './Exercise';

export class jsonConnector {
  private static exerciseData: Exercise[] = [];

  static getExercises(difficulty: string): Exercise[] {
    this.exerciseData = [];
    console.log('Hello World');

    fetch('/assets/test-exercises.json')
      .then((response) => response.json())
      .then((data) => {
        for (const item of data.exercise) {
          //här kan man lägga till fler conditions
          if (item.difficulty == difficulty) {
            this.exerciseData.push(item);
          }
        }
      })
      .catch((error) => {
        console.error('Error fetching JSON data:', error);
      });

    return this.exerciseData;
  }
}
