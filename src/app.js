// Arrays
let pronombres = ["el", "nuestro", "tu"];
let sustantivos = ["mapache", "oso", "pescado"];
let adjetivos = ["verde", "grande", "retorcido"];
let extensiones = [".com", ".net", ".es", ".io", ".us"];

// Generador de nombres de dominio
const generadorDeNombresDeDominio = (arrPronombres, arrSustantivos, arrAdjetivos, arrExtensiones) => {
  for (let pronombre of arrPronombres) {
    for (let sustantivo of arrSustantivos) {
      for (let adjetivo of arrAdjetivos) {
        for (let extension of arrExtensiones) {
          console.log(pronombre + sustantivo + adjetivo + extension);
        }
      }
    }
  }
}
generadorDeNombresDeDominio(pronombres, sustantivos, adjetivos, extensiones);