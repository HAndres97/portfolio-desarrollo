import os
from weasyprint import HTML

html_content = """<!DOCTYPE html>

<html lang="es">
<head>
<meta charset="UTF-8">
<style>
    @page {
        size: A4;
        margin: 18mm 15mm 20mm 15mm;
        background-color: #0f172a;
        @bottom-right {
            content: "Página " counter(page) " de " counter(pages);
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 8pt;
            color: #64748b;
        }
        @bottom-left {
            content: "Guía Profesional de Bash & Linux Shell";
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 8pt;
            color: #64748b;
        }
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        font-size: 9.5pt;
        line-height: 1.5;
        color: #cbd5e1;
        background-color: #0f172a;
        margin: 0;
        padding: 0;
    }

    /* Header Banner */
    .header-banner {
        background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        border: 1px solid #334155;
        border-left: 5px solid #38bdf8;
        border-radius: 8px;
        padding: 20px 24px;
        margin-bottom: 24px;
    }

    .header-title {
        font-size: 20pt;
        font-weight: 700;
        color: #f8fafc;
        margin: 0 0 6px 0;
        letter-spacing: -0.5px;
    }

    .header-subtitle {
        font-size: 10.5pt;
        color: #38bdf8;
        margin: 0;
        font-weight: 500;
    }

    .header-meta {
        font-size: 8.5pt;
        color: #94a3b8;
        margin-top: 10px;
    }

    /* Section Headings */
    h2 {
        font-size: 13pt;
        font-weight: 700;
        color: #f1f5f9;
        border-bottom: 1px solid #334155;
        padding-bottom: 6px;
        margin-top: 22px;
        margin-bottom: 12px;
        page-break-after: avoid;
    }

    h3 {
        font-size: 10.5pt;
        font-weight: 600;
        color: #38bdf8;
        margin-top: 14px;
        margin-bottom: 6px;
        page-break-after: avoid;
    }

    p {
        margin-top: 0;
        margin-bottom: 10px;
        color: #cbd5e1;
    }

    /* Code Blocks & Inline Code */
    code {
        font-family: "JetBrains Mono", "Fira Code", "Consolas", "Courier New", monospace;
        font-size: 8.5pt;
        background-color: #1e293b;
        color: #38bdf8;
        padding: 2px 5px;
        border-radius: 4px;
        border: 1px solid #334155;
    }

    pre {
        font-family: "JetBrains Mono", "Fira Code", "Consolas", "Courier New", monospace;
        font-size: 8.5pt;
        background-color: #1e293b;
        color: #e2e8f0;
        padding: 12px 15px;
        border-radius: 6px;
        border: 1px solid #334155;
        overflow-x: auto;
        white-space: pre-wrap;
        word-wrap: break-word;
        margin-top: 6px;
        margin-bottom: 12px;
        page-break-inside: avoid;
    }

    .cmd-comment { color: #64748b; font-style: italic; }
    .cmd-kw { color: #f43f5e; font-weight: bold; }
    .cmd-str { color: #34d399; }
    .cmd-var { color: #fbbf24; }
    .cmd-opt { color: #38bdf8; }

    /* Tables */
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 8px;
        margin-bottom: 14px;
        font-size: 8.5pt;
        page-break-inside: avoid;
    }

    th {
        background-color: #1e293b;
        color: #f8fafc;
        text-align: left;
        padding: 8px 10px;
        font-weight: 600;
        border: 1px solid #334155;
    }

    td {
        padding: 7px 10px;
        border: 1px solid #334155;
        color: #cbd5e1;
        vertical-align: top;
    }

    tr:nth-child(even) td {
        background-color: #162032;
    }

    /* Callouts & Info Boxes */
    .callout {
        background-color: #162032;
        border: 1px solid #1e293b;
        border-left: 4px solid #38bdf8;
        border-radius: 6px;
        padding: 10px 14px;
        margin: 10px 0 14px 0;
        page-break-inside: avoid;
    }

    .callout-warning {
        border-left-color: #f59e0b;
        background-color: #1c1917;
        border-color: #292524;
    }

    .callout-tip {
        border-left-color: #10b981;
        background-color: #062016;
        border-color: #064e3b;
    }

    .callout-title {
        font-weight: 700;
        font-size: 9pt;
        margin-bottom: 4px;
        color: #f8fafc;
    }

    /* Lists */
    ul, ol {
        margin-top: 0;
        margin-bottom: 10px;
        padding-left: 20px;
    }

    li {
        margin-bottom: 4px;
    }

    .analogia-grid {
        display: table;
        width: 100%;
        table-layout: fixed;
        margin: 10px 0;
    }

    .analogia-col {
        display: table-cell;
        background-color: #1e293b;
        border: 1px solid #334155;
        padding: 10px;
        border-radius: 6px;
        text-align: center;
    }

</style>
</head>
<body>

    <div class="header-banner">
        <div class="header-title">Manual Profesional de Bash & Shell Scripting</div>
        <div class="header-subtitle">Desde Fundamentos de Terminal hasta Automatización Avanzada en Linux</div>
        <div class="header-meta">Autor original: Apuntes de Estudio | Edición y Ampliación Técnica Profesional</div>
    </div>

    <h2>1. Conceptos Fundamentales: Terminal, Shell y Bash</h2>
    <p>Para trabajar de manera efectiva en entornos de línea de comandos, es vital comprender la separación de responsabilidades entre la interfaz, el intérprete y el lenguaje utilizado.</p>

    <table>
        <thead>
            <tr>
                <th>Componente</th>
                <th>Definición y Rol Técnico</th>
                <th>Ejemplos Comunes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>La Terminal</strong> (El Entorno/Monitor)</td>
                <td>Interfaz gráfica o emulador de consola que captura la entrada del usuario (teclado) y dibuja la salida (pantalla). No procesa lógica por sí sola.</td>
                <td>Warp, Windows Terminal, Alacritty, GNOME Terminal, iTerm2.</td>
            </tr>
            <tr>
                <td><strong>La Shell</strong> (El Intérprete/Traductor)</td>
                <td>El programa subyacente que recibe los comandos de texto de la terminal, interactúa con el Kernel del Sistema Operativo para ejecutarlos y devuelve la respuesta.</td>
                <td>Sh, Bash, Zsh, Fish, PowerShell.</td>
            </tr>
            <tr>
                <td><strong>Bash</strong> (El Lenguaje/Estándar)</td>
                <td><em>Bourne Again SHell</em>. Es un modelo o implementación específica de Shell, altamente compatible con la norma POSIX y el estándar <em>de facto</em> en distribuciones Linux y servidores productivos.</td>
                <td>Bash v4/v5 (Estándar en Ubuntu, Debian, RHEL).</td>
            </tr>
        </tbody>
    </table>

    <div class="callout callout-tip">
        <div class="callout-title">💡 La Analogía del Restaurante</div>
        <p style="margin: 0;">Imagina un restaurante: La <strong>Terminal</strong> es la mesa donde te sientas (el punto de contacto). La <strong>Shell</strong> es el camarero (quien toma tu pedido y lo lleva a la cocina/kernel). <strong>Bash</strong> es el idioma específico (español, inglés) en el que está escrito el menú y hablas con el camarero.</p>
    </div>

    <h3>Entornos de Trabajo Recomendados</h3>
    <ul>
        <li><strong>WSL2 (Windows Subsystem for Linux):</strong> Capa de virtualización ligera en Windows que permite ejecutar un Kernel de Linux real (ej. Ubuntu) directamente sin el consumo de memoria de una máquina virtual tradicional.</li>
        <li><strong>Warp Terminal:</strong> Emulador de terminal moderno impulsado por IA con autocompletado avanzado, selección estilo IDE y bloc de comandos.</li>
        <li><strong>Rutas de Acceso en WSL:</strong> Tu usuario de Linux reside en <code>/home/usuario</code>, mientras que tus discos de Windows se montan bajo <code>/mnt/c/Users/TuUsuario/</code>.</li>
    </ul>

    <h2>2. Anatomía de un Comando y Comandos Básicos</h2>
    <p>La estructura general de una instrucción en la línea de comandos sigue la sintaxis:</p>
    <pre><code><span class="cmd-kw">comando</span> [<span class="cmd-opt">opciones</span>] [<span class="cmd-var">argumentos</span>]

<span class="cmd-comment"># Ejemplo:</span>
<span class="cmd-kw">ls</span> <span class="cmd-opt">-lh</span> <span class="cmd-var">/var/log</span></code></pre>
<ul>
<li><strong>Comando:</strong> El programa ejecutable o función interna de la Shell (ej. <code>ls</code>, <code>grep</code>).</li>
<li><strong>Opciones (Flags):</strong> Modifican el comportamiento del comando. Suelen iniciar con un guion corto (<code>-l</code>) o doble guion (<code>--long</code>).</li>
<li><strong>Argumentos:</strong> Los datos sobre los cuales opera el comando (ficheros, directorios, cadenas).</li>
</ul>

    <h3>Comandos Esenciales de Navegación e Información</h3>
    <pre><code><span class="cmd-kw">whoami</span>       <span class="cmd-comment"># Muestra el nombre del usuario actual.</span>

<span class="cmd-kw">pwd</span> <span class="cmd-comment"># Print Working Directory: muestra la ruta absoluta actual.</span>
<span class="cmd-kw">hostname</span> <span class="cmd-comment"># Muestra el nombre del equipo/servidor en la red.</span>
<span class="cmd-kw">uname</span> <span class="cmd-opt">-a</span> <span class="cmd-comment"># Muestra información detallada del Kernel de Linux.</span>
<span class="cmd-kw">uptime</span> <span class="cmd-comment"># Tiempo que el sistema lleva encendido y carga media de CPU.</span>
<span class="cmd-kw">date</span> <span class="cmd-comment"># Muestra o establece la fecha y hora del sistema.</span>
<span class="cmd-kw">cal</span> <span class="cmd-comment"># Despliega un calendario interactivo en consola.</span>
<span class="cmd-kw">clear</span> <span class="cmd-comment"># Limpia la pantalla de la terminal (Shortcut: Ctrl + L).</span></code></pre>

    <h3>Uso Avanzado de <code>ls</code> (Listado de Archivos)</h3>
    <pre><code><span class="cmd-kw">ls</span>           <span class="cmd-comment"># Listado simple.</span>

<span class="cmd-kw">ls</span> <span class="cmd-opt">-l</span> <span class="cmd-comment"># Formato largo: permisos, propietarios, tamaño y fecha.</span>
<span class="cmd-kw">ls</span> <span class="cmd-opt">-la</span> <span class="cmd-comment"># Muestra también archivos ocultos (los que inician con punto .).</span>
<span class="cmd-kw">ls</span> <span class="cmd-opt">-lh</span> <span class="cmd-comment"># "Human Readable": muestra tamaños en KB, MB o GB.</span>
<span class="cmd-kw">ls</span> <span class="cmd-opt">-lt</span> <span class="cmd-comment"># Ordena los archivos por fecha de última modificación.</span></code></pre>

    <h3>Obtención de Ayuda y Documentación</h3>
    <ul>
        <li><code>man <comando></code>: Abre el manual oficial POSIX completo (ej. <code>man ls</code>). Navega con flechas y sal con <code>q</code>.</li>
        <li><code><comando> --help</code>: Muestra una ayuda rápida con opciones válidas. Ideal para binarios modernos (ej. <code>python3 --help</code>).</li>
    </ul>

    <h2>3. Estructura de Archivos en Linux y Manipulación</h2>
    <p>Linux sigue la norma FHS (<em>Filesystem Hierarchy Standard</em>), donde todo cuelga de la raíz <code>/</code>.</p>

    <table>
        <thead>
            <tr>
                <th>Directorio</th>
                <th>Propósito Principal</th>
            </tr>
        </thead>
        <tbody>
            <tr><td><code>/</code> (Raíz)</td><td>El nodo principal del cual dependen todos los subdirectorios y discos montados.</td></tr>
            <tr><td><code>/home</code></td><td>Carpetas personales de los usuarios del sistema (ej. <code>/home/andres/</code>).</td></tr>
            <tr><td><code>/etc</code></td><td>Archivos de configuración globales del sistema operativo y aplicaciones.</td></tr>
            <tr><td><code>/bin</code> / <code>/usr/bin</code></td><td>Ejecutables e hiper-comandos esenciales para todos los usuarios.</td></tr>
            <tr><td><code>/var</code></td><td>Datos variables: logs del sistema (<code>/var/log</code>), bases de datos y colas.</td></tr>
            <tr><td><code>/tmp</code></td><td>Archivos temporales borrados automáticamente al reiniciar el sistema.</td></tr>
        </tbody>
    </table>

    <h3>Manipulación de Ficheros y Directorios</h3>
    <pre><code><span class="cmd-comment"># Creación y Eliminación</span>

<span class="cmd-kw">mkdir</span> <span class="cmd-opt">-p</span> proyectos/python/src <span class="cmd-comment"># Crea directorios anidados recursivamente.</span>
<span class="cmd-kw">touch</span> index.html <span class="cmd-comment"># Crea un archivo vacío o actualiza su timestamp.</span>
<span class="cmd-kw">rmdir</span> carpeta_vacia <span class="cmd-comment"># Elimina únicamente directorios sin contenido.</span>

<span class="cmd-comment"># Copiado Profesional (cp)</span>
<span class="cmd-kw">cp</span> archivo.txt copia.txt <span class="cmd-comment"># Copia simple de un archivo.</span>
<span class="cmd-kw">cp</span> <span class="cmd-opt">-r</span> carpeta/ nueva_carpeta/ <span class="cmd-comment"># Copia recursiva (crea nuevos timestamps/permisos).</span>
<span class="cmd-kw">cp</span> <span class="cmd-opt">-a</span> carpeta/ clon_exacto/ <span class="cmd-comment"># Copia en modo ARCHIVO: preserva permisos, propietario y timestamps originales.</span>

<span class="cmd-comment"># Mover y Renombrar (mv)</span>
<span class="cmd-kw">mv</span> notas.txt /tmp/ <span class="cmd-comment"># Mueve un archivo a otro directorio.</span>
<span class="cmd-kw">mv</span> viejo.txt nuevo.txt <span class="cmd-comment"># Renombra un archivo en el mismo directorio.</span>

<span class="cmd-comment"># Eliminación Segura y Forzada (rm)</span>
<span class="cmd-kw">rm</span> archivo.txt <span class="cmd-comment"># Borra un archivo regular.</span>
<span class="cmd-kw">rm</span> <span class="cmd-opt">-ri</span> carpeta_sensible/ <span class="cmd-comment"># Interactivo: solicita confirmación por cada archivo.</span>
<span class="cmd-kw">rm</span> <span class="cmd-opt">-rf</span> carpeta_eliminar/ <span class="cmd-comment"># Recursivo y forzado. ¡Usar con extrema precaución!</span></code></pre>

    <h3>Comodines (Wildcards)</h3>
    <ul>
        <li><code>*</code> (Asterisco): Coincide con 0 o más caracteres. Ej: <code>rm *.log</code> borra todos los logs.</li>
        <li><code>?</code> (Interrogación): Coincide con exactamente 1 carácter. Ej: <code>ls foto_??.jpg</code> busca <code>foto_01.jpg</code>.</li>
        <li><code>[ ]</code> (Corchetes): Coincide con rangos o conjuntos. Ej: <code>ls doc_[a-z].txt</code>.</li>
    </ul>

    <h2>4. Búsqueda y Filtrado Avanzado: <code>find</code>, <code>grep</code> y Visualización</h2>

    <h3>Lectura de Archivos</h3>
    <ul>
        <li><code>cat archivo.txt</code>: Imprime todo el archivo de golpe en pantalla (ideal para archivos pequeños).</li>
        <li><code>less archivo.log</code>: Abre un visor paginado. Navega con flechas/espacio y busca con <code>/patrón</code>.</li>
        <li><code>head -n 20 archivo.txt</code>: Muestra las primeras 20 líneas.</li>
        <li><code>tail -n 20 archivo.txt</code>: Muestra las últimas 20 líneas.</li>
        <li><code>tail -f /var/log/syslog</code>: **Modo seguimiento en tiempo real**. Muestra nuevas líneas a medida que se escriben en el log.</li>
    </ul>

    <h3>El Comando <code>find</code> (Búsqueda en Sistema de Archivos)</h3>
    <pre><code><span class="cmd-comment"># Buscar por nombre (insensible a mayúsculas con -iname)</span>

<span class="cmd-kw">find</span> . <span class="cmd-opt">-iname</span> <span class="cmd-str">"\*.py"</span>

<span class="cmd-comment"># Filtrar por tipo (f = archivo, d = directorio) y tamaño</span>
<span class="cmd-kw">find</span> /var/log <span class="cmd-opt">-type</span> f <span class="cmd-opt">-size</span> +50M

<span class="cmd-comment"># Búsqueda con ejecución automática (-exec)</span>
<span class="cmd-comment"># Busca todos los .tmp y los elimina. {} recibe cada archivo encontrado y \; finaliza el comando.</span>
<span class="cmd-kw">find</span> . <span class="cmd-opt">-type</span> f <span class="cmd-opt">-name</span> <span class="cmd-str">"\*.tmp"</span> <span class="cmd-opt">-exec</span> <span class="cmd-kw">rm</span> {} \;</code></pre>

    <h3>El Comando <code>grep</code> (Filtro de Contenido por Expresión Regular)</h3>
    <pre><code><span class="cmd-kw">grep</span> <span class="cmd-str">"ERROR"</span> /var/log/app.log         <span class="cmd-comment"># Muestra líneas que contienen "ERROR".</span>

<span class="cmd-kw">grep</span> <span class="cmd-opt">-i</span> <span class="cmd-str">"error"</span> app.log <span class="cmd-comment"># Insensible a mayúsculas/minúsculas.</span>
<span class="cmd-kw">grep</span> <span class="cmd-opt">-v</span> <span class="cmd-str">"DEBUG"</span> app.log <span class="cmd-comment"># Invertir búsqueda: muestra líneas que NO contienen DEBUG.</span>
<span class="cmd-kw">grep</span> <span class="cmd-opt">-rn</span> <span class="cmd-str">"DB_PASSWORD"</span> /etc/ <span class="cmd-comment"># Recursivo (-r) indicando número de línea (-n).</span></code></pre>

    <h3>Redirecciones y Tuberías (Pipes)</h3>
    <table>
        <thead>
            <tr>
                <th>Operador</th>
                <th>Nombre</th>
                <th>Función</th>
            </tr>
        </thead>
        <tbody>
            <tr><td><code>&gt;</code></td><td>Redirección de Salida (Sobrescribir)</td><td>Envía la salida de un comando a un archivo, borrando el contenido previo.</td></tr>
            <tr><td><code>&gt;&gt;</code></td><td>Redirección de Salida (Anexar)</td><td>Añade la salida al final del archivo sin borrar lo existente.</td></tr>
            <tr><td><code>&lt;</code></td><td>Redirección de Entrada</td><td>Usa el contenido de un archivo como entrada para un comando.</td></tr>
            <tr><td><code>2&gt;</code></td><td>Redirección de Errores (STDERR)</td><td>Redirige únicamente los mensajes de error a un archivo.</td></tr>
            <tr><td><code>|</code></td><td>Tubería (Pipe)</td><td>Conecta la salida de un comando directamente con la entrada de otro.</td></tr>
        </tbody>
    </table>

    <pre><code><span class="cmd-comment"># Ejemplo Combinado Avanzado:</span>

<span class="cmd-kw">ps</span> aux | <span class="cmd-kw">grep</span> python | <span class="cmd-kw">wc</span> <span class="cmd-opt">-l</span> &gt; procesos_python.txt
<span class="cmd-comment"># Cuenta cuántos procesos de Python se están ejecutando y guarda la cifra en un archivo.</span></code></pre>

    <h2>5. Editores de Texto de Consola: Nano, Vim y Neovim</h2>

    <h3>Nano: El Editor Directo</h3>
    <p>Indicado para ediciones rápidas. La tecla <code>^</code> representa <code>Ctrl</code>.</p>
    <ul>
        <li><code>Ctrl + O</code>: Guardar el archivo (Confirmar con Enter).</li>
        <li><code>Ctrl + X</code>: Salir del editor.</li>
        <li><code>Ctrl + W</code>: Buscar texto dentro del fichero.</li>
        <li><code>Ctrl + K</code> / <code>Ctrl + U</code>: Cortar línea / Pegar línea.</li>
    </ul>

    <h3>Vim / Neovim: El Editor Basado en Modos</h3>
    <div class="callout callout-warning">
        <div class="callout-title">⚠️ Regla Fundamental de Vim</div>
        <p style="margin: 0;">Vim no permite escribir al abrirse. Inicia en <strong>Modo Normal</strong>. Presiona <code>i</code> para pasar al <strong>Modo Insertar</strong>. Para volver al Modo Normal, presiona siempre <code>Esc</code>.</p>
    </div>

    <table>
        <thead>
            <tr>
                <th>Modo</th>
                <th>Tecla de Acceso</th>
                <th>Propósito / Comandos Esenciales</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Normal</strong></td>
                <td><code>Esc</code></td>
                <td>Navegación y comandos rápidos: <code>dd</code> (borrar línea), <code>yy</code> (copiar línea), <code>p</code> (pegar), <code>u</code> (deshacer), <code>Ctrl+r</code> (rehacer). Movimiento: <code>h,j,k,l</code>, <code>0</code> (inicio línea), <code>$</code> (fin línea), <code>gg</code> (inicio archivo), <code>G</code> (fin archivo).</td>
            </tr>
            <tr>
                <td><strong>Insertar</strong></td>
                <td><code>i</code> o <code>a</code></td>
                <td>Escritura convencional de texto.</td>
            </tr>
            <tr>
                <td><strong>Comando/Ex</strong></td>
                <td><code>:</code> desde Normal</td>
                <td><code>:w</code> (guardar), <code>:q</code> (salir), <code>:wq</code> (guardar y salir), <code>:q!</code> (forzar salida sin guardar).</td>
            </tr>
        </tbody>
    </table>

    <h3>Neovim y el concepto de Fork</h3>
    <p><strong>Neovim</strong> es un <em>fork</em> de Vim creado en 2014. Un <strong>fork</strong> en software libre ocurre cuando un grupo de desarrolladores toma una copia del código fuente original para continuar su desarrollo de forma independiente, buscando resolver limitaciones de arquitectura, agregar soporte para lenguajes modernos como Lua o ejecutar tareas de forma asíncrona.</p>

    <h2>6. Permisos del Sistema y Administración (chmod, umask, sudo)</h2>
    <p>Cada archivo en Linux posee una cadena de 10 caracteres que define su tipo y permisos para tres categorías de usuarios: Propietario (<code>u</code>), Grupo (<code>g</code>) y Otros (<code>o</code>).</p>

    <pre><code><span class="cmd-comment"># Ejemplo de ls -l:</span>

<span class="cmd-str">-rwxr-xr--</span> 1 andres devteam 4096 Aug 7 10:00 script.sh
<span class="cmd-comment">│└──┬──┘└──┬──┘└──┬──┘
│ │ │ └── Permisos de OTROS (o): r-- (Solo lectura)
│ │ └───────── Permisos de GRUPO (g): r-x (Lectura y ejecución)
│ └──────────────── Permisos de PROPIETARIO (u): rwx (Lectura, escritura y ejecución)
└──────────────────── Tipo de archivo (- = regular, d = directorio, l = enlace)</span></code></pre>

    <h3>Notación Octal de Permisos</h3>
    <ul>
        <li><code>r</code> (Lectura) = <strong>4</strong> | <code>w</code> (Escritura) = <strong>2</strong> | <code>x</code> (Ejecución) = <strong>1</strong></li>
        <li><strong>755</strong> = <code>rwxr-xr-x</code> (Propietario todo; Grupo y Otros lectura/ejecución). Ideal para scripts y directorios.</li>
        <li><strong>644</strong> = <code>rw-r--r--</code> (Propietario lectura/escritura; resto solo lectura). Ideal para archivos planos.</li>
    </ul>

    <pre><code><span class="cmd-kw">chmod</span> +x script.sh          <span class="cmd-comment"># Añade permiso de ejecución a todos.</span>

<span class="cmd-kw">chmod</span> 755 script.sh <span class="cmd-comment"># Aplica permisos 755 explícitamente.</span>
<span class="cmd-kw">chmod</span> <span class="cmd-opt">-R</span> 644 /var/www/html <span class="cmd-comment"># Aplica recursivamente a toda una carpeta.</span></code></pre>

    <h3>Máscara de Permisos (<code>umask</code>)</h3>
    <p>La <code>umask</code> define qué permisos se <strong>restan</strong> por defecto al crear nuevos archivos o carpetas. Los permisos base de partida son <code>666</code> para archivos y <code>777</code> para directorios.</p>
    <ul>
        <li>Si <code>umask</code> vale <code>0022</code>:
            <ul>
                <li>Nuevo directorio: <code>777 - 022 = 755</code> (<code>rwxr-xr-x</code>).</li>
                <li>Nuevo archivo: <code>666 - 022 = 644</code> (<code>rw-r--r--</code>).</li>
            </ul>
        </li>
    </ul>

    <h2>7. Procesos, Control de Espacio y Trabajos (Jobs)</h2>

    <h3>Gestión de Espacio en Disco</h3>
    <ul>
        <li><code>df -h</code>: **Disk Free**. Muestra la capacidad total y espacio disponible en todos los puntos de montaje montados en formato legible (GB/MB).</li>
        <li><code>du -sh <directorio></code>: **Disk Usage**. Muestra el tamaño total consumido por una carpeta.
            <pre><code><span class="cmd-kw">du</span> <span class="cmd-opt">-sh</span> * | <span class="cmd-kw">sort</span> <span class="cmd-opt">-hr</span>  <span class="cmd-comment"># Muestra el tamaño de cada elemento ordenado de mayor a menor.</span></code></pre>
        </li>
    </ul>

    <h3>Gestión de Procesos y Trabajos</h3>
    <pre><code><span class="cmd-kw">ps</span> aux                   <span class="cmd-comment"># Lista detallada de todos los procesos del sistema.</span>

<span class="cmd-kw">top</span> <span class="cmd-comment"># Monitor interactivo en tiempo real (M = memoria, P = CPU, q = salir).</span>
<span class="cmd-kw">kill</span> <span class="cmd-opt">-9</span> &lt;PID&gt; <span class="cmd-comment"># Envía la señal SIGKILL para terminar de forma forzada un proceso por su ID.</span></code></pre>

    <p><strong>Manejo de Jobs (Segundo y Primer Plano):</strong></p>
    <ul>
        <li><code>sleep 100 &</code>: El símbolo <code>&</code> envía el comando a ejecutarse en segundo plano (Background).</li>
        <li><code>Ctrl + Z</code>: Pausa la ejecución del comando actual en consola y lo coloca en estado <em>Stopped</em>.</li>
        <li><code>jobs</code>: Lista los trabajos activos asignados a la sesión de terminal actual.</li>
        <li><code>bg %1</code>: Reanuda el trabajo nº 1 en segundo plano.</li>
        <li><code>fg %1</code>: Trae el trabajo nº 1 al primer plano (Foreground).</li>
    </ul>

    <h2>8. Programación de Scripts en Bash (Shell Scripting)</h2>
    <p>Un script es un fichero ejecutable que contiene instrucciones de Bash e incorpora estructuras de control lógicas.</p>

    <h3>Estructura Inicial y Shebang</h3>
    <p>La primera línea obligatoria debe incluir el <strong>Shebang</strong> (<code>#!/bin/bash</code>), que especifica la ruta del intérprete que ejecutará el código.</p>

    <pre><code><span class="cmd-kw">#!/bin/bash</span>

<span class="cmd-comment"># Script interactivo de ejemplo</span>

<span class="cmd-kw">read</span> <span class="cmd-opt">-p</span> <span class="cmd-str">"Introduce tu usuario: "</span> nombre_usuario
<span class="cmd-kw">read</span> <span class="cmd-opt">-s -p</span> <span class="cmd-str">"Introduce clave: "</span> password <span class="cmd-comment"># -s oculta la escritura</span>
<span class="cmd-kw">echo</span> <span class="cmd-str">""</span>
<span class="cmd-kw">echo</span> <span class="cmd-str">"Bienvenido, $nombre_usuario"</span></code></pre>

    <h3>Parámetros Posicionales Especiales</h3>
    <ul>
        <li><code>$0</code>: Nombre del script en ejecución.</li>
        <li><code>$1, $2, $3...</code>: Argumentos pasados al script desde la línea de comandos (ej. <code>./script.sh arg1 arg2</code>).</li>
        <li><code>$#</code>: Número total de argumentos recibidos.</li>
        <li><code>$@</code>: Lista de todos los argumentos como un conjunto.</li>
        <li><code>$?</code>: Código de estado de retorno de la última orden ejecutada (0 = éxito, &gt;0 = error).</li>
    </ul>

    <h3>Estructuras Condicionales y Comparadores</h3>
    <p>Es muy recomendable utilizar la sintaxis moderna de corchetes dobles <code>[[ ... ]]</code> por ser más segura y flexible.</p>

    <table>
        <thead>
            <tr>
                <th>Comparador Numérico</th>
                <th>Comparador de Texto</th>
                <th>Significado</th>
            </tr>
        </thead>
        <tbody>
            <tr><td><code>-eq</code></td><td><code>==</code></td><td>Igual a (Equal)</td></tr>
            <tr><td><code>-ne</code></td><td><code>!=</code></td><td>No es igual / Distinto (Not Equal)</td></tr>
            <tr><td><code>-gt</code></td><td>N/A</td><td>Mayor que (Greater Than)</td></tr>
            <tr><td><code>-ge</code></td><td>N/A</td><td>Mayor o igual que (Greater or Equal)</td></tr>
            <tr><td><code>-lt</code></td><td>N/A</td><td>Menor que (Less Than)</td></tr>
            <tr><td><code>-le</code></td><td>N/A</td><td>Menor o igual que (Less or Equal)</td></tr>
        </tbody>
    </table>

    <p><strong>Evaluación de Archivos y Operadores Lógicos:</strong></p>
    <ul>
        <li><code>[[ -f "$ruta" ]]</code>: Verdadero si la ruta existe y es un archivo regular.</li>
        <li><code>[[ -d "$ruta" ]]</code>: Verdadero si existe y es un directorio.</li>
        <li><code>[[ -x "$ruta" ]]</code>: Verdadero si el archivo existe y tiene permiso de ejecución.</li>
        <li><code>[[ -z "$texto" ]]</code>: Verdadero si la cadena está vacía.</li>
        <li><code>[[ -n "$texto" ]]</code>: Verdadero si la cadena NO está vacía.</li>
        <li>Operadores: <code>&&</code> (AND), <code>||</code> (OR), <code>!</code> (NOT).</li>
    </ul>

    <pre><code><span class="cmd-kw">if</span> [[ <span class="cmd-var">$edad</span> <span class="cmd-opt">-ge</span> 18 && <span class="cmd-var">$licencia</span> == <span class="cmd-str">"si"</span> ]]; <span class="cmd-kw">then</span>
    <span class="cmd-kw">echo</span> <span class="cmd-str">"Acceso autorizado."</span>

<span class="cmd-kw">elif</span> [[! <span class="cmd-opt">-f</span> <span class="cmd-str">"/etc/config.conf"</span>]]; <span class="cmd-kw">then</span>
<span class="cmd-kw">echo</span> <span class="cmd-str">"Falta archivo de configuración."</span>
<span class="cmd-kw">else</span>
<span class="cmd-kw">echo</span> <span class="cmd-str">"Acceso denegado."</span>
<span class="cmd-kw">fi</span></code></pre>

    <h3>Bucles (For, While, Until)</h3>
    <pre><code><span class="cmd-comment"># Bucle FOR recorriendo un rango</span>

<span class="cmd-kw">for</span> i <span class="cmd-kw">in</span> {1..5}; <span class="cmd-kw">do</span>
<span class="cmd-kw">echo</span> <span class="cmd-str">"Iteración $i"</span>
<span class="cmd-kw">done</span>

<span class="cmd-comment"># Bucle WHILE (mientras se cumpla la condición)</span>
contador=1
<span class="cmd-kw">while</span> [[<span class="cmd-var">$contador</span> <span class="cmd-opt">-le</span> 3]]; <span class="cmd-kw">do</span>
<span class="cmd-kw">echo</span> <span class="cmd-str">"Contador: $contador"</span>
    contador=$((contador + 1))
<span class="cmd-kw">done</span></code></pre>

    <h3>Funciones Profesionales en Bash</h3>
    <p>Aplica siempre la palabra clave <code>local</code> para evitar contaminación de ámbito global.</p>
    <pre><code><span class="cmd-kw">calcular_total()</span> {
    <span class="cmd-kw">local</span> precio=<span class="cmd-var">$1</span>
    <span class="cmd-kw">local</span> impuesto=<span class="cmd-var">$2</span>
    <span class="cmd-kw">local</span> resultado=$((precio + impuesto))

    <span class="cmd-kw">echo</span> <span class="cmd-var">$resultado</span>  <span class="cmd-comment"># Devuelve datos por salida estándar</span>

}

<span class="cmd-comment"># Captura de la salida de la función:</span>
total_pagar=$(calcular_total 100 21)
<span class="cmd-kw">echo</span> <span class="cmd-str">"Total a pagar: $total_pagar"</span></code></pre>

    <h2>9. Automatización con Tareas Programadas (Cron Jobs)</h2>
    <p>El Demonio <code>crond</code> ejecuta tareas desatendidas basándose en las especificaciones del archivo <code>crontab</code>.</p>
    <pre><code><span class="cmd-kw">crontab -e</span>  <span class="cmd-comment"># Edita las tareas del usuario actual.</span>

<span class="cmd-kw">crontab -l</span> <span class="cmd-comment"># Muestra la lista de tareas activas.</span></code></pre>

    <h3>Sintaxis del Crontab (Las 5 Estrellas)</h3>
    <pre><code>*   *   *   *   *   /ruta/absoluta/al/script.sh

│ │ │ │ │
│ │ │ │ └── Día de la Semana (0-6, 0=Domingo)
│ │ │ └────── Mes (1-12)
│ │ └────────── Día del Mes (1-31)
│ └────────────── Hora (0-23)
└────────────────── Minuto (0-59)</code></pre>

    <div class="callout callout-warning">
        <div class="callout-title">⚠️ Trampas Clave en Cron Jobs</div>
        <ol style="margin: 0; padding-left: 18px;">
            <li><strong>PATH Reducido:</strong> Cron no carga tus variables de entorno interactivas. **Usa siempre rutas absolutas** (ej. <code>/usr/bin/python3</code> en lugar de <code>python3</code>).</li>
            <li><strong>Ausencia de Terminal:</strong> Redirige la salida estándar y errores a un archivo de registro para poder auditarlo:
                <pre style="margin-top: 4px; margin-bottom: 0;"><code>0 3 * * * /home/user/backup.sh >> /home/user/cron.log 2>&1</code></pre>
            </li>
        </ol>
    </div>

</body>
</html>
"""

html_path = "apuntes_bash.html"
pdf_path = "Guia_Profesional_Bash_Shell.pdf"

with open(html_path, "w", encoding="utf-8") as f:
f.write(html_content)

HTML(filename=html_path).write_pdf(pdf_path)
print(f"PDF generado con éxito: {pdf_path}")
