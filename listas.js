let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function listaDeProgramacion() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
    }  
}

//listaDeProgramacion();

function listaDeProgramacionInverso() {
  let listaInversa =[];
  for (let i = lenguagesDeProgramacion.length-1; i >= 0; i--) {
    listaInversa.push(lenguagesDeProgramacion[i]);
    } 
    return listaInversa;
}

console.log("lista de programacion inversa",listaDeProgramacionInverso());

let lista = [40,10,20,30];
let Final = [100,50,40,80];


function promedio(Array) {
  let suma=0;
  for (let i = 0; i < Array.length; i++) {
    suma+= Array[i];      
  }
  return suma/Array.length;
}

console.log("promedio:",promedio(Final)); 

function numeroMayorMenor(array) {

  let mayor=array[0];
  let menor=array[0];
  
  for (let i = 0; i < array.length; i++) {
    if(array[i]> mayor){
      mayor = array[i];
    }else if(array[i]< menor){
      menor = array[i];
    }    
  }

  console.log ( `el numero mayor es ${mayor} ,y el numero menor es ${menor}`);
}

numeroMayorMenor(lista);

function suma(Array) {
  let suma=0;
  for (let i = 0; i < Array.length; i++) {
    suma+= Array[i];      
  }
  return suma
}

console.log("suma de numeros",suma(Final));

function posicionDelNumero(array,numero) {
    for (let i = 0; i < array.length; i++) {
    if(array[i] === numero){
      return i;
    }
  }  
  return -1
}

console.log("posicion del numero",posicionDelNumero(lista,50));

function sumaDeListas (lista1,lista2){

  let listaSuma=[];

  if(lista1.length == lista2.length){

    for (let i = 0; i < lista1.length; i++) {
      listaSuma.push(lista1[i]+lista2[i]);      
      }
  }else{
    console.log("Las listas son de diferente tamaño");
  }
  return listaSuma;
}

console.log("suma de listas",sumaDeListas(lista,Final));

function cuadradoDeLista(array) {
  let nuevaLista=[];
  for (let i = 0; i < array.length; i++) {
     nuevaLista.push(array[i]*array[i]);
  }
  return nuevaLista;
}

console.log("cuadrado de la lista",cuadradoDeLista(Final));


