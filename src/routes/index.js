//importamos los templates y pages que creamos
//Y generaremos ets manejo de rutas
//Y como le vamos a hacer render en nuestra aplicacion

//funciona igual si le agregamos .js
import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'

import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'



//Routes
const routes = {
    //Cada una de estas rutas hara render de algun elemento (template, section)
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
};


//Router -> Manejador
//Se encargara de mostrar los elementos segun la logica que vamos a establecer
//Tambien trabajaremos aqui con obtener valores del navegador y como vamos a 
//estrucutraralos para saber cual es la ruta en la cual nuestro usuario a querido moverse

const router = async () => {
    //Establecemos los templates que tenemos hacia un elemento del DOM (public>html)
    //Es decir, que a los elementos de public>index.html (header y content), 
    //vamos a estructurarlos en nuestro router
    //Y aqui vamos a hacer render de nuestros templates hacia las secciones del DOM

    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    //Ya tenemos 2 elementos hacia donde podemos hacer render
    
    //Nos permite mandar el template de header hacia la vista dentro del html
    header.innerHTML = await Header();

    
    //IMPLEMENTAR Y PROBAR LAS CONEXIONES
    //obtenemos el hash o la seccion a la que se esta moviendo (/, id, about, etc)
    let hash = getHash(); 
    //manejamos la ruta (/, /:id, /about)
    let route = await resolveRoutes(hash);
    //Evalua si existen las rutas con bracket notation e if ternario
    // ejm: route(/:id) 
    // en routes ('/': Home, '/:id': Character,'/contact': 'Contact',)
    //Si existe contendra la ruta, en el ejm render = Charater
    //Sino existe la ruta render = Error404
    let render = routes[route] ? routes[route] : Error404;
    //Ahora a Content (seccion donde va a vivir nuestra aplicacion segun se mueva nuestro usuario)
    //le hacemos un innerHtml del render
    content.innerHTML = await render();

};

export default router;





