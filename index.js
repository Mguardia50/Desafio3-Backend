import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import {Contenedor} from "./getAll.mjs"
import { Items } from "./getAll.mjs";

const fs = require('fs');
let container = new Contenedor("./objetos.json");

const app = express()
let contador = 0 ;
const hola = (`<h1 style="color: blue">hola 
</h1> <h1 style="color: blue">hola </h1>`)

const datos = []



setTimeout(()=>{ 

    Items.forEach((Item)=>{datos.push(
    `<h1 style="color: blue">${Item.objeto}</h1>
    <h1 style="color: blue">${Item.precio}</h1>
    <img src=${Item.url} style="width: 150px; height: 150px"> `);
}) 
},1000) 

app.get('/', (req,res) => {
    setTimeout(()=>{ 
        res.send(datos.join());
    },1500) 
    
});
//INTENTE ESTO PERO NO FUNCIONO
/* res.send(Items.forEach((Item)=>{`<h1 style="color: blue">${Item.objeto}</h1>`})); 
Items.forEach((Item)=>{res.send(`<h1 style="color: blue">${Item.objeto}</h1>`)});*/


app.get('/random', (req, res) => {
    let numeroAleatorio = Math.floor(Math.random() * 3);
    setTimeout(()=>{ 
        res.send(datos[numeroAleatorio]);
    },1500) 
    
});




const server = app.listen(8080, () => {
    console.log("servidor express");
});


server.on("error", (error)=>{
    console.error("ERROR " + error)
});


container.getAll();

