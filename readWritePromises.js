import fs from "fs";

export const get = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, "utf-8",(error,contenido) =>{
            if (error) {
                reject(error)
            }else {
                console.log('Se obtuvo los siguientes datos:');
                resolve(JSON.parse(contenido))
            }
        }) 
    })
}

export const save = (file, newData) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, JSON.stringify(newData), (error) =>{
            if(error){
                reject(error)
            }else{
                resolve('Se guardó el gasto correctamente')
            }
        })
    })
}

export const obtenerGastoGuardado = async (nombreGasto) =>{
    const gastos = await get("./gastosGuardados.json")
    const gastoObtenido = gastos.filter(gasto=>gasto.nombre_gasto === nombreGasto.buscar_gasto)
    return gastoObtenido[0];
}

export const obtenerMontoGastado = async (montoGasto) =>{
    const gastos = await get("./gastosGuardados.json");
    const montoIngresado = montoGasto.monto_gasto
    // Una función que verifica si el precio es mayor que un valor dado
    function precioMayorQue(valor) {
        return function(elemento) {
        return elemento.gasto_dinero > valor;
        }
    }
    // Retornar el resultado
    return gastos.filter(precioMayorQue(Number(montoIngresado)));
}