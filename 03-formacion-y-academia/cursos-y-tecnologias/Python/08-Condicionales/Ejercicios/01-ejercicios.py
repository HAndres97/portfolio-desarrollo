""" 
Escribe un programa que verifique si un número es positivo, negativo o cero. 
"""
def verificar_numero(numero:int)->str:
    if numero > 0:
        return "Positivo"
    elif numero < 0:
        return "Negativo"
    else:
        return "Cero"
numero = 7
print(f"El {numero} es: {verificar_numero(numero)}")

""" 
# Python 3.10+ permite usar el operador '|' para tipos
def verificar_numero(numero: int | float) -> str:
    if numero > 0:
        return "Positivo"
    elif numero < 0:
        return "Negativo"
    return "Cero"  # El 'else' no es estrictamente necesario si los 'if' anteriores tienen 'return'
"""

""" 
def verificar_numero(numero: int | float) -> str:
    match numero:
        case n if n > 0:
            return "Positivo"
        case n if n < 0:
            return "Negativo"
        case _:
            return "Cero"
"""