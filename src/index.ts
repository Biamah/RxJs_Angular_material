import { fromEvent } from "rxjs";
import { delay, filter, map } from "rxjs/operators";

interface mouseTrack {
  x: number;
  y: number;
}

let circle = document.getElementById("circle");
let source = fromEvent(document, "mousemove").pipe(
  map((e: MouseEvent) => {
    return { x: e.clientX, y: e.clientY };
  }),
  filter((value: mouseTrack) => value.x < 500)
);

function onNext(value: mouseTrack) {
  console.log(value);
}

source.subscribe({
  next: (value) => onNext(value),
  error: (e: Error) => console.log(e),
  complete: () => console.log(),
});
