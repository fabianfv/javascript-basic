const separador = (name) => console.log("-".repeat(30), `\n${name}`)

/* Exercici 1 */
separador("Exercici 1")
console.log("Hola mundo")

/* Exercici 2 */
alert("¡Me llamo Fabián!")

/* Exercici 3 */
separador("Exercici 3")

let fname = "Fabián"
let lname = "Flores Vadell"
console.log(`${fname} ${lname}`)

/* Exercici 4 */
separador("Exercici 4")

let num1 = 34
let num2 = 56
console.log(`La suma entre ${num1} y ${num2} es ${num1 + num2}`)

/* Exercici 5 */
let nota_examen = 7.65

function informar_nota(nota, umbral = 7) {
  alert(
    nota_examen >= umbral
      ? `¡Aprobaste campeón! Tu nota fue: ${nota_examen}`
      : `Tu nota fue: ${nota_examen} ¡Qué pena! No aprobaste, pero puedes intetarlo nuevamente.`
  )
}

informar_nota(nota_examen)

nota_examen = 5.96
informar_nota(nota_examen)

/* Exercici 6 */
separador("Exercici 6")

let frase = "Tengo un coche de color verde"
console.log(frase.replace("verde", "azul"))
console.log(frase.replace(/o/gi, "u"))

/* Exercici 7 */
separador("Exercici 7")

const objetos = ["mesa", "silla", "computadora", "libreta"]

objetos.forEach((objeto, i) => console.log(`El objeto ${objeto} está en la posición ${i}`))

/* Exercici 8 */
separador("Exercici 8: calculadora1")

function calculadora(operacion, valor1, valor2) {
  console.log(
    `${operacion} de ${valor1} y ${valor2} = `,

    operacion === "suma"
      ? valor1 + valor2
      : operacion === "resta"
      ? valor1 - valor2
      : operacion === "multiplicacion"
      ? valor1 * valor2
      : `operación inválida`
  )
}

calculadora("suma", 5, 5)
calculadora("resta", 25, 5)
calculadora("multiplicacion", 3, 3)
calculadora("interes-compuesto", 5, 5)

/* Nivel 2 */
separador("Nivell 2: calculadora2")

function calculadora2(operacion, valor1, valor2) {
  console.log(
    `${operacion} de ${valor1} y ${valor2} = `,

    operacion === "suma"
      ? valor1 + valor2
      : operacion === "resta"
      ? valor1 - valor2
      : operacion === "multiplicacion"
      ? valor1 * valor2
      : operacion === "division"
      ? valor2 === 0
        ? "Error: división por cero"
        : valor1 / valor2
      : "operación inválida"
  )
}

calculadora2("suma", 5, 5)
calculadora2("resta", 25, 5)
calculadora2("multiplicacion", 3, 3)
calculadora2("interes-compuesto", 5, 5)
calculadora2("division", 5, 0)
calculadora2("division", 64, 8)
