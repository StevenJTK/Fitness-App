export interface Exercise {
  category:string;
  level:string;
  name:string;
  description:string;
  backgroundIcon:string;
  estTime:string;
  categoryItems:string[];

  exercises:Exercises[]

  /*name: string;
  description: string;
  repetitions: string;
  tips: string;
  level: string;
  category: string;*/
}
export interface Exercises{
  name:string;
  description:string;
  repetitions:string;
  tips:string;
}
