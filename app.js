import inquirer from "inquirer";
import { get, save, obtenerGastoGuardado, obtenerMontoGastado } from "./readWritePromises.js";
import { promptGastos, promptObtenerGastos, promptObtenerMonto } from "./promptGastos.js";

const menu = async () =>{
    try {
        let promptContinuo = true;
    
        while (promptContinuo) {
            const opciones = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'choices',
                    message: "Selecciona una opción",
                    choices: [
                        {value: 1, name: "Agregar nuevo gasto"},
                        {value: 2, name: "Consultar todos los gastos"},
                        {value: 3, name: "Obtener un gasto específico"},
                        {value: 4, name: "Obtener gastos mayores a un monto"},
                        {value: 99, name: "Salir \n"},
                    ]
                },
            ]);
        
            switch (opciones.choices) {
                case 1:
                    await
                        createNewGasto();
                    break;
                case 2:
                        getAllGastos();
                    break;
                case 3:
                    await
                        getNombreGasto();
                    break;
                case 4:
                    await
                        getMontoGasto();
                    break;
                case 99:
                        promptContinuo = false;
                    break;
                default:
                        promptContinuo = false;
                    break;
            }
        }
    } catch (error) {
        console.log(error);
    }
};

const createNewGasto = async () =>{
    try {
        const gasto = await  promptGastos();
        const gastoJson = await get("./gastosGuardados.json");
        const newGastoData = [...gastoJson, gasto];
        save("./gastosGuardados.json", newGastoData);
    } catch (error) {
        console.log('Error');
    }
}

const getAllGastos = async () =>{
    try {
        const gastos = await get("./gastosGuardados.json")
        console.log(gastos);
        console.log('Para volver al menú anterior presione flecha arriba ↑ o abajo ↓');
    } catch (error) {
        console.log(error);
    }
}

const getNombreGasto = async () => {
    try {
        const nombreGasto = await promptObtenerGastos();
        const gastoEncontrado = await obtenerGastoGuardado(nombreGasto);
        console.log(gastoEncontrado);
    } catch (error) {
        console.log(error);
    }
}

const getMontoGasto = async () => {
    try {
        const montoGasto = await promptObtenerMonto();
        const gastoEncontrado = await obtenerMontoGastado(montoGasto);
        console.log(gastoEncontrado);
    } catch (error) {
        console.log(error);
    }
}



menu();