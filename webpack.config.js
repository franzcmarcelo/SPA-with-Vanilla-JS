//configuracion para darle vida a nuestro proyecto

//nos va a permitir traer 'path' ya de node
//y nos va a permitir acceder donde nos estamos moviendo en el proyecto
//ya sea en el desarrollo lacal o la nube
const path = require('path');

//añadimos el archivo necesario para trabajar con html
// lo vamos a requerir del paquete que instalamos
const HtmlWebpackPlugin = require('html-webpack-plugin')

// complemento que necesita webpack para copiar los 
// estilos al compilado que estamos generando
const CopyWebpackPlugin = require('copy-webpack-plugin')


//modulo que vamos a exportar, donde estara cada configuracion de lo que va a suceder
//este modulo es un objeto donde vive esa configuracion
module.exports = {
    //punto de entrada
    //ahi es donde va a vivir todo nuestro codigo inicial
    //y desde alli va a partir hacia el desarrollo que vamos a crear
    entry: './src/index.js',

    //punto de salida
    //donde vamos a poner este proyecto ya estrucutrado y compilado listo
    //para mandarse a produccion
    output: {
        //hacia donde lo voy a poner
        //utilizamos el path que importamos recientemente
        //y le diremos que utilice resolve, para saber donde se encuentra
        //__dirname: quiere decir donde se encuentre ahi vas a poner una nueva carpeta
        //creamos la carpeta 'dist' de distribution
        path: path.resolve(__dirname, 'dist'),
        //le decimos como se va a llamar el archivo que voy a generar
        //el compilado que vamos crear de todo nuestro proyecto se llamra main.js
        //cuando este listo para produccion
        filename: "main.js"
    },

    //extensiones
    resolve: {
        //pasamos un arreglo de las extensiones que vamos a utilizar
        //en este caso solo utilizaremos .js
        extensions: ['.js']
    },

    //reglas necesarias que vamo a empezar a trabajar
    //babel: para preparar nuestro proyeto que sea compatible con todos navegadores
    module: {
        //las reglas son pasados por medio de un arreglo
        rules: [
            //el primer elemento es la estructura de babel
            {
                //generamos un test de como vamos a identificar estos archivos
                //mediante y regex para filtrar valores
                //  \. punto de entrada
                //  .js extesion
                //  ?$ y pasamos el regex
                test: /\.js?$/,

                //segundo: excluimos la carpeta de node_modules
                //no queremos incorporar todo lo que se encuentra ahi a lo que seria mi proyecto
                //de este forma excluimos todo lo que encuentra ahi de archivos js
                exclude: /node_modules/,

                //utilizaremos un loader o configuracion establecida
                //para trabajar todo nuestro codigo
                //utilzamos el que instalamos
                use: {
                    loader: 'babel-loader'
                }
            }

        ]
    },

    //Plugins
    //utilizaremos el webpack plugin de html
    //que nos va a permitir trabajar con los archivos html
    //los pasamos mediante un arreglo
    plugins: [
        //creamos cada uno de ellos
        //este es el que instanciamos en la parte superior
        //e instanciamos lo que necesitamos pasandole un 
        //objeto en el que vamos a llenar la configuracion
        new HtmlWebpackPlugin(
            {
                //como vamos a inyectar un valor a un archivo html
                inject: true,
                //donde se encuentra el template principal o base
                template: './public/index.html',
                //hacia donde lo mandamos o guardamos, obviamente en la carpeta this
                filename: './index.html',
            }
        ),

        new CopyWebpackPlugin([{
            from: './src/style/styles.css',
            //Hacia nuestro directorio
            //aqui podriamos crear una carpeta pero 
            //nuestro configuracion no lo requiere
            to: ''
        }])
    ]
}