#!/bin/bash
read -p "Escribe el primer numero: " num1
read -p "Escribe el segundo numero: " num2

if [ $num1 -gt $num2 ]; then
	echo "El numero mayor es $num1"
elif [ $num1 -eq $num2 ]; then
	echo "Los numeros son iguales"
else
	echo "El numero mayor es $num2"
fi

