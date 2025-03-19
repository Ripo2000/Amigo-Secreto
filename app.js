// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigosIngresados = [];
let listaAmigosUl = document.getElementById("listaAmigos");
let nombreIngresado = String

    //Función para ingresar nombres en array
    function agregarAmigo() {
        let input = document.getElementById("amigo");
        let nombreIngresado = input.value.trim();
        if (nombreIngresado) {
            listaAmigosIngresados.push(nombreIngresado);//ok
            actualizarLista();//ok
            input.value = "";
        } else {
            alert("Por favor ingrese un nombre válido.");
        }
    }
    
    // Función para actualizar la lista visual
    function actualizarLista() {
        listaAmigosUl.innerHTML = "";
        listaAmigosIngresados.forEach(function(nombreIngresado, index) {
            let li = document.createElement("li");
            li.textContent = (index + 1) + ". " + nombreIngresado;
            listaAmigosUl.appendChild(li);
            console.log(index)
        });
    }
    
    // Función para sortear amigo secreto
    function sortearAmigo() {
        if (listaAmigosIngresados.length < 1) {
            alert("Debes ingresar al menos un amigo para sortear.");
            return;
        }
        let amigoSecreto = listaAmigosIngresados[Math.floor(Math.random() * listaAmigosIngresados.length)];
        let resultadosUl = document.getElementById("resultado");
        resultadosUl.innerHTML = "";
        let li = document.createElement("li");
        li.textContent = "¡Tu amigo secreto es: " + amigoSecreto + "!";
        resultadosUl.appendChild(li);
        actualizarDesplegableNombres();
    }
    
    // Función para crear/actualizar el datalist con los nombres usados en el sorteo
    function actualizarDesplegableNombres() {
        let datalist = document.getElementById("desplegableAmigos");
        if (!datalist) {
            datalist = document.createElement("datalist");
            datalist.id = "desplegableAmigos";
            document.body.appendChild(datalist);
            // Asociar datalist al input
            let input = document.getElementById("amigo");
            input.setAttribute("list", "desplegableAmigos");
        }
        datalist.innerHTML = ""; // Limpiar opciones anteriores
        listaAmigosIngresados.forEach(function(nombreIngresado) {
        let option = document.createElement("option");
        option.value = nombreIngresado;
        datalist.appendChild(option);
        });
    }

    