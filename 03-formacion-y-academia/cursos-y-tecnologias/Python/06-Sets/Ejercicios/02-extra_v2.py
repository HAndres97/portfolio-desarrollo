asistentes_sala_a = [
    "ana@email.com",
    "carlos@email.com",
    "maria@email.com",
    "ana@email.com",
]
asistentes_sala_b = [
    "carlos@email.com",
    "pedro@email.com",
    "lucia@email.com",
    "maria@email.com",
]

# 1. Eliminar duplicados por sala
set_a = set(asistentes_sala_a)
set_b = set(asistentes_sala_b)

# 2. Asistentes totales únicos
todos_los_asistentes = set_a | set_b
print(f"En total hay {len(todos_los_asistentes)} personas únicas en el evento.")

# 3. Asistentes VIP (estuvieron en ambas salas)
asistentes_vip = set_a & set_b
print(f"Los asistentes VIPs fueron: {asistentes_vip}")

# 4. Asistentes exclusivos de la Sala A
asistentes_exclusivos_a = set_a - set_b
print(f"Los asistentes exclusivos de la Sala A: {asistentes_exclusivos_a}")