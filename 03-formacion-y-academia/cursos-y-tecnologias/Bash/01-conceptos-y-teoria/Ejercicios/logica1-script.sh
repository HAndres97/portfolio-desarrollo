#!/bin/bash
read -p "Dame un numero :" numero
if [ $numero -gt 0 ]; then
	echo "Es un numero positivo"
elif [ $numero -lt 0  ]; then
	echo "Es un numero negativo"
elif [ $numero -eq 0 ]; then
	echo "Tu numero es 0"
fi

