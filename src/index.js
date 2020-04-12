//console.log('Hello');

//Importamos router y crearemos un elemento que este
//escuchando cuando la pagina ya este lista, empujar la ruta
//que estamos llamando

import router from './routes';

//Utilizamos el valor que esta disponible en navegador
//Window, el cual nos permite saber si esta en el contexto de la aplicacion
//addEventListener, es un manejador de eventos, el cual
//va a estar escuchado si algo sucede,
//en este caso si la carga de la pagina a sucedido
window.addEventListener('load', router);
//tambien podriamos pasar una funcion anonima con la misma funcion cambio de router

//Agregamos un nuevo addEventListener
//Que se va a encargar de escuchar las rutas,
//en este caso el hash al que nos estamos moviendo
window.addEventListener('hashchange', router);
//cuando hay un cambio en el hash va a desencadenar una funcion (en este caso
//la logica de router)
