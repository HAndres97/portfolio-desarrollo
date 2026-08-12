#!/bin/bash
contador=0
read -p "Escribe un numero : " numero
while [[ $numero -ne 0  ]]
do
	contador=$((contador + 1))
	read -p "Escribe un numero :" numero
done

echo "Se han escrito un total de $contador numeros "

