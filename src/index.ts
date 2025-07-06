import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

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

sourceInstance.pipe(map((n: number) => n * 2)).subscribe({
  next: (x: number) => console.log(x),
  error: (e: Error) => console.log(e),
  complete: () => console.log("Completo"),
});

sourceInstance.pipe(filter((n: number) => n > 4)).subscribe({
  next: (x: number) => console.log(x),
  error: (e: Error) => console.log(e),
  complete: () => console.log("Completo"),
});
