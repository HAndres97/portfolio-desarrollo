/**
 * Verifica si una persona puede votar o no, si es menor indica cuántos años le faltan
 * @param {number} edad
 * @param {void}
 */
function verificarVotante(edad) {
  if (typeof edad !== "number" || Number.isNaN(edad) || edad <= 0) {
    console.log("Error: Tipo de dato incorrecto");
    return;
  }
  const EDAD_MINIMA_VOTAR = 18;
  if (edad < EDAD_MINIMA_VOTAR) {
    const añosFaltantes = EDAD_MINIMA_VOTAR - edad;
    console.log(
      `Todavia no puedes votar te faltan ${añosFaltantes} años para poder votar`,
    );
  } else {
    console.log(`Con tu edad de ${edad} años puedes votar`);
  }
}

verificarVotante(23);
verificarVotante("f");
verificarVotante(9);
verificarVotante(-5);
