// Llamada a la promesa (sintaxis 2)
async function fetchData(url1, control1)
{
    try
    {
        const response = await fetch(url1);
        const data = await response.json();

        let result;

        result = data.listado[0].nombre+ "<br>";
        result += data.listado[0].nacimiento+ "<br>";
        result += data.listado[0].localidad+ "<br>";
        result += data.listado[0].obras;

        control1.innerHTML = result;
    }
    catch(error)
    {
        console.log(error.message);
    }
}


window.addEventListener("load", function(event){

    const b1 = document.getElementById("b1");

    if (b1) {

        const url1 = "data/bd1.json";
        const control1 = document.getElementById("d1");

        b1.addEventListener("click", function (event) {
            // Pertmite una petición asíncrona
            event.preventDefault();
            // Llamada al método que realiza la petición al servidor
            fetchData(url1, control1);

    });
    }

});

