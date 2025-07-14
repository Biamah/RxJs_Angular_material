import { fromEvent, Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

interface IMovie {
  title: string;
}

let button = document.getElementById("button");
let output = document.getElementById("output");

if (!button) {
  throw new Error("Button element not found");
}

let click = fromEvent(button, "click");

function load(url: string): Observable<any> {
  return new Observable((subscriber) => {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      if (xhr.status == 200) {
        let data = JSON.parse(xhr.responseText);
        subscriber.next(data);
        subscriber.complete();
      } else {
        subscriber.error(xhr.statusText);
      }
    });

    xhr.open("GET", url);
    xhr.send();
  });
}

function renderMovie(movies: IMovie[]) {
  movies.forEach((movie: IMovie) => {
    let div = document.createElement("div");
    div.innerText = movie.title;
    if (output) {
      output.appendChild(div);
    }
  });
}

click.pipe(switchMap(() => load("../movies.json"))).subscribe({
  next: renderMovie,
  error: (e) => console.log(`Error: ${e}`),
  complete: () => console.log("Completo"),
});
