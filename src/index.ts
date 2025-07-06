import { from, Observable, Subscriber } from "rxjs";

let numbers = [1, 2, 3, 5, 6];

let sourceInstance = new Observable((subscriber) => {
  let index = 0;
  let produceValue = () => {
    for (let n of numbers) {
      if (n > 5) subscriber.error("Aconteceu o erro esperado");

      subscriber.next(n);
    }
    subscriber.complete();
  };
  produceValue();
});

sourceInstance.subscribe({
  next: (x: number) => console.log(x),
  error: (e: Error) => console.log(e),
  complete: () => console.log("Completo"),
});
