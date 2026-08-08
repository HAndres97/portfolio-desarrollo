````markdown
# 🦙 Guía Completa y Profesional de Ollama

Una referencia práctica para ejecutar, administrar e integrar Modelos de Lenguaje Grandes (LLMs) locales en tu propia máquina usando **Ollama**.

---

## 📌 1. ¿Qué es Ollama y por qué usarlo?

**Ollama** es una herramienta de código abierto (_open-source_) que permite empaquetar, ejecutar y gestionar modelos de lenguaje (como Llama 3, Mistral, Qwen, DeepSeek, Gemma, etc.) **directamente en tu entorno local**.

### 💡 Ventajas Principales

- **Privacidad Total (100% Local):** Tus datos, código y prompts nunca salen de tu máquina ni pasan por servidores de terceros.
- **Cero Costes de API:** No pagas por token ni dependes de suscripciones para experimentar o desarrollar.
- **Funcionamiento Offline:** Puedes trabajar y procesar información sin conexión a Internet.
- **Servidor API Compatible con OpenAI:** Levanta automáticamente un servidor HTTP local que facilita la integración con aplicaciones en Python, JavaScript o herramientas como VS Code/Warp.

---

## 📥 2. Instalación (Linux, macOS y Windows / WSL2)

### A) En Linux o WSL2 (Recomendado para desarrollo)

Ejecuta el script oficial de instalación en un solo paso:

```bash
curl -fsSL [https://ollama.com/install.sh](https://ollama.com/install.sh) | sh
```
````

### B) En Windows / macOS

1. Ve a la web oficial: [ollama.com/download](https://ollama.com/download)
2. Descarga el instalador ejecutables (`.exe` para Windows o `.dmg` para macOS).
3. Sigue el asistente de instalación convencional.

---

## 🏷️ 3. Modelos y Cuantizaciones (Versiones / Tags)

Al igual que Docker gestiona imágenes, Ollama gestiona modelos mediante la etiqueta **`nombre-modelo:tamaño`**.

### Modelos Populares Disponibles

| Modelo                  | Comando de Ejecución        | Ámbito de Uso Recomendado                        | RAM / VRAM Mínima |
| ----------------------- | --------------------------- | ------------------------------------------------ | ----------------- |
| **Llama 3.1 (8B)**      | `ollama run llama3.1`       | Uso general, razonamiento y conversación         | ~8 GB             |
| **Mistral (7B)**        | `ollama run mistral`        | Redacción, resúmenes y tarea general rápida      | ~8 GB             |
| **Qwen 2.5 Coder (7B)** | `ollama run qwen2.5-coder`  | Programación, refactorización y scripts          | ~8 GB             |
| **DeepSeek R1 (8B)**    | `ollama run deepseek-r1:8b` | Razonamiento lógico y resolución de problemas    | ~8 GB             |
| **Phi-3 Mini (3.8B)**   | `ollama run phi3`           | Ligerísimo; ideal para máquinas sin GPU dedicada | ~4 GB             |

> [!NOTE]
> **¿Qué significan las variantes 7B, 8B, 70B?**
> Indican los **miles de millones de parámetros** del modelo. A mayor número de parámetros, mayor precisión y capacidad de razonamiento, pero requerirá más memoria RAM/VRAM.

---

## 🛠️ 4. Guía de Comandos Esenciales de Ollama

### 1. Ejecutar y Descargar Modelos

```bash
# Descarga e inicia una sesión de chat interactiva en la terminal
ollama run llama3.1

# Solo descargar el modelo sin iniciar el chat
ollama pull llama3.1

```

### 2. Gestión de Modelos Locales

```bash
# Listar todos los modelos instalados localmente y su tamaño
ollama list

# Ver la información técnica y contexto de un modelo
ollama show llama3.1

# Copiar un modelo local con otro nombre
ollama cp llama3.1 mi-llama-custom

# Eliminar un modelo para liberar espacio en disco
ollama rm llama3.1

```

### 3. Control del Servidor Ollama

```bash
# Iniciar el servidor de Ollama manualmente (si no se ejecuta como servicio)
ollama serve

# Ver los modelos cargados actualmente en memoria RAM/VRAM
ollama ps

```

---

## 💡 5. Ejemplos Prácticos de Uso

### A) Uso Interactivo en Terminal

Una vez dentro del chat de `ollama run qwen2.5-coder`, puedes escribir tus preguntas directamente:

```text
>>> Escribe una función en Python para validar si un número es primo.

```

Para salir de la sesión interactiva escribe `/bypass`, `/exit` o pulsa `Ctrl + D`.

### B) Uso mediante API REST (Ejemplo cURL)

Ollama levanta por defecto una API local en el puerto `11434`. Puedes consultarla desde cualquier script o terminal:

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.1",
  "prompt": "¿Por qué el cielo es azul? Responde en una sola frase.",
  "stream": false
}'

```

### C) Uso en Python (Librería Oficial)

```bash
pip install ollama

```

```python
import ollama

response = ollama.chat(
    model="llama3.1",
    messages=[
        {"role": "user", "content": "Explica la diferencia entre Git y GitHub en 2 frases."}
    ]
)

print(response['message']['content'])

```

---

## 🎯 6. Creación de Modelos Personalizados (`Modelfile`)

Al igual que un `Dockerfile`, puedes crear un archivo llamado `Modelfile` para personalizar el comportamiento (System Prompt), la temperatura y los parámetros de un modelo.

### Ejemplo de `Modelfile`:

```dockerfile
FROM llama3.1

# Ajusta la temperatura (creatividad vs. precisión)
PARAMETER temperature 0.2

# Define el rol o personalidad del modelo
SYSTEM """
Eres un Asistente Senior de DevOps especialista en Linux, Bash y Python.
Tus respuestas deben ser concisas, profesionales y enfocadas en código limpio.
"""

```

### Comando para construir tu modelo personalizado:

```bash
ollama create devops-bot -f ./Modelfile
ollama run devops-bot

```

---

## 🚨 7. Consejos Profesionales e Integraciones Recomendadas

> [!TIP]
>
> ### 🔌 Integración con Editores (VS Code / Cursor / Neovim)
>
> Puedes conectar Ollama con extensiones como **Continue.dev** en VS Code para tener un copiloto de código 100% privado y gratuito en tu entorno de desarrollo.

> [!WARNING]
>
> ### 🧠 Gestión de Recursos (GPU vs. CPU)
>
> - Si cuentas con una tarjeta gráfica NVIDIA o Apple Silicon (M1/M2/M3/M4), Ollama la detectará automáticamente para acelerar la inferencia por hardware.
> - Si ejecutas Ollama solo en CPU, se recomienda usar modelos pequeños (de 3B a 8B de parámetros) para asegurar respuestas fluidas.

```

```
