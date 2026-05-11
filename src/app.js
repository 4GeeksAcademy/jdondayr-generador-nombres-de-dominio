// Arrays
let pronombres = ["el", "nuestro", "tu"];
let sustantivos = ["mapache", "oso", "pescado"];
let adjetivos = ["burgues", "ingles", "propio", "internet"];
let extensiones = ["com", "net", "es", "io", "us"];

// Generador de nombres de dominio
const generadorDeNombresDeDominio = (arrPronombres, arrSustantivos, arrAdjetivos, arrExtensiones) => {
  for (let pronombre of arrPronombres) {
    for (let sustantivo of arrSustantivos) {
      for (let adjetivo of arrAdjetivos) {
        for (let extension of arrExtensiones) {
          if (adjetivo.endsWith(extension)) {
            let adjetivoSeparado = adjetivo.split("");
            adjetivoSeparado.splice(adjetivo.length - extension.length, extension.length);
            console.log(pronombre + sustantivo + adjetivoSeparado.join("") + "." + extension);
          }
          else console.log(pronombre + sustantivo + adjetivo + "." + extension);
        }
      }
    }
  }
}
generadorDeNombresDeDominio(pronombres, sustantivos, adjetivos, extensiones);