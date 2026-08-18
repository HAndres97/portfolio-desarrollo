inventario = {"camisetas": 15, "pantalones": 8, "zapatillas": 5, "gorras": 12}

ventas_hoy = [
    "camisetas",
    "zapatillas",
    "camisetas",
    "pantalones",
    "camisetas",
    "gorras",
    "chaquetas",
]

# 1. Procesar Ventas
for producto in ventas_hoy:
    if producto in inventario:
        inventario[producto] -= 1
    else:
        print(f"Producto '{producto}' no encontrado en el inventario.")

# 2. Alertas de Stock Crítico (recorriendo el inventario con .items())
stock_critico = {
    producto: stock for producto, stock in inventario.items() if stock <= 5
}

# 3. Lectura Segura
stock_sudaderas = inventario.get("sudaderas", "No disponible")
print(f"Stock de sudaderas: {stock_sudaderas}")

# 4. Informe Final
print(f"\n--- INFORME FINAL ---")
print(f"Inventario actualizado: {inventario}")
print(f"Stock crítico (<=5 unidades): {stock_critico}")