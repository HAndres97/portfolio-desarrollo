#!/bin/bash
read -p "Usuario: " mi_usuario
read -sp "Contraseña: " mi_password

echo ""

echo "!Login correcto!Bienvenido $mi_usuario (Tu clave oculta tiene ${#mi_password}  caractetes)."

