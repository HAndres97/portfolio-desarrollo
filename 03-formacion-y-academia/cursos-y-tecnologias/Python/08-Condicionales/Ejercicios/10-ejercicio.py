""" 
Escribe un programa que simule un semáforo:
solicita al usuario que ingrese un color(rojo, amarillo, verde)
y muestra un mensaje indicando si debe detenerse, estar alerta o avanzar. 
"""
def comprobar_color(mensaje:str)->str:
    while True:
        entrada = input(mensaje).strip().lower()
        try:
            if entrada in ["rojo","verde","amarillo"]:
                return entrada
            print("Escribe uno de los siguientes colores (rojo,amarillo,verde)")
        except ValueError:
                print("Escribe uno de los siguientes colores (rojo,amarillo,verde)")

def indicar_usuario(color:str)->str:
     match color:
          case "rojo":
               return "DETERNSE"
          case "verde":
               return "AVANZAR"
          case "amarillo":
               return "Estar Alerta"
          case _:
               return""

color = comprobar_color("Escribe el color del semaforo: ")
mensaje = indicar_usuario(color)
print(f"El semaforo esta en {color} usted tiene que {mensaje}")