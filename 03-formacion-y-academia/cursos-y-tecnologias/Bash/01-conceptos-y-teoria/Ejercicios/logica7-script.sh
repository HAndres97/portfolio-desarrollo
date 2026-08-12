#!/bin/bash
for i in  {1..10}
do 
	if [[ $i -eq 5 ]]; then
		continue
	elif [[ $i -eq 8 ]]; then
		break
	else
		echo "$i"
	fi
done

