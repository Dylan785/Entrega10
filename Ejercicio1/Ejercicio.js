function calcularPuntoEquilibrio() {
    
    var precioVenta = parseFloat(prompt("Ingrese el precio de venta por unidad:"));
    var costosVariables = parseFloat(prompt("Ingrese los costos variables por unidad:"));
    var costosFijos = parseFloat(prompt("Ingrese los costos fijos totales:"));

    if (isNaN(precioVenta) || isNaN(costosVariables) || isNaN(costosFijos)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    var puntoEquilibrio = costosFijos / (precioVenta - costosVariables);

    alert("El Punto de Equilibrio es: " + puntoEquilibrio.toFixed(2) + " unidades.");
}

calcularPuntoEquilibrio();