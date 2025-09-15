// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let sorteados = [];

// ✅ Validar que el nombre tenga solo letras y espacios, no números o caracteres no permitidos.
function esNombreValido(nombre) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return regex.test(nombre);
}

// ✅ Función que permite agregar y guardar los datos d los nombres.
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("⚠️ Por favor, escribe un nombre sin números.");
        return;
    }

    if (!esNombreValido(nombre)) {
        alert("⚠️ Solo se permiten letras y espacios.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("⚠️ Este nombre ya fue agregado, favor agrega otro nombre.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("⚠️ Debe haber al menos 2 amigos para sortear.");
        return;
    }

    if (sorteados.length === amigos.length) {
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = "✅ Todos los amigos ya fueron sorteados. No hay más intentos.";
        return;
    }

    let amigo;
    do {
        const indice = Math.floor(Math.random() * amigos.length);
        amigo = amigos[indice];
    } while (sorteados.includes(amigo));

    sorteados.push(amigo);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 Tu amigo secreto es: <strong>${amigo}</strong>`;
}
