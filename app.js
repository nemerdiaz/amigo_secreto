// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){

    let amigo = document.querySelector('.input-name').value;
    // console.log(amigo);
    if (amigo != "") {
        if (typeof amigo == "string") {
            amigos.push(amigo);
            // console.log(amigos);
            limpiarCaja();
                return amigo;   
        }

    } else {
        alert("Por favor, inserte un nombre.");
        
    }    
    

}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}