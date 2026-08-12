#!/bin/bash

# Para revisiones mas extensas
#
cp file.txt ../Course
if [ $? -ne 0 ]; then
	echo "Erros al copiar el archivo"
fi

# Control de errores rapido

cp file.txt ../Course || echo "Otra vez se ha producido un error"

cp loops-script.sh ../Carpeta && echo "No se ha producido un error"

