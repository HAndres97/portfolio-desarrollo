#/bin/bash
my_function(){
	echo "Hola desde la funcion"
}
my_function

my_function_with_params(){
	echo "Hola $1"
}
my_function_with_params Andres

name=Andres

my_function_2(){
	local msg="Mundo"
	echo "Hola $msg $name"
}
my_function_2

my_function_with_return(){
 	return 1
 }

my_function_with_return
 echo $?

