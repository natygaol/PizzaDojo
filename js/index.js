function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas){
  let pizza = {
    tipoCorteza: tipoCorteza,
    tipoSalsa: tipoSalsa,
    quesos: quesos,
    salsas: salsas
  }
  return pizza
}

var s1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(s1);

var s2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(s2);

var s3 = pizzaOven("estilo Peru", "grill", ["fresco"], ["tomates", "aceitunas", "cebollas"])
console.log(s3);

var s4 = pizzaOven("estilo Piura", "al horno", ["azul"], ["tomates", "culantro", "lechuga"])
console.log(s4);

function randomPizza(){

}