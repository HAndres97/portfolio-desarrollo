""" 
 Crea un programa que solicite dos números al usuario y compare cuál es mayor.
 Si son iguales, muestra un mensaje indicando la igualdad. 
"""
#Implemantamos una funcion que nos compruebe que es un int
def solicitar_numero() -> int:
    """ Solicita un numero"""
    while True:
        entrada =input("Numero: ").strip()
        try:
            entrada = int(entrada)
            return entrada
        except ValueError:
            print("Error:Debes ingresar un numero entero valido ej 25")

print("Escribe el primer numero: ")
numero1 = solicitar_numero()
print("Escribe el segundo numero: ")
numero2 = solicitar_numero()

def comprobar_numeros(numero1,numero2)-> str:
    if(numero1 < numero2):
        return "Es mayor el numero: " +str(numero2)
    elif(numero2 < numero1):
        return "Es mayor el numero: " +str(numero1)
    else:
        return "Son iguales"

print(comprobar_numeros(numero1,numero2))