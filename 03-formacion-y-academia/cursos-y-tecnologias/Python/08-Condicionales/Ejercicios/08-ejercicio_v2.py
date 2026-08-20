from getpass import getpass

PASSWORD_CORRECTA = "andres1234"


def verificar_password(password_ingresada: str) -> bool:
    """Verifica si la contraseña ingresada coincide con la almacenada."""
    return password_ingresada == PASSWORD_CORRECTA


# --- Ejecución ---
# Usamos getpass si ejecutamos en consola, o input() si es un entorno interactivo básico
try:
    entrada = getpass("Escribe tu contraseña: ")
except Exception:
    entrada = input("Escribe tu contraseña: ").strip()

if verificar_password(entrada):
    print("Acceso concedido.")
else:
    print(" Error: Contraseña incorrecta.")