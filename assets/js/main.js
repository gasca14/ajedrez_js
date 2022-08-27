// console.log("Entro al main.js");

const piezas = [
    {
        nombre: "Peon",
        movimiento: "El peon se mueve hacia adelante una casilla. si todavia no se ha movido, tiene la opcion de mover dos casillas hacia adelante. No se pueden mover hacia atras. Tambien puede capturar una pieza adversaria en cualquiera de los estaques diagonales en frente.",
        imagen: "assets/images/peon.jpeg"
    },
    {
        nombre: "Torre",
        movimiento: "La torre se mueve en direcciones ortogonales, es decir, por las filas(horizontales) y columnas (verticales).",
        imagen: "assets/images/torre.jpeg"
    },
    {
        nombre: "Alfil",
        movimiento: "El alfil se mueve en direcciones diagonales, es decir, en la direcion de las casillas del mismo color",
        imagen: "assets/images/alfil.jpeg"
    },
    {
        nombre: "Dama",
        movimiento: "La dama se mueve en todas las direcciones, tanto octagonales, como diagonales.",
        imagen: "assets/images/dama.jpeg"
    },
    {
        nombre: "Rey",
        movimiento: "El rey puede moverse en todas las direcciones pero una sola casilla a la vez, mientras no quede en jaque.",
        imagen: "assets/images/rey.jpeg"
    },
    {
        nombre: "Caballo",
        movimiento: "EL caballo se mueve en forma de L, o sea, mueve dos casillas en horizontal y despues una en vertical, o viceversa. EL caballo puede saltar sobre cualquier pieza suya o del adversario.",
        imagen: "assets/images/caballo.jpeg"
    }
];

const textoBusqueda = document.getElementById("textoBusqueda"); //input
const imgPieza = document.getElementById("imgPieza"); //imagen
const resultado_busqueda = document.getElementById("resultado_busqueda"); //parrafo

function buscar() { //funcion para el boton
    const termino_busqueda = textoBusqueda.value
    if (termino_busqueda === "") {
        alert("ingresa un termino de busqueda.");
    } else {
        const resultado = piezas.find(pieza => pieza.nombre.toLowerCase() == termino_busqueda.toLowerCase());//
        if (resultado == undefined) {
            imgPieza.src = "assets/images/ajedrez.jpeg";
            resultado_busqueda.innerHTML = "No existe.";
        } else {
            imgPieza.setAttribute("src", resultado.imagen);
            resultado_busqueda.innerHTML = resultado.movimiento;
        }
    }
}
textoBusqueda.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault;
        buscar();
    }

});