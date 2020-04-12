import getData from '../utils/getData'
//convertimos nuestra funcion Home en async await 
//porque haremos el llamado a una Api (tarea asincrona)
//Y modificamos nuestro template

//estamos generando el template base, y no necesitamos mas que estas
//referencias, para cuando hagamos render del llamado a la API
//podamos saber donde vamos a poner cada uno de nuestros elementos

const Home = async () => {

    const characters = await getData();
    //No pasamos un id porque aqui como es home
    //se mostraran todos los personajes


    //iteramos los personajes y por cada uno generamos
    //un template
    const view= `
        <div class="Characters">

            ${characters.results.map(character => `

                <article class="Character-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>      

            `).join('')}

        </div>
    `;
    //${characters.results.map ...
    //Nos va a generar un arreglo
    //Pero nosotros queremos generar un bloque, por eso con
    //join('') lo unimos nuevamente y le decimos que no utilice
    //ninguna forma de separarlos (ya que somo son arreglos los separa por ,)

    return view;
};

//lo exportamos por que nos va a permitir identificar si 
//este archivo puede ser utilizado dentro de otros archivos js
export default Home;