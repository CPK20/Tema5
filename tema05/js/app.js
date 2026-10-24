/*
  Tarea 5 · DWEC · Carlos Posadas Kalman
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación

function aplicarCambios() {
  
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";
  
  const segundo = document.querySelector(".segundo");
  segundo.classList.add("bg-warning-subtle");

  const parrafos = document.querySelectorAll("#contenido p");
  parrafos[2].classList.add("text-danger");
  
  console.log("Cambios aplicados correctamente");
  
}


// Ejercicio 2 · Crear y eliminar nodos

function anadirParrafo() {

    const contenido = document.querySelector("#contenido");

    const parrafo = document.createElement("p");

    const numero = contenido.children.length + 1;

    parrafo.textContent = "Párrafo nuevo " + numero;

    contenido.append(parrafo);

    console.log("Párrafo añadido correcramente");
  
}

function eliminarUltimo() {
  
    const contenido = document.querySelector("#contenido");

    const ultimo = contenido.lastElementChild;

    const aviso = document.getElementById("aviso2");

    if (ultimo === null) {
        aviso.classList.remove("d-none");
        console.log("No hay más párrafos para eliminar");
  } else {
      ultimo.remove();
      aviso.classList.add("d-none");
      console.log("Se ha eliminado el último párrafo");
  }
  
}



// Ejercicio 3 · Resaltar al pasar el ratón


function activarResaltado() {
  
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });
    
    parrafo.addEventListener("mouseleave", function () {
        parrafo.classList.remove("bg-body-secondary");
    });

  }

  console.log("Resaltado activado en " + parrafos.length + " párrafos");
}



// Ejercicio 4 · Cambiar el primer párrafo


function cambiarTexto() {

  const texto = document.getElementById("nuevoTexto").value.trim();
  const error = document.getElementById("error4");

  if (texto === "") {
      error.classList.remove("d-none");

  } else {
      const primero = document.querySelector("#contenido p");
      if (primero !== null) {
          primero.textContent = texto;
      }
      error.classList.add("d-none");
  }
  
  console.log("Se ha intentado cambiar el texto");
}

function cambiarConHtml() {

  const texto = document.getElementById("nuevoTexto").value.trim();
  const error = document.getElementById("error4");

  if (texto === " ") {
      error.classList.remove("d-none");

  } else {
      const primero = document.querySelector("#contenido p");
      if (primero !== null) {
          primero.innerHTML = texto;
      }
      error.classList.add("d-none");
  }

  console.log("Se ha probado el cambio con innerHTML");

}



// Ejercicio 5 · Lista de tareas


function anadirTarea() {

  const input = document.getElementById("tareaInput");
    
    const texto = input.value.trim();
    const error = document.getElementById("error5");

    if (texto === "") {
        error.classList.remove("d-none");
    } else {
        error.classList.add("d-none");

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("form-check-input");

        const span = document.createElement("span");
        span.textContent = texto;

        li.append(checkbox, span);

        const lista = document.getElementById("listaTareas");
        lista.append(li);

        input.value = "";

        const total = document.getElementById("totalTareas");
        total.textContent = lista.querySelectorAll("li").length;

        console.log("Tarea añadida correctamente");
    }

}

function borrarCompletadas() {

  const marcadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.getElementById("error5");

    if (marcadas.length === 0) {
        error.classList.remove("d-none");
    } else {
        for (const casilla of marcadas) {
            casilla.parentElement.remove();
        }

        error.classList.add("d-none");
    }

    const lista = document.getElementById("listaTareas");
    const total = document.getElementById("totalTareas");

    total.textContent = lista.querySelectorAll("li").length;

    console.log("Tareas completadas eliminadas");
  
}



// Ejercicio 6 · Datos de la ventana (BOM)


function verDatosVentana() {
  
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  // TODO: con if / else if, el punto de corte de Bootstrap según el ancho: xs (< 576), sm (≥ 576), md (≥ 768),
  //       lg (≥ 992), xl (≥ 1200) y xxl (≥ 1400). Escríbelo en #datoPunto.
  // TODO: el tamaño de la pantalla (screen.width y screen.height) en #datoPantalla.
  // TODO: la URL (location.href) en #datoUrl y el idioma del navegador (navigator.language) en #datoIdioma.
}
