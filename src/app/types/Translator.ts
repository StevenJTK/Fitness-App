export class Translator {
//översätter ord till det som står i jsonfilen
  static svToEngTranslate(wordToTranslate:string):string{
    
    const wordToTranslateLowerCase = wordToTranslate.toLowerCase();

    switch(wordToTranslateLowerCase){
      case "nybörjare": return "Beginner";
      case "enkel": return "Easy";
      case "medel": return "Intermediate";
      case "utmanande": return "Advanced";
    }

    return wordToTranslate;
  }

  static engToSvTranslate(wordToTranslate:string):string{
    
    const wordToTranslateLowerCase = wordToTranslate.toLowerCase();

    switch(wordToTranslateLowerCase){
      case "strength": return "Fysik";
      case "cardio": return "Uthållighet";
      case "everydayexercise": return "Vardagsmotion";
      case "balance": return "Balans & Rörlighet";
      case "beginner": return "Nybörjare";
      case "easy": return "Enkel";
      case "intermediate": return "Medel";
      case "advanced": return "Utmanande";
    }

    return wordToTranslate;
  }

}