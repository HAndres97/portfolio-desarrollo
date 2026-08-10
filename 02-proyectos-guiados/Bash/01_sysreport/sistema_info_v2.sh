#!/bin/bash
#================================================================================
#AUTOR: CHRISTIAN HERRERA
#DESCRIPCION: Utilidad profesional de diagnóstico rápido de sistemas Linux
#REQUISITOS: Bash 4.0+, coreutils.


# --- COLORES ---
VERDE='\033[0;32m'
AZUL='\033[0;34m'
ROJO='\033[0;31m'
NC='\033[0m' # No Color

# --- FUNCIONES ---
mostrar_ayuda(){
	echo -e "${AZUL}Uso:${NC} $0 [ -h | --help]" 
	# -e Habilite la interpretación de caracteres de escape con barra invertida.No entenderia los codigos de colores
	# $0 Nombre de la Script actual
	echo ""
	echo "Genera una ficha técnica detallada con el estado actual del servidor"
	echo "Muestra: Usuario,Hostname,Kernel,Uptime, Memoria y Disco"
}

obtener_info(){
    local usuario=$(whoami)
    local hostname=$(hostname)
    local kernel=$(uname -r)
    local uptime_sys=$(uptime -p) # -p facil leer para humanos "pretty"
    # Extraemos memoria libre usando awk para precisión [1]
    local mem_libre=$(free -h | grep Mem | awk '{print $4}')
    # Espacio en disco raiz [2]
    local disco_uso=$(df -h / | tail -1 | awk '{print $5}')

    clear
    echo -e "${VERDE}************************************************************${NC}"
    echo -e "          ${VERDE}FICHA TÉCNICA DEL SISTEMA (PRO)${NC}"
    echo -e "${VERDE}************************************************************${NC}"
    echo -e "${AZUL}FECHA/HORA:${NC}  $(date '+%Y-%m-%d %H:%M:%S')"
    echo -e "${AZUL}USUARIO:${NC}     $usuario"
    echo -e "${AZUL}HOSTNAME:${NC}    $hostname"
    echo -e "${AZUL}KERNEL:${NC}      $kernel"
    echo -e "${AZUL}UPTIME:${NC}      $uptime_sys"
    echo -e "${AZUL}MEM. LIBRE:${NC}  $mem_libre"
    echo -e "${AZUL}USO DISCO /:${NC} $disco_uso"
    echo -e "${VERDE}************************************************************${NC}"
}

# --- LOGICA PRINCIPAL ---
if [[ $# -gt 0 ]]; then
	case "$1" in
		-h|--help)
			mostrar_ayuda
			exit 0
			;;
		*)
			echo -e "${ROJO}Error: Opción '$1' no válida.${NC}" >&2
			mostrar_ayuda >&2
			exit 1
			;;
	esac
fi

obtener_info

