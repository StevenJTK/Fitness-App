export interface Exercise {
  category:string;
  level:string;
  name:string;
  description:string;
  backgroundIcon:string;
  estTime:string;
  categoryItems:string[];

  exercises:{
    name:string;
    description:string;
    repititions:string;
    tips:string;
  }[]

  /*name: string;
  description: string;
  repetitions: string;
  tips: string;
  level: string;
  category: string;*/
}
