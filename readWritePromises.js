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

export const obtenerGastoGuardado = async (montoGasto) =>{
    const gastos = await get("./gastosGuardados.json")
/*     let objetoSuelto = [...gastos]
    console.log(objetoSuelto[1]);
    const gastoObtenido = gastos.filter(gastos=>gastos.gasto_dinero >= montoGasto.buscar_gasto) */
    const gastoObtenido = gastos.filter(gasto=>gasto.nombre_gasto === montoGasto.buscar_gasto)
    return gastoObtenido[0];
}