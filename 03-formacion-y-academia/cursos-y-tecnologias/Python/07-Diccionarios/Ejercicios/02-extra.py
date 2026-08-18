"""
Escribe un script en Python que realice las siguientes tareas:

Procesar ventas: Recorre la lista ventas_hoy con un bucle for y actualiza el inventario:

Si el producto ya existe en el inventario, descuenta 1 a su cantidad.

Si el producto no existe en el inventario (como "chaquetas"), muestra un aviso en consola: "⚠️ Producto 'chaquetas' no encontrado en inventario."

Alertas de Stock Bajo: Usando una comprensión de diccionarios o un bucle, crea un nuevo diccionario llamado stock_critico que contenga únicamente los productos cuyo stock final sea menor o igual a 5.

Lectura Segura: Intenta consultar el stock final del producto "sudaderas" de forma segura con .get() (para que no rompa el programa) e imprime un mensaje que diga: "Stock de sudaderas: No disponible" si no se encuentra.

Informe Final: Muestra el diccionario inventario actualizado y el diccionario stock_critico.
"""
# Inventario actual: "producto": cantidad_en_stock
inventario = {"camisetas": 15, "pantalones": 8, "zapatillas": 5, "gorras": 12}

# Ventas realizadas hoy
ventas_hoy = [
    "camisetas",
    "zapatillas",
    "camisetas",
    "pantalones",
    "camisetas",
    "gorras",
    "chaquetas",  # ¡Ojo! Este producto no está en el inventario inicial
]
#Procesar Ventas
for producto in ventas_hoy:
    if (producto in inventario):
        inventario[producto] -= 1
    else:
        print(f"Producto:{producto} no encontrado en el inventario")
print(inventario)

#Alertas de Stock
stock_critico = dict()

for producto in ventas_hoy:
    if (producto in inventario):
        if (inventario[producto]< 5):
            stock_critico[producto] = inventario[producto]

print(stock_critico)

#Lectura Segura:
producto_stock = input("Escribe el producto:  ")
def ver_stock(inventario, producto_stock):
    producto_stock_limpio = producto_stock.lower().strip()
    if(type(producto_stock_limpio) != str or not(producto_stock_limpio in inventario) ):
        print("Error: Datos incorrectos")
        return None
    return inventario.get(producto_stock_limpio)
print(ver_stock(inventario,producto_stock))
#Forma mas sencilla
print(f"Consulta del stock {inventario.get("sudaderas","Stock de sudaderas: No disponible")}")

#Informe Final
print(f"Inventario total {inventario}\n Stock critico {stock_critico}")