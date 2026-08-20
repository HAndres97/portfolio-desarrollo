import hmac

PASSWORD_CORRECTA = "andres1234"


def verificar_password_segura(
    password_ingresada: str, password_referencia: str
) -> bool:
    """Compara dos contraseñas en tiempo constante para evitar Timing Attacks.

    Devuelve True si coinciden exactamente, False en caso contrario.
    """
    # Garantizamos que ambas entradas sean cadenas antes de comparar
    if not isinstance(password_ingresada, str) or not isinstance(
        password_referencia, str
    ):
        return False

    # compare_digest hace la comparación de forma segura en memoria
    return hmac.compare_digest(password_ingresada, password_referencia)


# --- Captura de datos ---
password_usuario = input("Escribe tu contraseña: ").strip()

# --- Verificación ---
if verificar_password_segura(password_usuario, PASSWORD_CORRECTA):
    print("Acceso concedido.")
else:
    print("Error: Contraseña incorrecta.")