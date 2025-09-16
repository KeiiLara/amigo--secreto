<<<<<<< HEAD
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema de Amigo Secreto.

// Lista para guardar todos los nombres de los participantes
let amigos = [];

// Lista para guardar los nombres que ya han sido sorteados
let sorteados = [];

// ✅ Función para validar que el nombre tenga solo letras y espacios
// No permite números, símbolos o caracteres especiales
function esNombreValido(nombre) {
    // Expresión regular que permite letras, acentos, ñ y espacios
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return regex.test(nombre); // Retorna true si el nombre es válido, false si no
}

// ✅ Función que permite agregar y guardar los nombres de los amigos
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Obtiene el input del HTML
    const nombre = input.value.trim(); // Quita espacios al inicio y final

    // Valida que el input no esté vacío
    if (nombre === "") {
        alert("⚠️ Por favor, escribe un nombre sin números.");
        return; // Detiene la función si el nombre está vacío
    }

    // Valida que el nombre contenga solo letras y espacios
    if (!esNombreValido(nombre)) {
        alert("⚠️ Solo se permiten letras y espacios.");
        return; // Detiene la función si el nombre contiene caracteres inválidos
    }

    // Valida que el nombre no esté repetido en la lista
    if (amigos.includes(nombre)) {
        alert("⚠️ Este nombre ya fue agregado, favor agrega otro nombre.");
        return; // Detiene la función si el nombre ya existe
    }

    amigos.push(nombre); // Agrega el nombre a la lista de amigos
    actualizarLista(); // Actualiza la lista visible en el HTML
    input.value = ""; // Limpia el input para agregar otro nombre
}

// ✅ Función que actualiza la lista de amigos en la pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos"); // Obtiene el <ul> del HTML
    lista.innerHTML = ""; // Limpia la lista antes de actualizar

    // Recorre la lista de amigos y crea un <li> por cada uno
    amigos.forEach((amigo) => {
        const li = document.createElement("li"); // Crea el elemento <li>
        li.textContent = amigo; // Asigna el nombre al <li>
        lista.appendChild(li); // Inserta el <li> en el <ul>
    });
}

// ✅ Función que realiza el sorteo del amigo secreto
function sortearAmigo() {
    // Valida que haya al menos 2 participantes
    if (amigos.length < 2) {
        alert("⚠️ Debe haber al menos 2 amigos para sortear.");
        return; // Detiene la función si no hay suficientes amigos
    }

    // Verifica si todos los nombres ya fueron sorteados
    if (sorteados.length === amigos.length) {
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = "✅ Todos los amigos ya fueron sorteados. No hay más intentos.";
        return; // Detiene la función si ya se sortearon todos los amigos
    }

    let amigo;
    // Selecciona un amigo aleatorio que no haya sido sorteado antes
    do {
        const indice = Math.floor(Math.random() * amigos.length); // Índice aleatorio
        amigo = amigos[indice]; // Obtiene el nombre correspondiente
    } while (sorteados.includes(amigo)); // Repite hasta encontrar uno no sorteado

    sorteados.push(amigo); // Agrega el nombre sorteado a la lista de sorteados

    const resultado = document.getElementById("resultado"); // Obtiene el contenedor del resultado
    resultado.innerHTML = `🎉 Tu amigo secreto es: <strong>${amigo}</strong>`; // Muestra el resultado en pantalla
}

=======
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
>>>>>>> 79dfbf55cc4a7142d24e0df3651eb75a64333bc0
