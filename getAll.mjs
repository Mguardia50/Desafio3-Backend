import express from "express";


import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fs = require('fs');


export const Items = [];

export class Contenedor {
    constructor(archivo){
        
        
        this.archivo = archivo;
    }

    getAll(){
        fs.promises.readFile(this.archivo) 
        .then( objetosVenta => {

        let arrayDatos = JSON.parse(objetosVenta);

            let itemsVenta= arrayDatos.map((element)=>{
                Items.push({id: element.id, objeto: element.objeto, precio: element.precio, url: element.url});
                
            })

        })
        .catch(err => {
            console.log(err)
        })
    }
}



