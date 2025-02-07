function recomendar(genero){
    let edad = document.getElementById("edad").value;
    let recomendacion = document.getElementById("recomendacion");

    switch(genero) {
        case 'drama':
            if (edad < 13) {
                recomendacion.textContent = "Casablanca";
            } else {
                if (edad < 16) {
                recomendacion.textContent = "The Shawshank Redemption";    
                } else {
                    recomendacion.textContent = "Taxi Driver";    
                }
            }
            break;

        case 'comedia':
            if (edad < 13) {
                recomendacion.textContent = "Back to the Future";
            } else {
                if (edad < 16) {
                recomendacion.textContent = "The Truman Show";    
                } else {
                    recomendacion.textContent = "The Wolf of Wall Street";    
                }
            }
            break;

        case 'musical':
            if (edad < 13) {
                recomendacion.textContent = "La La land";
            } else {
                if (edad < 16) {
                recomendacion.textContent = "Les Miserables";    
                } else {
                     recomendacion.textContent = "Sweeney Todd: The Demon Barber of Fleet Street";    
                }
             }
            break;

        case 'crimen':
                if (edad < 13) {
             recomendacion.textContent = "No hay opciones para esta edad";
            } else {
                if (edad < 16) {
                recomendacion.textContent = "El secreto de tu ojos";    
                } else {
                     recomendacion.textContent = "The Godfather";    
                }
             }
            break;            
    }
}