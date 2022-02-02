
/*Arrays*/
/*Array de nombres y descripciones en cards*/

const materiales = [{nombre:"hierro", caracteristicas:"Material mas economico en stock ideal para construcciones y obras"},
                    {nombre:"inoxidable", caracteristicas:"Material mas vistoso en stock recomendado para estructuras y cartelerias"},
                    {nombre:"bronce", caracteristicas:"Material de precio medio muy solicitado para muebles y adornos"}
];


for(let datos of materiales){

let section = document.createElement("section");

section.innerHTML = `<div class="card">
                     <h2>${datos.nombre}</h2>
                     <p>${datos.caracteristicas}</p>
                     <p><button><a href="./presupuestos.html">Ingresar medidas</a></button></p>
                     </div>`;

document.body.appendChild(section);
}
