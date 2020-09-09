"use strict";

/* Inove Coding School
 * Ejemplos de código de clase.
 * Funciones 1: Estructura y diseño básico.
 * Este archivo sirve como borrador con el código visto en la clase.
 */
var numero1 = 0;
var numero2 = 0;

function inputData() {
    numero1 = parseInt(prompt("Ingrese un número para analizar"));
    numero2 = parseInt(prompt("Ingrese otro número para analizar"));
    alert(`Se ha ingresado el número ${numero1} y el número ${numero2}`);
}

function promedio(a, b) {
    alert(`El promedio de los numeros ${numero1} y ${numero2}, es: ${(numero1 + numero2) / 2}`);
}

function paridad(a, b) {
    var paridadA = "";
    var paridadB = ""
    if ((a % 2) == 0){
        if (a == 0) {
            paridadA = "Nulo";
        } else {
            paridadA = "Par";
        }
    } else {
        paridadA = "Impar";
    }

    if ((b % 2) == 0) {
        if (b == 0) {
            paridadB = "Nulo";
        } else {
            paridadB = "Par";
        }
    } else {
        paridadB = "Impar";
    }

    alert(`El número ${numero1} es ${paridadA} y el número ${numero2}, es ${paridadB}`);
}