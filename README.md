## Apenas um material de estudos

Link da lib usada durante o estudo das bibliotecas: https://rxjs.dev/

## RxJS Operators

O RxJS é útil principalmente por seus operadores, embora o Observable seja a base. Operadores são as peças essenciais que permitem que códigos assíncronos complexos sejam facilmente compostos de forma declarativa.

### Piping

Operadores pipeable são funções, portanto, poderiam ser usados ​​como funções comuns: op()(obs) — mas, na prática, tendem a haver muitos deles convoluídos juntos e rapidamente se tornam ilegíveis: op4()(op3()(op2()(op1()(obs)))). Por esse motivo, Observables têm um método chamado .pipe() que realiza a mesma coisa, sendo muito mais fácil de ler.

### switchMap

O switchMap é um operador que transforma os valores emitidos por um observable em outro observable, e substitui o anterior toda vez que um novo valor chega.

💡 Como ele se comporta??

- Ele escuta um observable de origem.
- Para cada valor emitido, ele executa uma função que retorna um novo observable.
- Quando um novo valor é emitido pelo observable de origem, o switchMap:
  - cancela a assinatura do observable anterior.
  - começa a escutar o novo observable.
