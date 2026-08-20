""" 
 Escribe un programa que verifique si un número es divisible por 3 y por 5 al mismo tiempo.
"""
def solicitar_numero(mensaje: str) -> int:
    """Solicita un número entero por consola de forma segura."""
    while True:
        entrada = input(mensaje).strip()
        try:
            return int(entrada)
        except ValueError:
            print("Error: Debes ingresar un número entero válido (ej. 25).")


def es_divisible_por_3_y_5(numero: int) -> bool:
    """Evalúa si el número es divisible por 3 y por 5."""
    return numero % 3 == 0 and numero % 5 == 0


# --- Ejecución ---
num = solicitar_numero("Escribe un número: ")

if es_divisible_por_3_y_5(num):
    print(f"El número {num} SÍ es divisible por 3 y por 5 al mismo tiempo.")
else:
    print(f"El número {num} NO es divisible por 3 y por 5 al mismo tiempo.")