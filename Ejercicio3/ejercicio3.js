function ingreso(){
    var edad = parseInt(prompt("Cuantos años tienes?"))

    if(edad >= 18){
        alert("Bienvenido, usted puede ingresar!");
    } else{
        alert("Lo sentimos, usted no cumple la edad requerida para ingresar.");
    }
}

ingreso();