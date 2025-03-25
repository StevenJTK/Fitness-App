//detta skrivs endast ut i consolen, vi hittade inget passande api men om vi gör det 
//byter vi bara ut url och annat som behövs, detta är alltså bara baskod för att hämta
//data från ett api /emma

export class apiQuotes {

  //metod som hämtar data från api
  static async apiFetch(): Promise<string> {

    try{
        const response = await(fetch("https://thequoteshub.com/api/"));
        const data = await(response.json());
        const englishQuote = data.text;
        //översätter till svenska mha translateQuote metod
        return this.translateQuote(englishQuote);
    }
    //felmeddelande
    catch (error){
        console.error('Error translating quote:', error);
        return "Error in quote fetch";
    }
  }

  // funktion för att översätta citatet med myMemory
  private static async translateQuote(quote: string):Promise<string> {

    const url = "https://api.mymemory.translated.net/get?q="+quote+"&langpair=en|sv";

    //gör om till json format och översätter till svenska
    try{
        const response = await(fetch(url));
        const data = await(response.json());
        const translatedQuote = data.responseData.translatedText;
        return translatedQuote;
    }
    //felmeddelande
    catch (error){
        console.error('Error translating quote:', error);
        return "Error in quote fetch";
    }
  }
}
