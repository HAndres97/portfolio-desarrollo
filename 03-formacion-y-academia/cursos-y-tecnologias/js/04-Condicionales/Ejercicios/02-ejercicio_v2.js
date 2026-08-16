/**
 * Valida las credenciales de un usuario contra el sistema.
 *
 * @param {string} user - El nombre de usuario ingresado.
 * @param {string} pass - La contraseña ingresada.
 * @param {string} [usuarioCorrecto="handres97"] - Usuario esperado en el sistema.
 * @param {string} [passwordCorrecta="1234andres"] - Contraseña esperada en el sistema.
 * @returns {boolean} Devuelve true si la autenticación es exitosa, false en caso contrario.
 */
function autenticarUsuario(
  user,
  pass,
  usuarioCorrecto = "handres97",
  passwordCorrecta = "1234andres",
) {
  // 1. Guard Clause: Verificación estricta de tipos de entrada
  if (typeof user !== "string" || typeof pass !== "string") {
    console.log(
      "Error: El usuario y la contraseña deben ser cadenas de texto.",
    );
    return false;
  }

  // 2. Validación de credenciales
  const esValido = user === usuarioCorrecto && pass === passwordCorrecta;

  // 3. Feedback claro y seguro
  if (esValido) {
    console.log("Acceso concedido: Usuario autenticado correctamente.");
    return true;
  }

  console.log("Acceso denegado: Credenciales inválidas.");
  return false;
}

// --- Casos de Prueba ---
autenticarUsuario("handres97", "1234andres"); // ✅ Acceso concedido
autenticarUsuario("handres97", "1234"); // ❌ Acceso denegado
autenticarUsuario("han", "1234andres"); // ❌ Acceso denegado
autenticarUsuario(12345, "1234andres"); // ❌ Error de tipo
