export interface Exercise {
  strength: Strength;
}

export interface Strength {
  easy: Easy[];
}

export interface Easy {
  name: string;
  description: string;
  repetitions: string;
  tips: string;
}
