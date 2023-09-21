const ejercicios = [
    "Contador de Números Pares e Impares",
    "Calculadora de Factorial",
    "Validación de Contraseña",
    "Generador de Tablas de Multiplicar",
    "Suma de Números Primos",
    "Secuencia de Fibonacci",
    "Convertidor de Temperatura",
    "Calculadora de Potencia"
];

let contadorEjercicios = Array(ejercicios.length).fill(0);
let indiceMasSeleccionado = -1;
let indiceMenosSeleccionado = -1;

function ejecutarEjercicio() {
    const select = document.getElementById("seleccionEjercicio");
    const indiceEjercicioSeleccionado = parseInt(select.value);

    if (indiceEjercicioSeleccionado < 8) {
        const descripcionEjercicio = document.getElementById("descripcionEjercicio");
        descripcionEjercicio.textContent = obtenerDescripcion(indiceEjercicioSeleccionado);
        document.getElementById("entradaUsuario").style.display = "block";
        document.getElementById("botonEjecutar").style.display = "block";
    } else if (indiceEjercicioSeleccionado === 8) {
        mostrarResultados();
    }
}

function obtenerDescripcion(indice) {
    switch (indice) {
        case 0:
            return "Contador de Números Pares e Impares: Este ejercicio solicita al usuario un número y luego muestra la cantidad de números pares e impares dentro del rango desde 1 hasta ese número.";
        case 1:
            return "Calculadora de Factorial: Este ejercicio calcula el factorial de un número ingresado por el usuario utilizando un ciclo.";
        case 2:
            return "Validación de Contraseña: Este ejercicio pide al usuario que ingrese una contraseña. Si la contraseña es 'secreto123', muestra un mensaje de acceso concedido; de lo contrario, muestra un mensaje de acceso denegado.";
        case 3:
            return "Generador de Tablas de Multiplicar: Este ejercicio solicita al usuario un número y luego muestra la tabla de multiplicar correspondiente a ese número.";
        case 4:
            return "Suma de Números Primos: Este ejercicio calcula la suma de los primeros N números primos, donde N es ingresado por el usuario.";
        case 5:
            return "Secuencia de Fibonacci: Este ejercicio genera la secuencia de Fibonacci hasta un término dado por el usuario.";
        case 6:
            return "Convertidor de Temperatura: Este ejercicio convierte temperaturas entre grados Celsius y Fahrenheit, permitiendo al usuario elegir la dirección de la conversión.";
        case 7:
            return "Calculadora de Potencia: Este ejercicio calcula el resultado de elevar un número a una potencia dada por el usuario.";
        default:
            return "";
    }
}

function verificarRespuesta() {
    const valorEntrada = document.getElementById("campoEntrada").value;
    const indiceEjercicioSeleccionado = parseInt(document.getElementById("seleccionEjercicio").value);
    const ejecutar = confirm(`¿Desea ejecutar el ejercicio "${ejercicios[indiceEjercicioSeleccionado]}" con el valor ${valorEntrada}?`);
     
    if (ejecutar) {
        resolverEjercicio(indiceEjercicioSeleccionado, valorEntrada);
    } else {
        ejecutarEjercicio();
    }
}

function resolverEjercicio(exerciseIndex, userInput) {
    switch (exerciseIndex) {
        case 0: // CONTADOR DE NÚMEROS PARES E IMPARES
            const n = parseInt(userInput);
            let pares = 0;
            let impares = 0;

            for (let i = 1; i <= n; i++) {
                if (i % 2 === 0) {
                    pares++;
                } else {
                    impares++;
                }
            }
            alert(`En el rango de 1 a ${n}:\nNúmeros Pares: ${pares}\nNúmeros Impares: ${impares}`);
            break;

        case 1: // CALCULADORA FACTORIAL
            const numm = parseInt(userInput);
            let factorial = 1;
            for (let i = 1; i <= numm; i++) {
                factorial *= i;
            }
            alert(`El factorial de ${numm} es: ${factorial}`);
            break;

        case 2: // VALIDACIÓN DE CONTRASEÑAS
            if (userInput === "secreto123") {
                alert("Acceso concedido");
            } else {
                alert("Acceso denegado ");
            }
            break;

        case 3: // GENERADOR DE TABLAS DE MULTIPLICAR 
            const num = parseInt(userInput);
            let tabla = "";
            for (let i = 1; i <= 10; i++) {
                tabla += `${num} x ${i} = ${num * i}\n`;
            }
            alert(`Tabla de multiplicar del ${num}:\n${tabla}`);
            break;

        case 4: // SUMA DE NÚMEROS PRIMOS
            const numPrimos = parseInt(userInput);
            let suma = 0;
            let contador = 0;
            let numero = 2;
            while (contador < numPrimos) {
                if (esPrimo(numero)) {
                    suma += numero;
                    contador++;
                }
                numero++;
            }
            alert(`La suma de los primeros ${numPrimos} números primos es: ${suma}`);
            break;            

        case 5: // SECUENCIA DE FIBONACCI
            const numFibonacci = parseInt(userInput);
            let fib = [0, 1];
            for (let i = 2; i <= numFibonacci; i++) {
                fib[i] = fib[i - 1] + fib[i - 2];
            }
            alert(`Los primeros ${numFibonacci} términos de la secuencia de Fibonacci son: ${fib.slice(0, numFibonacci + 1).join(', ')}`);
            break;

        case 6: // COVERTIDOR DE TEMPERATURA 
            const temperatura = parseFloat(userInput);
            const conversion = prompt("Seleccione la dirección de conversión:\n1. De Celsius a Fahrenheit\n2. De Fahrenheit a Celsius");
            if (conversion === "1") {
                const fahrenheit = (temperatura * 9/5) + 32;
                alert(`${temperatura} grados Celsius son ${fahrenheit} grados Fahrenheit.`);
            } else if (conversion === "2") {
                const celsius = (temperatura - 32) * 5/9;
                alert(`${temperatura} grados Fahrenheit son ${celsius} grados Celsius.`);
            } else {
                alert("Selección no válida.");
            }
            break;

        case 7: // CALCULADORA DE POTENCIA
            const base = parseFloat(userInput);
            const exponente = parseInt(prompt("Ingrese el exponente:"));
            const resultado = Math.pow(base, exponente);
            alert(`${base} elevado a la potencia ${exponente} es igual a ${resultado}`);
            break;

        case 8: // MOSTRAR RESULTADOS
            mostrarResultados();
            break;
    }
    exerciseCounts[exerciseIndex]++;
    ejecutarEjercicio();
}

function mostrarResultados() {
    let maximoConteo = -1;
    let minimoConteo = Infinity;
    for (let i = 0; i < contadorEjercicios.length; i++) {
        if (contadorEjercicios[i] > maximoConteo) {
            maximoConteo = contadorEjercicios[i];
            indiceMasSeleccionado = i;
        }
        if (contadorEjercicios[i] < minimoConteo) {
            minimoConteo = contadorEjercicios[i];
            indiceMenosSeleccionado = i;
        }
    }

    const textoResultados = document.getElementById("textoResultados");
    textoResultados.innerHTML = `
    - Veces seleccionado: ${contadorEjercicios.join(', ')}<br>
    - Más seleccionado: ${ejercicios[indiceMasSeleccionado]} (${maximoConteo} veces)<br>
    - Menos seleccionado: ${ejercicios[indiceMenosSeleccionado]} (${minimoConteo} veces)`;

    const resultados = document.getElementById("resultados");
    resultados.style.display = "block";
}

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

ejecutarEjercicio();
