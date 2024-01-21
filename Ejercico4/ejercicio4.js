function validaciones(){
    var usuario = (prompt("Ingrese su nombre de usuario: "));
    var contraseña = (prompt("Ingrese su contraseña: "));

    if (usuario == "admin" && contraseña == "1234"){
        alert(prompt("Bienvenido!"));
    } else{
        alert(prompt("Usuario o contraseña invalidos, acceso denegado")); 
    }
}

validaciones();