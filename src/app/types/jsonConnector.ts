import { Exercise } from './Exercise';

export class jsonConnector {
  private static exerciseData: Exercise[] = [];
  private static classInitialized:boolean = false;

  //fetches data from our "API" ONCE
  private static async initialize() {
    try {
      const response = await fetch('/assets/test-exercises.json');
      const data = await response.json();
      jsonConnector.exerciseData = data.exercise;
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
    console.log("API retrival done");
  }

  static async getExercises(difficulty: string, category: string): Promise<Exercise[]> {
    //incase json data is not retrieved (first call since page load)
    if(!jsonConnector.classInitialized){
      await(this.initialize());
      this.classInitialized = true;
    }
    var filteredData: Exercise[] = [];
    //loops through all exercises
    for (const item of jsonConnector.exerciseData) {
      //filtering of exercises
      if (item.difficulty.toLowerCase() == difficulty.toLowerCase() && 
      item.category.toLowerCase() == category.toLowerCase()) {
        filteredData.push(item);
      }
    }
    return filteredData;
  }

}
