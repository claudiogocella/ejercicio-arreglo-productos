















let cantidadProductos : number[] = number(prompt("¿Cuantos productos desea ingresar?")); 

let arregloDeProductos : number[] = new  Array (cantidadProductos); 

function cargarArreglo(arreglo, longitud): number[]{
  let indice:number;

  for(indice=0; <longitud; indice++){
      arreglo[indice] = Number(prompt("Ingrese el precio del producto en posicion " + (indice+1)));
  }
  console.log(arreglo);
  return arreglo
}

function calcularCompra(arreglo:number[], cantidad:number){
  let indice:number; 
  let sumaTotal:number = 0;
  
    for (indice =0; indice<cantidad; indice++){
        sumaTotal += arreglo[indice]; 
    }

    if (sumaTotal > 3000 && sumaTotal <= 5000){
      sumaTotal = sumaTotal * 0.9; 
      console.log("Usted ha obtenido un 10%! Su compra es: " + sumaTotal); 
    } else if (sumaTotal > 5000){
      sumaTotal = * 0.8;
    } else {
      console.log("El valor de su compra es: " + sumaTotal); 
    }


}
cargarArreglo(arregloDeProductos, cantidadProductos);
calcularCompra(arregloDeProductos, cantidadProductos); 