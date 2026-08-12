#!/bin/bash
num=20

if [ $num -ge 10 ]; then
	echo "Numero mayor o igual que 10"
elif [ $num -eq 0 ]; then
	echo "Numero igual a 0"
else
	echo "Es menor"
fi

# Ahora vamos usar Case

read -p "Elige una opcion (1/2/3): " option
case $option in
	1) echo "Eligiste 1";;
	2) echo "Eligiste 2";;
	3) echo "Eligiste 3";;
	*) echo "Opcion no valida";;
esac

