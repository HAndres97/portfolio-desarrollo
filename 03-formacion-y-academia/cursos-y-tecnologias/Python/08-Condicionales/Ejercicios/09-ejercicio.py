""" 
Escribe un programa que determine si un número está entre 10 y 20 (ambos incluidos).
"""
def solicitar_numero(mensaje: str) -> int:
    """Solicita un número entero por consola de forma segura."""
    while True:
        entrada = input(mensaje).strip()
        try:
            return int(entrada)
        except ValueError:
            print("Error: Debes ingresar un número entero válido (ej. 25).")


def esta_en_rango(num: int) -> bool:
    """Evalúa si el número está dentro del rango [10, 20] inclusive."""
    return 10 <= num <= 20


# --- Ejecución ---
numero = solicitar_numero("Escribe un número: ")
es_valido = esta_en_rango(numero)

print(f"Tu número {numero} está dentro del rango (10-20): {es_valido}")