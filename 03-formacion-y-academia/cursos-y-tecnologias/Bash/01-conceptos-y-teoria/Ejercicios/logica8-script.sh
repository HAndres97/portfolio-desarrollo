#!/bin/bash
calcular_suma(){
	read -p "Escribe un numero: " num1
	read -p "Escribe otro numero: " num2
	local suma=$(($num1 + $num2))
	echo "$suma"
}
total=$(calcular_suma)
echo "La suma total es $total"
