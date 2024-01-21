function capacitacionFinanciera(){
    var presupuestoPersonal = parseFloat(prompt("Ingrese su presupuesto personal"));
  
    alert("usted debe usar: " + presupuestoPersonal*0.50 + " para los gastos necesarios");
    alert("usted debe usar: " + presupuestoPersonal*0.30 + " para gastos opcionales");
    alert("usted debe usar: " + presupuestoPersonal*0.20 + " para ahorro e inversión");
}

 capacitacionFinanciera();