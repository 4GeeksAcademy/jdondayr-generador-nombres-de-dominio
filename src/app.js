// -------------------------------- VARIABLES -----------------------------------------------------

// Botones
let botonPronombres = document.querySelector("#botonPronombres");
let botonAdjetivos = document.querySelector("#botonAdjetivos");
let botonSustantivos = document.querySelector("#botonSustantivos");

// Inputs
let inputPronombres = document.querySelector("#inputPronombres");
let inputAdjetivos = document.querySelector("#inputAdjetivos");
let inputSustantivos = document.querySelector("#inputSustantivos");

// Listas
let listaPronombres = document.querySelector("#listaPronombres");
let listaAdjetivos = document.querySelector("#listaAdjetivos");
let listaSustantivos = document.querySelector("#listaSustantivos");

// Arrays
let pronombres = [];
let sustantivos = [];
let adjetivos = [];
let extensiones = ["com", "net", "es", "io", "us"];

// Botón generador y reset
let botonGenerador = document.querySelector("#botonGenerador");
let botonReset = document.querySelector("#reset");

// Lista Ul
let listaNombresDominio = document.querySelector("#listaNombresDominio");


//------------------------------ ACCIONES ---------------------------------------------------------

// Pulsar botón de Añadir a una lista
const anadirALaLista = (boton, input, lista, array) => {
  boton.addEventListener("click", () => {
    if (input.value === "") return // Comprueba que no haya inputs vacíos
    // Se crea el li
    let liElement = document.createElement("li");
    liElement.textContent = input.value.toLowerCase();
    // Se añade el li
    lista.appendChild(liElement);
    // Se añade al array como cadena de texto
    array.push(String(input.value.toLowerCase()));
    // Se vacía el valor del input
    input.value = "";
  })
}
// Ejecuto la función para cada una de los botones, inputs, listas y arrays
anadirALaLista(botonPronombres, inputPronombres, listaPronombres, pronombres);
anadirALaLista(botonAdjetivos, inputAdjetivos, listaAdjetivos, adjetivos);
anadirALaLista(botonSustantivos, inputSustantivos,listaSustantivos, sustantivos);

// Pulsar botón generador de nombres de dominio
botonGenerador.addEventListener("click", () => {
    for (let pronombre of pronombres) {
      for (let sustantivo of sustantivos) {
        for (let adjetivo of adjetivos) {
          for (let extension of extensiones) {
            // Creo Checkbox
            let checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            // Elimina el elemento si se marca la Check Box
            checkBox.addEventListener("change", () => listaNombresDominio.removeChild(liElement))

            // Creo li y le añado clase elementoLista
            let liElement = document.createElement("li");
            liElement.classList.add("elementoLista");
            // Función eliminadora del final del adjetivo si coincide con extensión
            if (adjetivo.endsWith(extension)) {
              let adjetivoSeparado = adjetivo.split("");
              adjetivoSeparado.splice(adjetivo.length - extension.length, extension.length);
              liElement.textContent = pronombre + sustantivo + adjetivoSeparado.join("") + "." + extension
            }
            else liElement.textContent = pronombre + sustantivo + adjetivo + "." + extension;
            
            // Añado ambos elementos
            liElement.appendChild(checkBox);
            listaNombresDominio.appendChild(liElement);
          }
        }
      }
    }
})

// Botón Reset que vacía todo
botonReset.addEventListener("click", () => {
  listaNombresDominio.textContent = "";
  listaPronombres.textContent = ""; inputPronombres.value = "";
  listaAdjetivos.textContent = ""; inputAdjetivos.value = "";
  listaSustantivos.textContent = ""; inputSustantivos.value = "";
});