def solicitar_color_semaforo(mensaje: str) -> str:
    """Solicita y valida un color de semáforo válido por consola."""
    colores_validos = ["rojo", "amarillo", "verde"]

    while True:
        entrada = input(mensaje).strip().lower()
        if entrada in colores_validos:
            return entrada
        print("❌ Opción no válida. Introduce: rojo, amarillo o verde.")


def obtener_accion_semaforo(color: str) -> str:
    """Devuelve la instrucción de tráfico según el color del semáforo."""
    match color:
        case "rojo":
            return "DETENERSE"
        case "amarillo":
            return "ESTAR ALERTA"
        case "verde":
            return "AVANZAR"
        case _:
            return "ACCION DESCONOCIDA"


# --- Ejecución ---
color = solicitar_color_semaforo("Escribe el color del semáforo: ")
accion = obtener_accion_semaforo(color)

print(f"El semáforo está en {color.upper()}: usted debe {accion}.")