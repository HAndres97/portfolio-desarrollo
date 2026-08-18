""" 
Eliminar duplicados por sala: Convierte ambas listas a conjuntos (set_a y set_b) para eliminar automáticamente los correos repetidos en cada lista.

Asistentes totales únicos (Unión): Obtén un conjunto llamado todos_los_asistentes con todos los correos únicos que asistieron al evento (sumando ambas salas) y muestra cuántos son en total usando len().

Asistentes VIP que vieron ambas charlas (Intersección): Encuentra qué personas estuvieron en la "Sala A" Y también en la "Sala B" usando .intersection() o el operador &.

Asistentes exclusivos de Sala A (Diferencia): Encuentra las personas que estuvieron solo en la "Sala A" pero no pasaron por la "Sala B" usando .difference() o el operador -
"""
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

#Eliminar duplicados por sala.
set_a = set(asistentes_sala_a)
set_b = set(asistentes_sala_b)
print(set_a,set_b)

#Asistentes totales únicos
todos_los_asistentes = set_a.union(set_b)
print(f"En total hay {len(todos_los_asistentes)} personas en el evento")

#Asistentes Vip que vieron ambas charlas
asistentes_vip = set_a.intersection(set_b)
print(f"Los asistentes vips fueron : {asistentes_vip}")

#Asistentes exclusivos de la Sala A,
asistentes_exclusivos_a = set_a.difference(set_b)
print(f"Los asistentes que solo pasaron por la zona a son/es : {asistentes_exclusivos_a}")