/*Angenommen, du hast ein Array von Objekten mit Informationen zu Büchern. Jedes Objekt hat die folgenden Eigenschaften:

interface Book {
  title: string;
  author: string;
  year: number;
  genres: string[];
}
Deine Aufgabe ist es, eine Funktion zu schreiben, die das Array von Büchern als Eingabe entgegennimmt und Folgendes zurückgibt:

Ein Array mit den Autoren, die die meisten Bücher geschrieben haben (nach Anzahl der Bücher absteigend sortiert).
Ein Array mit den Genres, die am häufigsten in den Büchern vorkommen (nach Anzahl der Vorkommen absteigend sortiert).
Ein Objekt, das die Anzahl der Bücher pro Jahr zählt.
Hinweise:

Du kannst davon ausgehen, dass das Eingabe-Array gültig ist und keine leeren oder falsch formatierten Werte enthält.
Die Ausgabearrays sollten eindeutige Werte enthalten (keine Duplikate).
Die Jahre, die im Objekt gezählt werden, müssen aufsteigend sortiert sein.
*/

interface Book {
    title: string;
    author: string;
    year: number;
    genres: string[];
  }
  
  function generatebookings(books: Book[]): {
    mostProlificAuthors: string[];
    mostCommonGenres: string[];
    booksPerYear: Record<number, number>;
  } {
    const mostProlificAuthors: string[] = [];
    const authorCount: Record<string, number> = {};
  
    const mostCommonGenres: string[] = [];
    const genreCount: Record<string, number> = {};
  
    const booksPerYear: Record<number, number> = {};
  
    // Zähle die Anzahl der Bücher pro Autor und Genre
    books.forEach((book) => {
      authorCount[book.author] = (authorCount[book.author] || 0) + 1;
      book.genres.forEach((genre) => {
        genreCount[genre] = (genreCount[genre] || 0) + 1;
      });
    });
  
    // Finde die meistgeschriebenen Autoren
    const maxAuthorCount = Math.max(...Object.values(authorCount));
    for (const [author, count] of Object.entries(authorCount)) {
      if (count === maxAuthorCount) {
        mostProlificAuthors.push(author);
      }
    }
  
    // Finde die häufigsten Genres
    const maxGenreCount = Math.max(...Object.values(genreCount));
    for (const [genre, count] of Object.entries(genreCount)) {
      if (count === maxGenreCount) {
        mostCommonGenres.push(genre);
      }
    }
  
    // Zähle die Bücher pro Jahr
    books.forEach((book) => {
      booksPerYear[book.year] = (booksPerYear[book.year] || 0) + 1;
    });
  
    return {
      mostProlificAuthors,
      mostCommonGenres,
      booksPerYear,
    };
  }


  interface ExcerciseResponse

{

    author:Record<string,number>;

    genres:Record<string,number> ; //Dictionary<string,int>

    yearsorted:Record<number,number>     // Dictionary<int,int> (year,count)

}

 

const books:Book[]= generatebookings();

let reponse:ExcerciseResponse = {

    author:    CountAuthor(books),

    genres:     EnumerateGenres(books),

    yearsorted: CountYear(books)

}

 