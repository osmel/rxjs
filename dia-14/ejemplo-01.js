// “cadena de suscripción de operador”.
function multiplyByTen(input) {
//3- Nos suscribimos al observable que nos pasaron y realizamos las operaciones que necesitamos
//4- Esta suscripción nos devuelve un nuevo observable con los nuevos resultado(no cambio los resultado del observable original)
  var output = Rx.Observable.create(function subscribe(observer) {
    input.subscribe({
      next: (v) => observer.next(10 * v),
      error: (err) => observer.error(err),
      complete: () => observer.complete()
    });
  });
//5- retornamos el nuevo observable creado(con los nuevos valores)
  return output;
}

//1- este es el observable de entrada desde donde partimos
var input = Rx.Observable.from([1, 2, 3, 4]);
//2- Enviamos ese observable de entrada a una función
var output = multiplyByTen(input);
//6- Nos suscribimos a ese nuevo observable creado(observable de salida). Para mostrar los nuevos resultados
output.subscribe(x => console.log(x));


