#!/bin/bash

menu_opcion(){
	echo "Elige una opcion"
	echo "Opcion 1: Escribir 1"
	echo "Opcion 2: Escribir 2"
	echo "Opcion 3: Escribir 3"
}

menu_opcion

read -p "Elige una opcion: " opcion

case $opcion in 
	1)
		echo "1" ;;
	2)
		echo "2" ;;
	3)
		echo "3" ;;
	*) 
		echo "No has elegido ninguna opcion" ;;
esac



