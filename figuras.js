// Este es el código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
 
function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado();

function areaCuadrado(lado){
    return lado * lado;
}
// Este es el código del triángulo
console.group("Triángulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log(
//    "Los lados del triángulo miden: " 
//     + ladoTriangulo1 + 
//     "cm, "
//     + ladoTriangulo2 + 
//     "cm, " 
//     + baseTriangulo + 
//     "cm"
//     );
//const alturaTriangulos = 5.5;
//console.log("La altura del triángulo es: " + alturaTriangulos + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base);
}
perimetroTriangulo();

function  areaTriangulo(base, altura){
    return (base * altura) /2;
}
console.log("El area del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();
// Este es el código del círculo
console.group("Círculos");
// Radio 
//const radioCirculo = 4;
//console.log("El radio del círculo es: " + radioCirculo+ "cm");
// Diámetro 
function diametroCirculo(radio){
    return radio * 2;
};
// PI
const PI = Math.PI;
console.log("PI es: " + PI );
// Circunferencia 

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// Area

function areaCirculo(radio){
    return (radio* radio) * PI;
}

console.groupEnd();

//Interactuar con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo() {
    const inputl1 = document.getElementById("inputTriangulol1");
    const lado1 = Number(inputl1.value);
    const inputl2 = document.getElementById("inputTriangulol2");
    const lado2 = Number(inputl2.value);
    const inputb = document.getElementById("inputTriangulob");
    const base = Number(inputb.value);
    
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const inputb = document.getElementById("inputTriangulob");
    const base = inputb.value;
    const inputa = document.getElementById("inputTrianguloa");
    const altura = inputa.value;

    const area = areaTriangulo(base,altura);
    alert(area);
}