// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let amigo = document.querySelector('.input-name').value;    
    if (amigo != "") {
        amigos.push(amigo);
        // console.log(amigos);
        limpiarCaja();
        recorrerAmigos()
        return amigo;                    
    } else {
        alert("Por favor, inserte un nombre.");        
    }    
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if (amigos.length===0) {
        alert("Antes del sorteo, debe ingresar nombre."); 
    }else{    
    let amigoElegido = Math.floor(Math.random() * amigos.length);
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("listaAmigos").innerHTML = "El amigo secreto es: " + amigos[amigoElegido];
    // console.log(amigos);
    // console.log(amigoElegido);
    // console.log(amigos[amigoElegido]);
    return amigos[amigoElegido];
    }
}

function recorrerAmigos() {     
    document.getElementById("listaAmigos").innerHTML = ""; 
    for (i = 0; i < amigos.length; i++) {
        let listar = document.createElement("li");
        listaAmigos = amigos[i];      
        listar.appendChild(document.createTextNode(listaAmigos));      
        document.querySelector("#listaAmigos").appendChild(listar);
    }    
}




