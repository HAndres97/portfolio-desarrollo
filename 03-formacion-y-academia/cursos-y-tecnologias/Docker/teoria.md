````markdown
# 🐳 Guía Definitiva de Docker & Dockerfile

Una referencia paso a paso para entender la contenedorización, aprender la arquitectura interna de un `Dockerfile`, dominar los comandos de consola de **Docker** y aplicar las mejores prácticas del sector.

---

## 📌 1. ¿Qué es Docker y por qué existe?

Para entender Docker, imaginemos el problema clásico del desarrollo de software:

> **El problema tradicional:** Creas una aplicación en tu ordenador y funciona perfecta. Se la mandas a un compañero o la subes al servidor de producción y... **falla**.
> _¿Por qué?_ Porque el servidor tiene otra versión de Node/Python, le faltan librerías del sistema operativo o las variables de entorno son distintas. La famosa frase: _"¡En mi máquina sí funciona!"_.

### 💡 La Solución de Docker: Contenedores

**Docker** es una plataforma de código abierto que permite empaquetar una aplicación **junto con todo lo que necesita para funcionar** (código, runtime, librerías, archivos de configuración) dentro de una unidad estandarizada llamada **Contenedor**.

Un contenedor se ejecuta de forma **aislada** del sistema operativo anfitrión, garantizando que tu aplicación se comporte **exactamente igual** en tu PC con Windows/WSL, en un Mac o en un servidor de Amazon Web Services (AWS) en la nube.

---

## 🧱 2. Los 3 Pilares Fundamentales de Docker

Para dominar Docker debes entender estos tres conceptos clave:

```text
  [ Dockerfile ]  ──( docker build )──>  [ Imagen de Docker ]  ──( docker run )──>  [ Contenedor ]
  (La Receta)                           (La Plantilla / ISO)                        (La App en ejecución)
```
````

1. **Dockerfile (La Receta):** Un archivo de texto plano con las instrucciones paso a paso para construir la imagen.
2. **Imagen (La Plantilla):** Un paquete estático de solo lectura que contiene el código, las dependencias y el sistema base.
3. **Contenedor (La Instancia):** La aplicación en ejecución creada a partir de una imagen. Es la "caja virtualizada" que realmente procesa tu código.

---

## 📜 3. Guía Completa de Dockerfile (Instrucciones / Directivas)

Un **`Dockerfile`** no lleva extensión (`Dockerfile`, no `Dockerfile.txt`). Cada línea empieza por una **directiva** (por convención en MAYÚSCULAS) seguida de sus argumentos.

### Las Directivas Esenciales Explicadas:

#### 1. `FROM` — La Imagen Base

Todo `Dockerfile` **debe comenzar** especificando la imagen oficial de la cual parte (un sistema operativo ligero o un entorno preparado).

```dockerfile
FROM python:3.11-slim

```

#### 2. `WORKDIR` — El Directorio de Trabajo

Establece la carpeta interna dentro del contenedor donde se ejecutarán las instrucciones siguientes. Si no existe, Docker la crea.

```dockerfile
WORKDIR /app

```

#### 3. `COPY` / `ADD` — Copiar Archivos

Copia archivos desde tu PC local hacia el interior de la imagen.

- `COPY`: Es la opción estándar y recomendada para copiar archivos y carpetas locales.
- `ADD`: Similar a `COPY`, pero además puede extraer archivos comprimidos (`.tar.gz`) o descargar archivos desde URLs.

```dockerfile
COPY requirements.txt .
COPY . .

```

#### 4. `RUN` — Ejecutar Comandos en la Construcción

Ejecuta comandos de consola (instalar paquetes con `apt-get`, `pip`, `npm install`) **mientras se está creando la imagen**. Cada `RUN` crea una nueva capa interna.

```dockerfile
RUN pip install --no-cache-dir -r requirements.txt

```

#### 5. `ENV` — Variables de Entorno

Define variables globales dentro del contenedor.

```dockerfile
ENV PORT=8080
ENV NODE_ENV=production

```

#### 6. `EXPOSE` — Documentación de Puertos

Informa en qué puerto escuchará la aplicación dentro del contenedor. _(Es una buena práctica documental, aunque el puerto se debe mapear explícitamente al ejecutar el contenedor)_.

```dockerfile
EXPOSE 8080

```

#### 7. `CMD` vs `ENTRYPOINT` — Comando de Arranque

Definen qué comando ejecutará la aplicación **cuando el contenedor se ponga en marcha**.

- **`CMD`:** Proporciona el comando por defecto. Se puede sobrescribir fácilmente desde la terminal al hacer `docker run`.
- **`ENTRYPOINT`:** Define un comando ejecutable fijo que no se sobrescribe tan fácilmente.

```dockerfile
# Formato preferido (Exec Form usando formato JSON)
CMD ["python", "main.py"]

```

---

## 🧪 4. Ejemplo Práctico de Dockerfile Paso a Paso

Supongamos un proyecto en **Node.js / Express**:

```dockerfile
# 1. Partimos de la imagen oficial ligera de Node.js en Alpine Linux
FROM node:20-alpine

# 2. Creamos y nos situamos en el directorio /app dentro del contenedor
WORKDIR /app

# 3. Copiamos los archivos de dependencias
COPY package.json package-lock.json ./

# 4. Instalamos únicamente dependencias de producción
RUN npm ci --only=production

# 5. Copiamos el resto del código de nuestra aplicación
COPY . .

# 6. Documentamos que el contenedor escuchará en el puerto 3000
EXPOSE 3000

# 7. Comando de inicio cuando arranque el contenedor
CMD ["node", "server.js"]

```

---

## 🛠️ 5. Guía Completa de Comandos de Consola de Docker

Una vez que tienes instalado Docker y escrito tu `Dockerfile`, estos son los comandos fundamentales para gestionar todo el ciclo de vida:

### A) Gestión de Imágenes

```bash
# Construir una imagen desde un Dockerfile
# Syntax: docker build -t <nombre_imagen>:<etiqueta> .
docker build -t mi-api-node:1.0 .

# Listar las imágenes almacenadas en tu máquina
docker images

# Eliminar una imagen local
docker rmi mi-api-node:1.0

# Descargar una imagen desde Docker Hub sin ejecutarla
docker pull nginx:alpine

```

### B) Gestión de Contenedores

```bash
# Ejecutar un contenedor en segundo plano (-d) con mapeo de puertos (-p local:contenedor)
docker run -d -p 8080:3000 --name contenedor-node mi-api-node:1.0

# Listar contenedores activos (en ejecución)
docker ps

# Listar TODOS los contenedores (incluidos los detenidos)
docker ps -a

# Detener un contenedor en ejecución
docker stop contenedor-node

# Arrancar un contenedor previamente detenido
docker start contenedor-node

# Eliminar un contenedor (debe estar detenido previa o usar -f para forzar)
docker rm contenedor-node

```

### C) Diagnóstico e Inspección

```bash
# Ver los logs o salidas impresas por la app dentro del contenedor
docker logs -f contenedor-node

# Entrar a la consola interactiva (Bash/Sh) de un contenedor activo
docker exec -it contenedor-node sh

# Ver el consumo de CPU, RAM y red de los contenedores en tiempo real
docker stats

```

---

## 💾 6. Persistencia de Datos: Volúmenes de Docker

Por defecto, los contenedores son **efímeros**: si eliminas un contenedor, todos los datos creados dentro de él se borran. Para persistir datos (por ejemplo, en bases de datos PostgreSQL o MySQL), usamos **Volúmenes**.

```bash
# Crear un volumen administrado por Docker
docker volume create datos_postgres

# Montar el volumen en un contenedor
docker run -d \
  --name mi-db \
  -v datos_postgres:/var/lib/postgresql/data \
  -e POSTGRES_PASSWORD=secreto \
  postgres:15

```

---

## 🚫 7. El Archivo `.dockerignore`

Evita copiar archivos innecesarios o sensibles (dependencias locales, claves de entorno, configuraciones del editor) al construir la imagen:

Crea un archivo llamado `.dockerignore` al lado de tu `Dockerfile`:

```text
.git
.gitignore
.env
node_modules/
__pycache__/
*.log
.vscode/

```

---

## 💡 8. El Sistema de Capas y Optimización de Caché

Cada instrucción en un `Dockerfile` crea una **capa de solo lectura**. Docker reutiliza las capas preconstruidas (_Build Cache_) si los archivos correspondientes no han cambiado.

> [!TIP]
>
> ### 🎯 Regla de Oro de la Caché
>
> Coloca las instrucciones que **rara vez cambian arriba** y las que **cambian constantemente abajo**:
>
> 1. `FROM` (Casi nunca cambia).
> 2. `WORKDIR`.
> 3. `COPY package.json` / `requirements.txt` (Las dependencias cambian raramente).
> 4. `RUN npm install` / `pip install` (Instalación pesada).
> 5. `COPY . .` (El código de la app cambia a diario).

Si modificas el código fuente, Docker **saltará la instalación de dependencias** y reconstruirá la imagen en menos de un segundo.

---

## ⚡ 9. Construcción Multietapa (_Multi-Stage Builds_)

Ideal para lenguajes compilados (Go, Java, Rust) o frameworks web (React, Angular, Vue). Permite usar una imagen pesada para **compilar** y luego copiar únicamente el resultado final a una imagen ligera para **producción**.

```dockerfile
# --- ETAPA 1: Compilación ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- ETAPA 2: Producción ---
FROM nginx:alpine
# Copiamos solo los archivos estáticos generados en la Etapa 1
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

```

_Resultado:_ Pasas de una imagen de desarrollo de **1 GB** a una de producción de solo **25 MB**.

---

## 🚨 10. Consejos Profesionales e Higiene de Seguridad

> [!WARNING]
>
> ### 🔒 Evita ejecutar procesos como Root
>
> Por defecto, los contenedores ejecutan sus procesos como usuario `root`. En entornos productivos, crea y cambia a un usuario no privilegiado:
>
> ```dockerfile
> RUN addgroup -S appgroup && adduser -S appuser -G appgroup
> USER appuser
>
> ```

> [!IMPORTANT]
>
> ### 🧹 Imágenes Ligeras y Limpieza de Caché
>
> - Prefiere imágenes base `-slim` o `-alpine` (ej. `python:3.11-slim`, `node:20-alpine`).
> - Limpia archivos temporales dentro del mismo comando `RUN`:
>
> ```dockerfile
> RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
>
> ```

```

```
