""" 
 Escribe un programa que verifique si una cadena de texto está vacía y muestre un mensaje en consecuencia.
"""
def verificar_cadena_texto()-> str:
    caden_texto = input("Escribe algo").strip()
    return "Existe cadena de texto" if caden_texto else "Esta vacio"

print(verificar_cadena_texto())

def esta_vacia(texto: str) -> bool:
    """Devuelve True si la cadena está vacía o solo contiene espacios."""
    return not bool(texto.strip())


# --- Lógica del programa ---
entrada_usuario = input("Escribe una frase: ")

if esta_vacia(entrada_usuario):
    print("La cadena de texto está vacía.")
else:
    print(f"Texto detectado: '{entrada_usuario.strip()}'")