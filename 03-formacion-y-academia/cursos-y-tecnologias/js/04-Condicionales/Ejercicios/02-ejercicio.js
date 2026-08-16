/**
 *Imprime por consola un mensaje si el usuario y contraseña coincide con uno establecido
 *
 * @param {string} [usuario="handres97"] -Valor por defecto
 * @param {string} [password="1234andres"]
 *
 */
const usuario = "handres97";
const password = "1234andres";
function imprimirUsuario(user, pass) {
  user = String(user);
  pass = String(pass);
  if (user === usuario && pass === password) {
    console.log("Usuario Valido, coincide");
  } else {
    console.log("Usuario invalido, no coincide los datos");
  }
}
imprimirUsuario("handres97", "1234andres");
imprimirUsuario("handres97", "1234");
imprimirUsuario("han", "1234andres");
