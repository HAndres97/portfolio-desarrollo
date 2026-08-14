""" 
📋 Caso Práctico Profesional: Procesador de Logs de Conexión a Servidores
Imagina que estás construyendo un módulo para monitorizar el estado de los servidores de tu empresa. 
Un microservicio te devuelve una respuesta inmutable (una tupla) con la información de un servidor en producción, pero la respuesta incluye datos extra que necesitas filtrar, validar y reestructurar.

Los datos de entrada:
Python
# Formato original: (ip, puerto, estado, zona, latencia_ms)
registro_servidor = ("192.168.1.50", 8080, "ACTIVO", "eu-west-1", 45)
🎯 Tu Misión (Objetivos del código):
Escribe un script en Python que realice las siguientes tareas utilizando las herramientas de tuplas que hemos practicado:

Desempaquetado explícito: En una sola línea, desempaqueta los 5 valores de registro_servidor en las variables: ip, puerto, estado, zona y latencia.

Inspección de datos: Averigua en qué posición/índice se encuentra la cadena "eu-west-1" dentro de la tupla original usando .index() e imprímelo en pantalla.

Subtupla de red: Crea una subtupla llamada datos_red que contenga únicamente los 2 primeros elementos (ip y puerto) usando slicing ([inicio:fin]).

Modificación de estado: Por norma del sistema, el estado debe guardarse en minúsculas. Como las tuplas son inmutables, convierte registro_servidor a lista, cambia el estado a "activo" (en minúsculas) y vuelve a convertirlo a una nueva tupla llamada registro_actualizado.

Formateo final: Imprime en consola un mensaje final usando una f-string con la ip, el puerto y el estado (ya en minúsculas) sacados de registro_actualizado.

Tómate tu tiempo, escribe tu código paso a paso y pégamelo aquí sin prisa. Cuando lo entregues, lo revisamos al detalle, analizamos qué tal funciona y vemos qué ajustes aplicaría un desarrollador Senior en producción. ¡A por ello!
"""
# Formato original: (ip, puerto, estado, zona, latencia_ms)
registro_servidor = ("192.168.1.50", 8080, "ACTIVO", "eu-west-1", 45)

#1- Desempaquetado explicito
(ip,puerto,estado,zona,latencia_ms) = registro_servidor

#2-Inspeccion de datos, posicion de "eu-west-1", dentro de la original
cadena = "eu-west-1"
if cadena in registro_servidor:
    print(f'La posicion de "eu-west-1" dentro de la tupla es {registro_servidor.index(cadena)}')
else:
    print(f'No se ha encontrado la posicion de {cadena}')
#3-Subtupla datos_red: ip y puerto, usa sclicing

datos_red = registro_servidor[0:2]

#4-Modicicion de estado
registro_servidor_lista = list(registro_servidor)
#Buscamos el indice de activo
posicion = registro_servidor_lista.index("ACTIVO")
#Lo modificamos
registro_servidor_lista[posicion] = "activo"
#Volvemos a crear una tupla
registro_actualizado = tuple(registro_servidor_lista)
""" 
Profesor
# 4. Modificación de estado (convirtiendo a minúsculas dinámicamente)
registro_lista = list(registro_servidor)
registro_lista[2] = registro_lista[2].lower()
registro_actualizado = tuple(registro_lista)
"""
#5-Formateo final
(ip, puerto, estado, *_)  = registro_actualizado

print(f'La ip es {ip}, el puerto es  {puerto} y el estado es {estado}')
