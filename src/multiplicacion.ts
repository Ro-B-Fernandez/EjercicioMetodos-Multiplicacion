//Multiplicación

let vector1: number[] = new Array(1, 2, 3);
let vector2: number[] = new Array(4, 5, 6);
let vector3: number[] = new Array(2, 1, 2);
let vector4: number[] = new Array(1, 2, 1);
let resultado: number[] = new Array(3);
let indice: number;

let multiplicarArreglo = (v1: number[], v2: number[], v3: number[], v4:number[]): number[] => {
  for(indice = 0; indice < 3; indice ++) {
    resultado[indice] = v1[indice] * v2[indice] * v3[indice] * v4[indice]
  }
  return resultado;
};

console.log(multiplicarArreglo (vector1, vector2, vector3, vector4);
