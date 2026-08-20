""" 
Caso Práctico Profesional: Motor de Reglas de Scoring Crediticio

Imagina que estás desarrollando la lógica backend para una fintech.
 Debes evaluar la solicitud de un cliente y determinar si es Apto, Apto con Aval o No Apto para recibir un préstamo,
 aplicando una serie de reglas de negocio en cascada.
 
 Datos de entrada requeridos:
 ingresos_mensuales (en euros, número entero o flotante positivo).
 score_crediticio (puntuación de 300 a 850).
 tiene_deudas_impagadas (booleano o texto "si"/"no").
 
 Tu Misión (Objetivos del código):
 Captura y validación robusta: Crea una función que solicite cada dato por consola garantizando que:
 Los ingresos_mensuales sean un número estrictamente positivo (> 0).
 El score_crediticio sea un entero en el rango válido $[300, 850]$.
 tiene_deudas_impagadas se convierta limpiamente a bool (aceptando entradas como "si", "no", "s", "n" sin importar mayúsculas/espacios).

Motor de decisión (evaluar_riesgo): Escribe una función que aplique las siguientes reglas de negocio:
RECHAZO DIRECTO: Si tiene_deudas_impagadas es True O el score_crediticio es menor a 550, la resolución es "RECHAZADO".
APROBADO DIRECTO: Si NO tiene deudas impagadas, su score_crediticio es mayor o igual a 700 Y sus ingresos_mensuales son de al menos 2000 €, la resolución es "APROBADO".
REVISIÓN / AVAL: En cualquier otro caso que no cumpla el rechazo directo pero tampoco la aprobación directa, la resolución es "REQUIERE AVAL O REVISIÓN MANUAL".
Formateo del informe: Muestra el dictamen final por pantalla con un formato claro usando f-strings.
"""
def validar_ingresos()->float:
    while True:
        ingresos = input("Ingresos mensuales: ")
        try:
            ingresos = float(ingresos)
            if ingresos > 0:
                return ingresos
            print("Tus ingresos deben ser mayor a 0")
        except ValueError:
            print("Escribe numeros")

def validar_score()->int:
    while True:
        score = input("Escribe tu score Crediticio: ")
        try:
            score = int(score)
            if 300 <= score <=850:
                return score
            print("Tu Score debe estar entre [300,850]")
        except ValueError:
            print("Escribe un numero entero")

def validar_deuda()->bool:
    ENTRADAS = ["si","no","s","n"]
    while True:
        deudas_impagadas = input("TIENES DEUDAS (SI/NO,S/N): ").strip().lower()
        if deudas_impagadas in ENTRADAS:
            return deudas_impagadas in ["s","si"]

def evaluar_riesgos(ingresos:float,score:int,deudas:bool)-> str:
    match (ingresos,score,deudas):
        case (i,s,d) if  d or s < 550:
            return "RECHAZADO"
        case (i,s,d) if not d and s >= 700 and i >= 2000.0:
            return "APROBADO"
        case _:
            return "REQUIERE AVAL O REVISIÓN MANUAL"

ingresos_mensuales = validar_ingresos()
score_crediticio = validar_score()
tienes_deudas_impagadas = validar_deuda()

resultado = evaluar_riesgos(ingresos_mensuales,score_crediticio,tienes_deudas_impagadas)
print(f"El estado de tu solicitud es: {resultado}")

""" 
def evaluar_riesgo(ingresos: float, score: int, deudas: bool) -> str:
    # Aplica las reglas de Scoring Crediticio en cascada.
    # 1. Regla de Rechazo Directo
    if deudas or score < 550:
        return "RECHAZADO"

    # 2. Regla de Aprobación Directa
    if not deudas and score >= 700 and ingresos >= 2000.0:
        return "APROBADO"

    # 3. Caso por defecto (Revisión / Aval)
    return "REQUIERE AVAL O REVISIÓN MANUAL"

"""
