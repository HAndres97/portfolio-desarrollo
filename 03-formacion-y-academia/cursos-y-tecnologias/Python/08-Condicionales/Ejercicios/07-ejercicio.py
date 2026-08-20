""" 
 Escribe un programa que determine si una persona puede votar en función de su edad(mayor o igual a 18).
 Si tiene 16 o 17 años, indica que puede votar con permiso especial. 
"""
def solicitar_edad(mensaje: str) -> int:
    """Solicita un número entero por consola de forma segura."""
    while True:
        entrada = input(mensaje).strip()
        try:
            entrada = int(entrada)
            if 0 <= entrada <= 120:
                return entrada
        except ValueError:
            print("Error: Debes ingresar una edad valida")

def verificar_voto(edad:int)-> str:
    match edad:
        case e if e >= 18:
            return "Puede votar"
        case 16 | 17:  # Puedes agrupar valores fijos directamente con |
            return "Vota con permiso especial"
        case _:
            return "No puede votar"

edad = solicitar_edad("Tu edad: ")
print(verificar_voto(edad))