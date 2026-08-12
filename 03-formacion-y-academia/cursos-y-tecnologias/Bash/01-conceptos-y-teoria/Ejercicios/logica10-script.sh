#!/bin/bash

#===================================
# Autor : Tu Nombre / Usuario
# Fecha : 2026-08-01
# Descripcion : Script de prueba que recorre el directorio actual, y lista
# 		todos los archivos con extension .sh utilizando un bucle for.
#===================================
echo "Buscando archivos .sh en el directorio actual...."

# Usamos el comodín *.sh para filtrar solo los archivos que terminan en esa extension
#
for archivo in *.sh
do
	if [[ -f "$archivo" ]]; then
		echo "Archivo encontrado: $archivo"
	else
		echo "No se encuentran archivos .sh en esta carpeta"
	fi
done


