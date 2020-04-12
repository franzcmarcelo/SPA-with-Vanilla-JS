const API = 'https://rickandmortyapi.com/api/character/'
const opts = { crossDomain: true }

const getData = async (id) => {
    //si el id existe trae el persomaje
    //sino trae todo el APi, es decir todos los personajes
    //para hacer render del home
    const apiURL = id ? `${API}${id}` : API;

    try {
        var response = await fetch(apiURL)

        //
        // con getData(1)
        // console.log(response);
        // Response {type: "cors", 
        // url: "https://rickandmortyapi.com/api/character/1",
        // redirected: false, status: 200, ok: true, …}
        //

        //convertimos nuestro elementos response
        //es decir la respuesta que nos da el servidoR
        //a un objeto JSON que pueda ser iterable
        const data = await response.json();

        //
        // con getData(1)
        //console.log(data);
        //{id: 1, name: "Rick Sanchez", status: "Alive", species: "Human", type: "", …}
        //
        
        return data;

    } catch (error) {
        console.log('Fech Error', error);        
    }
}

export default getData



