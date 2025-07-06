## Apenas um material de estudos

Link da lib usada durante o estudo das bibliotecas: https://rxjs.dev/

## RxJS Operators

O RxJS é útil principalmente por seus operadores, embora o Observable seja a base. Operadores são as peças essenciais que permitem que códigos assíncronos complexos sejam facilmente compostos de forma declarativa.

### Piping

Operadores pipeable são funções, portanto, poderiam ser usados ​​como funções comuns: op()(obs) — mas, na prática, tendem a haver muitos deles convoluídos juntos e rapidamente se tornam ilegíveis: op4()(op3()(op2()(op1()(obs)))). Por esse motivo, Observables têm um método chamado .pipe() que realiza a mesma coisa, sendo muito mais fácil de ler.
