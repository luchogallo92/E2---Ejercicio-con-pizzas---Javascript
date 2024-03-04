// // Ejercicio 1

pizzas.forEach(pizza => {
    if (pizza.id % 2 !== 0) {
      console.log("Las pizzas que tienen ID par son:", pizza.id , "que son la", pizza.nombre);
    }
  });
 
 // Ejercicio 2
 
  pizzas.filter (pizza => {
    if (pizza.precio < 600){
     console.log ("La pizzas que valen menos de 600 es la", pizza.nombre)
    }
  })
 
 // //Ejercicio 3
 
  pizzas.forEach (pizza => {
    if (pizza.precio) {
      console.log ("El precio de cada pizza es el siguiente",pizza.nombre,"con un valor de $", pizza.precio)
    }
  })
 
 //Ejercicio 4
 
 pizzas.forEach (pizza => {
   if (pizza.nombre) {
     console.log("Los ingredientes de la", pizza.nombre)
   }
 
   pizza.ingredientes.forEach (ingrediente => 
     {
       console.log("que contiene", ingrediente)
     })
 })