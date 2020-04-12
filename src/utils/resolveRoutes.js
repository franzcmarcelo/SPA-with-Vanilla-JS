//Ya teniendo la ruta de getHash
//Aqui resolveremos las tutas
//sabiendo a que template vamos a ir

const resolveRoutes = (route) => {
  //De nuestro getHash tenemos 2 posibles valores
  //el / o un id
  //el / representa al home
  //y como nuestro nro de personajes de nuestra API son menos de 1000
  //entonces validamos este route asi 
  //route.length <= 3

  if (route.length <= 3) {
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }

  //si no cumple con esta validacion, es decir el home o un id
  //y digamos hemos entrado a "about" que es mayor que 3
  //entonces retornamos este elemento segun la seccion ("/about")
  //para compararlo con nuestra seccion de rutas
  return `/${route}`;
};

export default resolveRoutes;