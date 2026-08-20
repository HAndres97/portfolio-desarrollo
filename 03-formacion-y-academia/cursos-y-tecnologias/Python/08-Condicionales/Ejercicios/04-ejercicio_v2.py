def solicitar_numero(mensaje: str) -> int:
    """Solicita un número entero por consola de forma segura."""
    while True:
        entrada = input(mensaje).strip()
        try:
            return int(entrada)
        except ValueError:
            print("❌ Error: Debes ingresar un número entero válido (ej. 25).")


def comparar_numeros(n1: int, n2: int) -> str:
    """Compara dos números enteros y devuelve el resultado."""
    if n1 > n2:
        return f"El número {n1} es mayor que {n2}."
    elif n2 > n1:
        return f"El número {n2} es mayor que {n1}."
    return "Ambos números son iguales."


# --- Ejecución del programa ---
numero1 = solicitar_numero("Escribe el primer número: ")
numero2 = solicitar_numero("Escribe el segundo número: ")

resultado = comparar_numeros(numero1, numero2)
print(resultado)