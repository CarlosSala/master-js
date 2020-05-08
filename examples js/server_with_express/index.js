const express = require('express');

// morgan es un middleware que entrega informacion por
// consola de la peticiones 
const morgan = require('morgan');

// linea obligatoria para inicializar express
var app = express();

// requiriendo rutas
const routes = require('./routes');
const routesApi = require('./routes-api');

// SETTINGS
// para las configuraciones de un motor de templates
// para agregar variables
app.set('appName', 'mi primer servidor');
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');



// MIDDLEWARES

// .use() es un middleware en express
// tratan objetos del navegador
// next se utiliza para que el servidor continue su flujo

app.use(morgan('dev'));
app.use(morgan('short'));
app.use(morgan('combined'));

app.use((req, res, next) => {
    console.log('request url: '+ req.url);
    next();
});

app.use((req, res, next)=>{
    console.log('I am a second middleware');
    next();
});

// rutes
app.use(routes);
app.use('/api', routesApi);

app.get('*', (req, res) => {
    res.end('ruta no encontrada');
});

app.listen(8888, () => {
    
    console.log('Nombre de la App: '+ app.get('appName'));
    console.log('server running... ');
});