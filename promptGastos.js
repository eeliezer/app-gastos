import inquirer from "inquirer";

const preguntas = [
    {
        type: 'input',
        name: 'nombre_gasto',
        message: "¿En que se gastó?"
    },
    {
        type: 'input',
        name: 'gasto_dinero',
        message: '¿Cuanto se gastó?'
    }
];

export const promptGastos = () =>{
    return new Promise((resolve, reject) => {
        try {
            inquirer.prompt(preguntas)
            .then(response =>{
                resolve(response)
            })
        } catch (error) {
            reject(error)
        }
    })
};


const nombreGasto = [
    {
        type: 'input',
        name: 'buscar_gasto',
        message: "Buscar un gasto por nombre:"
    },
];

export const promptObtenerGastos = () =>{
    return new Promise((resolve, reject) => {
        try {
            inquirer.prompt(nombreGasto)
            .then(response =>{
                resolve(response)
            })
        } catch (error) {
            reject(error)
        }
    })
};

const montoGasto = [
    {
        type: 'input',
        name: 'monto_gasto',
        message: "Buscar un gasto mayor que una cantidad:"
    },
];

export const promptObtenerMonto = () =>{
    return new Promise((resolve, reject) => {
        try {
            inquirer.prompt(montoGasto)
            .then(response =>{
                resolve(response)
            })
        } catch (error) {
            reject(error)
        }
    })
};