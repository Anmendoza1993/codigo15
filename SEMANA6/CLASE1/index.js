const nombre ="Angel";
const apellido ="Mendoza";
const dni = "99999999"


console.log(nombre, apellido, dni)
console.log(nombre + " " + apellido)













console.log("======Fecha=====");
const fecha = new Date();
const hora = fecha.getHours()
if (hora <  12){
    console.log ("buenos días")
    
} else if (hora < 18){
    console.log ("Buenas tardes")
} else{
    console.log ("Buenas Noches los pastores")
}


