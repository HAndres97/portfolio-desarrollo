#!/bin/bash
#Nombre : 01_sistema_info.sh
#Descripcion : Generador de Ficha de Sistema(CLI Utility), una herramienta para obtener un reporte instantaneo del hardware y estado del sistema(usuario,kernel,uptime,fecha)

#Informacion requerida
#Usuario: Quien esta ejecutando el Script
usuario=$(whoami)

#Nombre de la maquina
n_machine=$(hostname)

#Kernel
kernel=$(uname -a)

#tiempo que lleva encendido el sistema y su carga media
time_live=$(uptime)

#Fecha/hora
fecha=$(date)

mostrar_ayuda() {
	echo "Instrucciones de uso"
}
if [ $# -gt 0 ]; then
	if [[ $1 = "-h" || $1 = "--help" ]]; then
		mostrar_ayuda
		exit 0
	else
		echo "No tenemos esa opcion" >&2
		exit 1
	fi
else
	clear
	echo "************************************************************"
	echo "FICHA TÉCNICA DEL SISTEMA"
	echo "************************************************************"
	echo "
Usuario = "$usuario"
Nombre de la maquina = "$n_machine"
Kernel = "$kernel"
Uptime = "$time_live"
Date/Hour = "$fecha"
		" >&1
	echo "************************************************************"
fi
