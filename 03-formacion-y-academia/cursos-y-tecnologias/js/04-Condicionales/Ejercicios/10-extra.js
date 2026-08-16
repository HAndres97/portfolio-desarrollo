/**
 * El Reto Técnico: Sistema de Rol y Permisos de UsuarioEscribe una función llamada evaluarAccesoSistema que determine el nivel de permiso de un usuario dentro de un panel de administración según su rol y su estado de cuenta.
 * Requisitos de Negocio:
 * Parámetros de entrada:rol (string): Puede ser "admin", "editor", "usuario" o "invitado".
 * cuentaActiva (boolean):Indica si la cuenta está activa (true) o bloqueada (false).
 * Reglas de Acceso:
 * Si la cuentaActiva es false, no importa qué rol tenga: debe denegar el acceso con el mensaje: "Acceso denegado: Cuenta desactivada.".
 * Si la cuenta está activa (true),los permisos según el rol son:
 * "admin" $\rightarrow$ Devuelve: "Acceso total:Panel de administración".
 * "editor" $\rightarrow$ Devuelve: "Acceso limitado: Edición de contenido".
 * "usuario" $\rightarrow$ Devuelve: "Acceso básico: Lectura de contenido".
 * "invitado" $\rightarrow$ Devuelve: "Sin acceso: Debe registrarse".
 * Validaciones de Seguridad y Casos Borde (Guard Clauses):
 * rol debe ser un string no vacío. Si no lo es, muestra un error de tipo.
 * cuentaActiva debe ser estrictamente un boolean (typeof === "boolean").
 * La búsqueda del rol debe ignorar espacios extra y mayúsculas/minúsculas (ej: "  ADMIN " debe tratarse como "admin").
 * Si el rol introducido no coincide con ninguno de los 4 permitidos, debe indicar que el rol no existe.
 * Documentación:
 * Incluye la cabecera JSDoc correspondiente (param y returns).
 *
 */
/**
 * @param {string} rol -El rol del usuario ("admin", "editor", "usuario", "invitado").
 * @param {boolean} cuentaActiva - Estado de activación de la cuenta.
 * @returns {string|null} Mensaje de nivel de acceso o null si la validación/acceso falla.
 *
 */
function evaluarAccesoSistema(rol, cuentaActiva) {
  if (
    typeof rol !== "string" ||
    !rol.trim() ||
    typeof cuentaActiva !== "boolean"
  ) {
    console.log("Error: Los datos introducidos son incorrectos");
    return null;
  }
  if (!cuentaActiva) {
    console.log("Acceso denegado: Cuenta desactivada");
    return null;
  }
  const rolLimpio = rol.toLowerCase().trim();

  switch (rolLimpio) {
    case "admin":
      return "Acceso total: Panel de administracion";
    case "editor":
      return "Acceso limitado: Edición de contenido";
    case "usuario":
      return "Acceso basico: Lectura de contenido";
    case "invitado":
      return "Sin acceso: Debe registrarse";
    default:
      console.log("El rol introducido no existe");
      return null;
  }
}
console.log(evaluarAccesoSistema("admin", true));
console.log(evaluarAccesoSistema("mid", true));
console.log(evaluarAccesoSistema("invitado", true));
console.log(evaluarAccesoSistema(5, true));
console.log(evaluarAccesoSistema("editor", false));
