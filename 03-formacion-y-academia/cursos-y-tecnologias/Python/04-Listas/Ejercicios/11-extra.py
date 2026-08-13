""" 
Caso Práctico Profesional: Sistema de Limpieza de Logs/Transacciones
Imagina que estás construyendo un módulo para procesar pagos o lecturas de sensores.
Has recibido un listado de IDs de transacciones registrado a lo largo del turno,
pero el sistema emisor ha cometido varios errores:

Ha intercalado algunos códigos de error (valores negativos como -1).

Ha duplicado registros de control (como el valor 999).

Los datos han llegado desordenados y necesitas preparar el lote final para guardarlo.

Los datos de entrada:
Python
transacciones_limpias = [105, -1, 402, 999, 210, -1, 999, 305, 120]
🎯 Tu Misión (Objetivos del código):
Escribe un script en Python que realice las siguientes tareas utilizando las herramientas de listas que hemos practicado:

Filtrar errores: Elimina todos los valores erróneos (-1) de la lista. (Tip: Recuerda lo que vimos de condicionales o comprensiones de listas/bucles).

Consultar frecuencia: Averigua cuántas veces aparece el código de control 999 usando el método adecuado e imprímelo con una f-string.

Limpieza de duplicados de control: Elimina la primera aparición del código 999 de la lista.

Extraer la última transacción procesada: Extrae con .pop() el último elemento de la lista limpia y guárdalo en una variable llamada ultima_transaccion.

Ordenar el lote final: Ordena la lista resultante de menor a mayor.

Muestra el resultado final: Imprime la ultima_transaccion extraída y la lista final ordenada.

Tómate tu tiempo, escribe la solución a tu ritmo y pégamela aquí. Cuando me la entregues, la analizamos juntos, vemos qué tal funciona y
le añadimos un par de tips de refactorización profesional. ¡A por ello!
"""
#Transacciones
transacciones_raw = [105, -1, 402, 999, 210, -1, 999, 305, 120]

#Filtramos errores con condicionales y comprensiones de listas
transacciones_limpias = [num for num in transacciones_raw if num != -1]

#Averiguamos cuantas veces sale 999 en nuestra nueva lista
print(f'El codigo de control 999 aparece un total de {transacciones_limpias.count(999)} veces')

#Elimina la primera aparicion de 999
# 3. Elimina la primera aparición de 999 (Código defensivo)
if 999 in transacciones_limpias:
    transacciones_limpias.remove(999)


#Extraemos la última transacción procesada
ultima_transaccion = transacciones_limpias.pop() if transacciones_limpias else None

#Ordenamos las transacciones de menor a mayor
transacciones_limpias.sort()

#Resultados

print(f'La ultima transaccion captada ha sido {ultima_transaccion}, la lista de transacciones ordenadas es : {transacciones_limpias}')