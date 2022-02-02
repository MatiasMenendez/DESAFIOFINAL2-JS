/*Simulador de presupuesto de plancha de metal*/


/*Variables*/

/*Valores en numero de los inputs */
const tipoDeMaterial = document.querySelector("#tipoDeMaterial");
const medida1H = document.querySelector("#medida1H");
const medida2H = document.querySelector("#medida2H");
const espesorH = document.querySelector("#espesorH");
const medida1I = document.querySelector("#medida1I");
const medida2I = document.querySelector("#medida2I");
const espesorI = document.querySelector("#espesorI");
const medida1B = document.querySelector("#medida1B");
const medida2B = document.querySelector("#medida2B");
const espesorB = document.querySelector("#espesorB");
var valorDolar = 110
var pesoEspecifico = 7.2

/*objetos*/

const inoxidable = new Material('inoxidable', 1300, true, 7.2, medida1I, medida2I, espesorI);
const hierro = new Material('hierro', 330, true, 7.2, medida1H, medida2H, espesorH);
const bronce = new Material('bronce', 500, false, 7,2, medida1B, medida2B, espesorB);





/*Funciones*/

function calcularPresupuestoPesosH(){
let precioHierro = (medida1H.value/1000) * (medida2H.value/1000) * espesorH.value * pesoEspecifico * hierro.precioPorKilo;
document.querySelector("#precioPesosH").value = precioHierro + "pesos"}

function calcularPresupuestoDolarH(){
let precioHierroD = (medida1H.value/1000) * (medida2H.value/1000) * espesorH.value * pesoEspecifico * hierro.precioPorKilo / valorDolar;
document.querySelector("#precioDolaresH").value = precioHierroD + "dolares"}


function calcularPresupuestoPesosI(){
let precioInox = (medida1I.value/1000) * (medida2I.value/1000) * espesorI.value * pesoEspecifico * inoxidable.precioPorKilo;
document.querySelector("#precioPesosI").value = precioInox + "pesos"}
  
function calcularPresupuestoDolarI(){
let precioInoxD = (medida1I.value/1000) * (medida2I.value/1000) * espesorI.value * pesoEspecifico * inoxidable.precioPorKilo / valorDolar;
document.querySelector("#precioDolaresI").value = precioInoxD + "dolares"}


function calcularPresupuestoPesosB(){
let precioBronce = (medida1B.value/1000) * (medida2B.value/1000) * espesorB.value * pesoEspecifico * bronce.precioPorKilo;
document.querySelector("#precioPesosB").value = precioBronce + "pesos"}
  
function calcularPresupuestoDolarB(){
let precioBronceD = (medida1B.value/1000) * (medida2B.value/1000) * espesorB.value * pesoEspecifico * bronce.precioPorKilo / valorDolar;
document.querySelector("#precioDolaresB").value = precioBronceD + "dolares"}



/*Botones que no actualiza la pag y me brinda resultado */
const botonPresupuestarH = document.querySelector("#botonPresupuestarH")

botonPresupuestarH.addEventListener("click", (evt) => {
 evt.preventDefault();
 calcularPresupuestoPesosH();
 calcularPresupuestoDolarH();
 verificarStockHierro();
 /*Guardar datos de medidas en local store*/
 localStorage.setItem("primer medida de hierro", medida1H.value)
 localStorage.setItem("segunda medida de hierro", medida2H.value)
 localStorage.setItem("espesor de hierro", espesorH.value)
})

const botonPresupuestarI = document.querySelector("#botonPresupuestarI")

botonPresupuestarI.addEventListener("click", (evt) => {
 evt.preventDefault();
 calcularPresupuestoPesosI();
 calcularPresupuestoDolarI();
 verificarStockInoxidable();
 /*Guardar datos de medidas en local store*/
 localStorage.setItem("primer medida de inoxidable", medida1I.value)
 localStorage.setItem("segunda medida de inoxidable", medida2I.value)
 localStorage.setItem("espesor de inoxidable", espesorI.value)
})

const botonPresupuestarB = document.querySelector("#botonPresupuestarB")

botonPresupuestarB.addEventListener("click", (evt) => {
 evt.preventDefault();
 calcularPresupuestoPesosB();
 calcularPresupuestoDolarB();
 verificarStockBronce();
 /*Guardar datos de medidas en local store*/
 localStorage.setItem("primer medida de bronce", medida1B.value)
 localStorage.setItem("segunda medida de bronce", medida2B.value)
 localStorage.setItem("espesor de bronce", espesorB.value)
})



/*Funcion de stock*/

function verificarStockHierro(){
if (hierro.disponibilidad == true){
document.querySelector("#disponibilidadH").value = "Tenemos stock de hierro"}
else if (hierro.disponibilidad == false){
document.querySelector("#precioPesosH").value = "No tenemos stock de hierro"}
}



function verificarStockInoxidable(){
if (inoxidable.disponibilidad == true){
document.querySelector("#disponibilidadI").value = "Tenemos stock de inoxidable"}
else if (inoxidable.disponibilidad == false){
document.querySelector("#disponibilidadI").value = "No tenemos stock de inoxidable"}}


function verificarStockBronce(){
if (bronce.disponibilidad == true){
document.querySelector("#disponibilidadB").value = "Tenemos stock de bronce"}
else if (bronce.disponibilidad == false){
document.querySelector("#disponibilidadB").value = "No tenemos stock de bronce"}}

