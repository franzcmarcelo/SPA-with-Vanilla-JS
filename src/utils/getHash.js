const getHash = () => 
  //location.hash -> #/1/
  //slice -> permite elimina el 1er elemento -> /1/
  //toLocaleLowerCase() -> pasar a minusculas porsiacaso
  //split('/')-> convierte mi string a arreglos y eliminamos los "/"
  //      -> ['', '1', '']
  //split('/')[1] accedemos al primero -> ['1']
  //||'/'-> si no se encentra la ruta que son solo mande '/'
  //  ->Entonces esta accediendo a la raiz del proyectos
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;
