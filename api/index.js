const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000
let arrayTransacciones = []

//Procesar datos enviados mediante formularios HTML 
app.use(express.urlencoded({
        extended: true })
    );

//middleware para analizar datos JSON entrantes en las solicitudes HTTP
app.use(express.json({
     type: "*/*" })
    );

//permitir que tu servidor responda a solicitudes desde un dominio diferente al de la propia aplicación
app.use(cors());



//Crear rutas
app.get('/transaccion', (req, res)=>{
    res.send(JSON.stringify(arrayTransacciones))
})



app.post('/transaccion', (req, res)=>{
    //console.log(req.body);
    let respuestaTransaccion = req.body
    arrayTransacciones.push(respuestaTransaccion)
    console.log(arrayTransacciones);
})

// GET -> miPc/transaccion -> Devolve las Trasnsacciones
//POST -> miPc/trasacciones con una {Transaccion} -> Guarda la transaccion

app.listen(3000, () => {
    console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
  });