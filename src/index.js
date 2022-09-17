const express = require('express');


const app = express();
const bodyparser = require('body-parser');


//ajuste del puerto

app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(bodyparser.json());


//inicio
app.get('/',(req,res)=>{
    res.send('<html><body><center><b>Bienvenidos sean a la API de Htours</B></center></body></html>')
});

//rutas
app.use(require("./routes/registro"));
app.use(require("./routes/login"));


// iniciar servidor 

app.listen(app.get("port"), () => {
    console.log(`servidor ejecutado en la siguiente direccion http://localhost:${app.get("port")}`);
});

