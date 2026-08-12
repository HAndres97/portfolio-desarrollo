¡Por supuesto! Aquí tienes la **Guía Profesional de Buenas Prácticas en Bash & Shell Scripting** redactada en código **Markdown puro**, lista para copiar y pegar directamente dentro de un archivo `.md` (por ejemplo, `BUENAS_PRACTICAS_BASH.md`) en tu repositorio.

Esta guía reúne las reglas de oro de administración de sistemas y desarrollo DevOps para escribir scripts de Bash seguros, robustos, portables y fáciles de mantener.

````markdown
# 🐚 Guía Profesional de Buenas Prácticas en Bash & Shell Scripting

Una referencia práctica para redactar scripts de **Bash** seguros, robustos, tolerantes a fallos y mantenibles, aplicando estándares utilizados en entornos de producción y DevOps.

---

## 📌 1. El Encabezado: Shebang y Modos de Seguridad (_Strict Mode_)

### A) Shebang Portátil

Utiliza siempre la ruta a través del entorno `env` en lugar de una ruta absoluta fija, garantizando que el script encuentre el ejecutable de Bash en cualquier sistema Unix/Linux.

```bash
#!/usr/bin/env bash
```
````

### B) Modo Estricto (_Bash Unofficial Strict Mode_)

Coloca esta línea al inicio de **todos** tus scripts. Cambiará drásticamente el comportamiento de Bash para evitar que continúe ejecutando código si algo falla:

```bash
set -euo pipefail
IFS=$'\n\t'

```

- **`set -e`:** Detiene la ejecución del script inmediatamente si cualquier comando devuelve un código de error (distinto de 0).
- **`set -u`:** Lanza un error y aborta si intentas utilizar una variable no definida/declarada.
- **`set -o pipefail`:** Hace que una tubería (`cmd1 | cmd2`) falle si _cualquiera_ de sus comandos falla, no solo el último.
- **`IFS=$'\n\t'`:** Previene errores de división de palabras no deseadas (_word splitting_) en bucles.

---

## 🎨 2. Estilo de Código, Nombres y Comentarios

| Elemento                              | Convención                                 | Ejemplo                            |
| ------------------------------------- | ------------------------------------------ | ---------------------------------- |
| **Variables Locales**                 | `snake_case` (minúsculas)                  | `local nombre_archivo="datos.txt"` |
| **Variables de Entorno / Constantes** | `UPPER_SNAKE_CASE` (mayúsculas)            | `EXPORT_PATH`, `DATABASE_URL`      |
| **Funciones**                         | `snake_case` (minúsculas)                  | `respaldar_base_datos()`           |
| **Extensión de Archivo**              | `.sh` o sin extensión si es ejecutable CLI | `backup.sh`                        |

---

## 🔒 3. Entrecomillado Obligatorio de Variables

> [!WARNING]
> **Envuelve SIEMPRE todas las variables entre comillas dobles `"$variable"**`. Si no lo haces, los espacios en blanco o comodines dentro del valor romperán el comportamiento del script.

```bash
# ❌ MAL: Si $archivo contiene espacios ("mi documento.txt"), el comando fallará
rm $archivo
if [ $edad -ge 18 ]; then ...

# ✅ BIEN: Protegido contra espacios en blanco y caracteres especiales
rm "$archivo"
if [[ "$edad" -ge 18 ]]; then ...

```

---

## 🏗️ 4. Estructuras Condicionales Modernas

Prefiere siempre los **corchetes dobles `[[...]]**`frente a los antiguos corchetes simples`[ ... ]`o al comando`test`.

```bash
# ❌ MAL: Sintaxis antigua y frágil
if [ "$usuario" = "admin" -a "$clave" = "123" ]; then

# ✅ BIEN: Sintaxis moderna, más segura, permite &&, || y patrones
if [[ "$usuario" == "admin" && "$clave" == "123" ]]; then
    echo "Acceso concedido"
fi

```

---

## 🧩 5. Funciones Limpias y Ámbito de Variables (`local`)

### A) Declara variables locales con `local`

En Bash, todas las variables son globales por defecto. Para evitar que una función sobrescriba variables de tu script principal, **usa siempre la palabra clave `local**`.

```bash
# ❌ MAL: Involuntariamente sobrescribe la variable global $resultado
calcular_total() {
    resultado=$(($1 + $2))
}

# ✅ BIEN: Ámbito restringido a la función
calcular_total() {
    local num1="$1"
    local num2="$2"
    local resultado=$((num1 + num2))

    echo "$resultado"
}

total=$(calcular_total 10 20)

```

---

## 🛠️ 6. Sustitución de Comandos y Rutas Absolutas

### A) Sustitución de Comandos con `$()`

Evita las comillas invertidas antiguas (`comando`). Usa la sintaxis recomendada `$(comando)` que permite anidamiento legible.

```bash
# ❌ MAL
fecha=`date +%Y-%m-%d`

# ✅ BIEN
fecha=$(date +%Y-%m-%d)

```

### B) Usa siempre Rutas Absolutas en Tareas Automáticas

Si tu script se ejecuta mediante **Cron Jobs** o servicios del sistema, las variables de entorno estarán reducidas. Define rutas absolutas para ejecutables y directorios.

```bash
# ✅ BIEN
PATH_BACKUP="/var/backups/db"
/usr/bin/pg_dump -U postgres mi_db > "$PATH_BACKUP/db_$(date +%Y%m%d).sql"

```

---

## 🧹 7. Limpieza y Captura de Señales (`trap`)

Si tu script crea archivos temporales o procesos en segundo plano, asegúrate de limpiarlos al salir o interrumperse (por ejemplo, con `Ctrl + C`), usando la instrucción `trap`.

```bash
#!/usr/bin/env bash
set -euo pipefail

# Crear archivo temporal seguro
TMP_DIR=$(mktemp -d)

# Función de limpieza
limpiar() {
    echo "Limpiando archivos temporales..."
    rm -rf "$TMP_DIR"
}

# Ejecutar la función 'limpiar' al salir (EXIT), cancelar (INT) o terminar (TERM)
trap limpiar EXIT INT TERM

# Lógica del script...
echo "Trabajando en $TMP_DIR..."

```

---

## 🚨 8. Ayuda y Mensajes por Salida de Error (`STDERR`)

### A) Envía mensajes de error a `STDERR`

Los mensajes normales usan `STDOUT` (impresión normal), pero las advertencias o errores deben dirigirse a la salida de errores `>&2` para permitir redirecciones limpias.

```bash
log_error() {
    echo "[ERROR] $(date +'\%T') -$*" >&2
}

if [[ ! -f "/etc/config.conf" ]]; then
    log_error "El archivo de configuración no existe."
    exit 1
fi

```

---

## 🛠️ 9. Herramientas de Calidad de Código (Linter)

### ShellCheck (Obligatorio)

**ShellCheck** es el linter estándar estático para scripts de Shell. Analiza tu código y te muestra advertencias, fallos de seguridad y violaciones de sintaxis.

- **Instalación:** `sudo apt install shellcheck` o extensión en VS Code.
- **Uso en consola:**

```bash
shellcheck tu_script.sh

```

---

## 💡 10. Resumen de Reglas de Oro

> [!TIP]
>
> 1. **Inicia con `set -euo pipefail**` para detener la ejecución ante fallos imprevistos.
> 2. **Entrecomilla siempre comillas dobles `"$variable"**` para evitar problemas de espaciado.
> 3. **Pasa tu código por `shellcheck**` antes de subirlo a Git o enviarlo a producción.
> 4. **Usa `local` dentro de tus funciones** para evitar contaminar el ámbito global.
> 5. **Usa `[[...]]**`para condicionales y`$()` para sustitución de comandos.

```

```
