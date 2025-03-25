//detta skrivs endast ut i consolen, vi hittade inget passande api men om vi gör det 
//byter vi bara ut url och annat som behövs, detta är alltså bara baskod för att hämta
//data från ett api /emma

export class apiQuotes {

  static apiFetch(): string {
    fetch('https://thequoteshub.com/api/')
      .then((response) => response.json())
      .then((data) => {
        // Hämta citatet från svaret
        const englishQuote = data.text;
        console.log('Engelskt citat:', englishQuote);

        // Steg 2: Översätt citatet till svenska
        return this.translateQuote(englishQuote);
      })
      .catch((error) => console.error('Error fetching quote:', error));
      return "Error in quote fetch";
  }

  // Steg 2: Funktion för att översätta citatet med Google Translate API
  private static translateQuote(quote: string):string {

    const url = "https://api.mymemory.translated.net/get?q="+quote+"&langpair=en|sv";

    // Gör en POST-förfrågan till Google Translate API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const translatedQuote = data.responseData.translatedText;
        console.log('Översatt citat:', translatedQuote);
        return translatedQuote;
        
      })
      .catch((error) => console.error('Error translating quote:', error));
      return "Error in quote fetch";
  }
}
