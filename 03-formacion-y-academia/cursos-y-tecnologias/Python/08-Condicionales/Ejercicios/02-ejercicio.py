""" 
Solicita al usuario que ingrese su edad y muestra un mensaje indicando si es mayor de edad(18 años o más) o menor de edad.
"""
edad = input("Escribe tu edad:")
# Como evito el error de que no sea un float u otra cosa?
edad = int(edad)
def verificar_edad(edad:int)-> str:
    if (edad < 0):
        return "Error: Dato incorrecto"
    return "menor de edad" if edad < 18 else "Mayor de edad"
print(f"La edad de {edad} es {verificar_edad(edad)}")
""" 
Version gemini
"""
def verificar_edad_v2(edad:int)-> str:
    """ Evalua la categoria de edad de un usuario"""
    if edad < 0 or edad > 120 :
        return "Error: Edad fuera de rango valido"
    return "Menor de edad" if edad < 18 else "Mayor de edad"

#Captura segura del input con try-except
entrada_usuario = input("Escribe tu edad: ").strip()

try:
    #intentamos convertir la entrada a un numero entero
    edad_num = int(entrada_usuario)
    resultado = verificar_edad_v2(edad_num)
    print(f"La edad {edad_num} corresponde a :{resultado}")
except ValueError:
    print("Error:Debes ingresar un numero entero valido ej 25")

# Pedimos el dato hasta que nos de uno aceptable

def solicitar_edad() -> int:
    """ Solicita la edad por consola hasta obtener un entero válido"""
    while True:
        entrada =input("Escribe tu edad: ").strip()
        try:
            edad = int(entrada)
            if 0 <= edad <= 120:
                return edad
            print("Por favor, introduce una edad entre 0 y 120 años")
        except ValueError:
            print("Error:Debes ingresar un numero entero valido ej 25")