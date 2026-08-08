````markdown
# 🐙 Guía Completa y Profesional de Git & GitHub

Una referencia práctica para dominar el control de versiones local con **Git** y la colaboración remota en **GitHub**, actualizada con los estándares y comandos modernos.

---

## 📌 1. Conceptos Clave: Git vs. GitHub

| Concepto   | Definición                                                                                                                                                   |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Git**    | Sistema de Control de Versiones Distribuido (DVCS) que funciona localmente en tu máquina. Registra los cambios en el código a lo largo del tiempo.           |
| **GitHub** | Plataforma en la nube que aloja repositorios de Git, facilitando el trabajo colaborativo, la revisión de código (_Pull Requests_) y la gestión de proyectos. |

---

## 🛠️ 2. Configuración Inicial (Primer uso)

Antes de comenzar a trabajar, es necesario configurar tu identidad en Git.

```bash
# Configurar nombre de usuario y correo global
git config --global user.name "Tu Nombre o Usuario"
git config --global user.email "tu_email@ejemplo.com"

# Definir 'main' como el nombre predeterminado de la rama principal (Estándar actual)
git config --global init.defaultBranch main

# Configurar el editor predeterminado (ejemplo: VS Code)
git config --global core.editor "code --wait"

# Comprobar la configuración global activa
git config --list
```
````

---

## 🔄 3. El Flujo de Trabajo en Git (Las 3 Áreas)

Git gestiona los archivos en tres estados o zonas de trabajo:

```text
 [ Working Directory ]  ---> ( git add ) --->  [ Staging Area ]  ---> ( git commit ) --->  [ Repository (.git) ]
 (Directorio de Trabajo)                        (Área de Preparación)                        (Historial Local)

```

1. **Working Directory:** Tu carpeta local donde editas y creas archivos.
2. **Staging Area:** Zona intermedia donde preparas los cambios que quieres incluir en la siguiente captura/foto.
3. **Repository (.git):** La base de datos donde Git almacena de forma permanente los _commits_ (el historial).

---

## 🚀 4. Guía de Comandos Esenciales de Git

### 📁 Inicialización y Estado

```bash
git init                   # Inicializa un repositorio Git local en la carpeta actual
git status                 # Muestra el estado de los archivos (modificados, en staging, no rastreados)
git log                    # Muestra el historial de commits
git log --oneline --graph  # Muestra el historial en una sola línea y en formato gráfico limpio

```

### ➕ Preparación y Guardado (Staging & Commit)

```bash
git add archivo.txt        # Añade un archivo específico al Staging Area
git add .                  # Añade TODOS los archivos modificados y nuevos al Staging Area
git commit -m "Mensaje"    # Guarda los cambios del Staging Area en el historial local
git commit -am "Mensaje"   # Abreviatura: añade (archivos rastreados) y realiza el commit a la vez

```

### 🌿 Gestión de Ramas (Branching) — _Comandos Modernos_

En versiones recientes de Git, se introdujeron `git switch` y `git restore` para sustituir el uso ambiguo de `git checkout`.

```bash
git branch                 # Lista todas las ramas locales (* indica la activa)
git branch nueva-rama      # Crea una nueva rama
git switch nueva-rama      # Cambia a la rama especificada (Sustituye a 'git checkout')
git switch -c nueva-rama   # Crea y cambia a la nueva rama en un solo paso
git merge nueva-rama       # Fusiona la rama especificada en la rama actual
git branch -d nueva-rama   # Elimina la rama especificada (solo si ya fue fusionada)

```

### ⏪ Cancelación y Deshacer Cambios

```bash
git restore archivo.txt    # Descarta los cambios no guardados en el directorio de trabajo
git restore --staged doc.txt # Quita un archivo del Staging Area (mantiene las modificaciones)
git reset --soft HEAD~1    # Deshace el último commit pero mantiene los cambios en el Staging Area
git reset --hard HEAD~1    # ⚠️ Deshace el último commit y borra permanentemente los cambios

```

---

## 🌐 5. Cómo Subir un Repositorio Local a GitHub (Paso a Paso)

Sigue estos pasos para subir tu proyecto por primera vez a GitHub:

### Paso 1: Crea el repositorio localmente

```bash
mkdir mi-proyecto
cd mi-proyecto
git init
echo "# Mi Proyecto" > README.md
git add .
git commit -m "Initial commit"

```

### Paso 2: Crea el repositorio en GitHub

1. Entra a [GitHub](https://github.com) y haz clic en el botón **`+`** (arriba a la derecha) -> **New repository**.
2. Escribe el nombre del repositorio (ej. `mi-proyecto`).
3. Deja desmarcadas las casillas de añadir `README`, `.gitignore` y `License` (ya que inicializamos el proyecto localmente).
4. Haz clic en **Create repository**.

### Paso 3: Vincula y sube (_Push_) tu repositorio

Copia y ejecuta en tu terminal los comandos que te proporciona GitHub:

```bash
# 1. Agrega el enlace remoto con el nombre 'origin'
git remote add origin [https://github.com/tu-usuario/mi-proyecto.git](https://github.com/tu-usuario/mi-proyecto.git)

# 2. Asegúrate de que la rama se llame 'main'
git branch -M main

# 3. Sube los cambios a GitHub y establece el seguimiento (-u)
git push -u origin main

```

> [!TIP]
> A partir del primer `git push -u origin main`, en las futuras actualizaciones solo necesitarás ejecutar `git push`.

---

## 🔄 6. Sincronización e Interacción Remota

```bash
git remote -v              # Muestra los repositorios remotos vinculados (fetch y push)
git fetch                  # Descarga el historial del remoto sin fusionar cambios en tu código
git pull                   # Descarga y fusiona los cambios remotos en tu rama actual (fetch + merge)
git push                   # Subes tus commits locales al repositorio remoto
git clone <URL_REPOSITORIO> # Clona un repositorio remoto existente a tu equipo local

```

---

## 💡 7. Ejemplo Práctico Explicado

Imagina que estás desarrollando una nueva función (ej. una pantalla de Login) para tu sitio web.

### 📝 Escenario

1. **Paso 1:** Creamos una rama específica para trabajar aislados de la rama estable `main`.

```bash
git switch -c feature/login

```

_Explicación:_ Con `git switch -c`, creamos la rama `feature/login` y nos cambiamos a ella inmediatamente.

2. **Paso 2:** Creamos/modificamos los archivos del proyecto (`login.html` y `styles.css`).
3. **Paso 3:** Verificamos qué archivos han cambiado.

```bash
git status

```

_Explicación:_ Verás los archivos en color rojo indicando que están modificados pero no preparados.

4. **Paso 4:** Preparamos y guardamos la captura (_commit_).

```bash
git add .
git commit -m "feat: implementar estructura y estilos del login"

```

_Explicación:_ `git add .` pasa los cambios a la zona de _Staging_, y `git commit` guarda la versión con un mensaje claro.

5. **Paso 5:** Volvemos a la rama principal e integramos la nueva característica.

```bash
git switch main
git merge feature/login

```

_Explicación:_ Volvemos a `main` y traemos los cambios terminados de la rama `feature/login`.

6. **Paso 6:** Subimos los cambios actualizados a GitHub.

```bash
git push origin main

```

_Explicación:_ Publicamos la versión final actualizada en la nube para que esté disponible en GitHub.

---

## 🚫 8. El Archivo `.gitignore`

El archivo `.gitignore` le indica a Git qué archivos o carpetas debe **ignorar** para evitar subir datos sensibles, dependencias pesadas o archivos temporales.

Crea un archivo llamado `.gitignore` en la raíz del proyecto:

```text
# Archivos de configuración del entorno
.env

# Carpetas de dependencias
node_modules/
venv/

# Archivos de sistema operativo o del editor
.DS_Store
.vscode/
*.log

```

---

## 🚨 9. Alertas y Consejos de Buenas Prácticas

> [!IMPORTANT]
> **Mensajes de Commit Claros:** Utiliza convenciones como Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`) para mantener un historial limpio y legible.

> [!WARNING]
> **Nunca subas credenciales:** Nunca hagas commit de claves API, contraseñas o archivos `.env`. Agrega siempre esos archivos al `.gitignore` antes de hacer tu primer commit.

```

```
