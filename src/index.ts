import { Observable } from "rxjs";

let numbers = [1, 2, 3, 5, 6];

let sourceInstance = new Observable((subscriber) => {
  let index = 0;
  let produceValue = () => {
    subscriber.next(numbers[index++]);
    // chamada recursiva a ele mesmo
    if (index < numbers.length) {
      setTimeout(produceValue, 1000);
    } else {
      subscriber.complete();
    }
  };
  produceValue();
});

sourceInstance.subscribe({
  next: (x: number) => console.log(x),
  error: (e: Error) => console.log(e),
  complete: () => console.log("Completo"),
});
