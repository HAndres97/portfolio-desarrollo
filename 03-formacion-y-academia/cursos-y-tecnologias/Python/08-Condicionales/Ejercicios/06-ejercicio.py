""" 
 Solicita al usuario que ingrese un número y verifica si es par o impar. 
"""
def solicitar_numero(mensaje: str) -> int:
    """Solicita un número entero por consola de forma segura."""
    while True:
        entrada = input(mensaje).strip()
        try:
            return int(entrada)
        except ValueError:
            print("Error: Debes ingresar un número entero válido (ej. 25).")

def es_par(numero:int)->bool:
    return numero % 2 == 0

numero = solicitar_numero("Escribe un número: ")

# Evaluación con condicional estándar
mensaje = "par" if es_par(numero) else "impar"
print(f"El número {numero} es {mensaje}.")