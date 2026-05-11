// Arrays
let pronombres = ["el", "nuestro", "tu"];
let sustantivos = ["mapache", "oso", "pescado"];
let adjetivos = ["burgues", "ingles", "propio", "internet"];
let extensiones = ["com", "net", "es", "io", "us"];

// Lista Ul
let miLista = document.querySelector("#miLista");

window.onload = () => {
  // Generador de nombres de dominio
    for (let pronombre of pronombres) {
      for (let sustantivo of sustantivos) {
        for (let adjetivo of adjetivos) {
          for (let extension of extensiones) {
            // Creo Checkbox
            let checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            // Elimina el elemento si se marca la Check Box
            checkBox.addEventListener("change", () => miLista.removeChild(liElement))

            // Creo li
            let liElement = document.createElement("li");
            // Función eliminadora del final del adjetivo si coincide con extensión
            if (adjetivo.endsWith(extension)) {
              let adjetivoSeparado = adjetivo.split("");
              adjetivoSeparado.splice(adjetivo.length - extension.length, extension.length);
              liElement.textContent = pronombre + sustantivo + adjetivoSeparado.join("") + "." + extension
            }
            else liElement.textContent = pronombre + sustantivo + adjetivo + "." + extension;
            
            // Añado ambos elementos
            liElement.appendChild(checkBox);
            miLista.appendChild(liElement);
            
          }
        }
      }
    }
  }
