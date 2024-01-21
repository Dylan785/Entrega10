function calcularPuntoEquilibrio() {
    // Solicitar los datos al usuario
    var precioVenta = parseFloat(prompt("Ingrese el Precio de Venta por unidad:"));
    var costosVariables = parseFloat(prompt("Ingrese los Costos Variables por unidad:"));
    var costosFijos = parseFloat(prompt("Ingrese los Costos Fijos totales:"));

    // Validar que se ingresen números válidos
    if (isNaN(precioVenta) || isNaN(costosVariables) || isNaN(costosFijos)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    // Calcular el Punto de Equilibrio
    var puntoEquilibrio = costosFijos / (precioVenta - costosVariables);

    // Mostrar el resultado
    alert("El Punto de Equilibrio es: " + puntoEquilibrio.toFixed(2) + " unidades.");
}

calcularPuntoEquilibrio();