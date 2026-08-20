""" 
Crea un programa que solicite una contraseña al usuario y verifique si coincide con una contraseña predefinida.
Si no coincide, muestra un mensaje de error. 
"""
PASSWORD = "andres1234"
def es_correcta(password: str) -> bool:
    return PASSWORD == password

password = input("Escribe tu contraseña: ").strip()

if(es_correcta(password)):
    print("Contraseña Correcta")
else:
    print("Error")