// 1-seleccionar nodo padre existente (div.row.clientes)
// 1-crear nuevo nodo
// 2-asignarle las clases
// 3-introducir contenido
// 4-agregarlo al nodo padre

class Cliente {
  constructor(nombre, src, alt) {
    this.nombre = nombre;
    this.src = "img/showcase/edited/" + src;
  }
  nombre() {
    return this.nombre;
  }
  src() {
    return this.src;
  }
  alt() {
    return this.alt;
  }
}

function nuevoCliente(nombre, src, alt) {
  const nuevoCliente = new Cliente(nombre, src, alt);
  arrayClientes.push(nuevoCliente);
}

let arrayClientes = [];

nuevoCliente("Crux Marine", "Crux-Marine.jpg");
nuevoCliente("Dakota", "dakota-footer.png");
nuevoCliente("Estado Mayor", "Estado-Mayor.png");
nuevoCliente("Giama", "giama.png");
nuevoCliente("Gruas San Blas", "Gruas-San-Blas.png");
nuevoCliente("Hospital Milagro", "Hospital-Milagro.jpg");
nuevoCliente("Osecac", "osecac.jpg");
nuevoCliente("Pickytoys", "pickytoys.jpg");
nuevoCliente("Universidad de San Antonio de Areco", "Universidad-Areco.png");
nuevoCliente("Universidad de Cuyo", "Universidad-Cuyo.png");
nuevoCliente("Universidad de Entre Rios", "Universidad-Entre-Rios.png");
nuevoCliente("Universidad General Sarmiento", "Universidad-General-Sarmiento.png");
nuevoCliente("Universidad de Jose C. Paz", "Universidad-Jose-C-Paz.webp");
nuevoCliente("Universidad de Lanús", "Universidad-Lanus.png");
nuevoCliente("Universidad Nacional del Nordeste", "Universidad-Nordeste.jpg");
nuevoCliente("UTN Haedo", "Utn-haedo.jpg");
console.log(arrayClientes);

//Selecciono div clientes
let divClientes = document.getElementById("clientes");
console.log(divClientes);
function agregarDom() {
  for (const cliente of arrayClientes) {
    //creo la columna principal y le asigno las clases
    let col = document.createElement("div");
    // le asigno clases
    col.setAttribute("class", "col-lg-3 col-md-6 col-xs-12 col-sm-10 mx-auto my-3");
    console.log(col);
    // lo agrego al elemento padre
    divClientes.appendChild(col);
    console.log(divClientes);

    // creo contenedor dentro de columna
    let card = document.createElement("div");
    // le asigno clase
    card.setAttribute("class", "single-team");
    // lo agrego a su div padre
    col.appendChild(card);
    console.log(col);

    let thumb = document.createElement("div");
    thumb.setAttribute("class", "team-thumb");
    card.appendChild(thumb);
    // console.log(col);
    // console.log(cliente.src);
    let img = document.createElement("img");
    img.setAttribute("class", "img-fluid");
    img.setAttribute("src", cliente.src);
    img.setAttribute("alt", "Logo de "+cliente.nombre);
    thumb.appendChild(img);
  }
}

agregarDom();