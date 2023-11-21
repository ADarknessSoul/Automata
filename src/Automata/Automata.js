const automata = {

    "Inicial": {

        "Alph": "IdR1",
        "Num": "NumEyD1",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "OpRyL1",
        ">": "OpR1",
        "<": "OpR2",
        "=": "OpAs1",
        "&": "OpL1",
        "|": "OpL2",
        "+": "OpA1",
        "-": "OpA2",
        "*": "Com3",
        "%": "OpA1",
        "/": "Com1",
        "\"": "Com2",
        ".": "Error",
        "(": "P1",
        ")": "P1",
        "{": "C1",
        "}": "C1",
        "Aceptacion": false,

    },
    "IdR1": {

        "Alph": "IdR1",
        "Num": "IdR1",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "IdR1",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "Error",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "Error",
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": true,
        "type": "Identificadores"

    },
    "P1": {

        "Alph": "Error",
        "Num": "Error",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "Error",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "Error",
        "(": "P1",
        ")": "P1",
        "{": "C1",
        "}": "C1",
        "Aceptacion": true,
        "type": "Paréntesis"

    },
    "C1": {

        "Alph": "Error",
        "Num": "Error",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "Error",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "Error",
        "(": "P1",
        ")": "P1",
        "{": "C1",
        "}": "C1",
        "Aceptacion": true,
        "type": "Llaves"

    },
    "OpAs1": {

        "Alph": "Error",
        "Num": "Error",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "OpR2",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "Error",
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": true,
        "type": "Asignaciones",

    },
    "OpRyL1": {

        "Alph": "Error",
        "Num": "Error",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "OpR2",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "Error",
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": true,
        "type": "Operador lógico",

    },
    "OpR1": {

        "Alph": "Error",
        "Num": "Error",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "OpR2",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "Error",
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": true,
        "type": "Operador relacional",

    },
    "OpR2": {

        "Alph": "Error",
        "Num": "Error",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "Error",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "Error",
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": true,
        "type": "Operador relacional",

    },
    "OpL1": {

        "Alph": "Error",
        "Num": "Error",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "Error",
        "&": "OpL3",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "Error",
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": false,

    },
    "OpL2": {

        "Alph": "Error",
        "Num": "Error",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "Error",
        "&": "Error",
        "|": "OpL3",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "OpL3",
        "\"": "Error",
        ".": "Error",
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": false,

    },
    "OpL3": {

        "Alph": "Error",
        "Num": "Error",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "Error",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "Error",
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": true,
        "type": "Operador lógico",

    },
    "NumEyD1": {

        "Alph": "Error",
        "Num": "NumEyD1",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "Error",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "NumEyD2",
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": true,
        "type": "Números enteros"

    },
    "NumEyD2": {

        "Alph": "Error",
        "Num": "NumEyD3",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "Error",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "Error",
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": false,

    },
    "NumEyD3": {

        "Alph": "Error",
        "Num": "NumEyD3",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "Error",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "Error",
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": true,
        "type": "Números decimales"

    },
    "Com1": {

        "Alph": "Error",
        "Num": "Error",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "Error",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Com5",
        "%": "Error",
        "/": "Com4",
        "\"": "Error",
        ".": "Error",
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": true,
        "type": "Operador aritmético",

    },
    "Com2": {

        "Alph": "Com2",
        "Num": "Com2",
        "Chars": "Com2",
        "esp": "Com2",
        "tab": "Com2",
        "enter": "Error",
        "_": "Com2",
        "!": "Com2",
        ">": "Com2",
        "<": "Com2",
        "=": "Com2",
        "&": "Com2",
        "|": "Com2",
        "+": "Com2",
        "-": "Com2",
        "*": "Com2",
        "%": "Com2",
        "/": "Com2",
        "\"": "Com8",
        ".": "Com2",
        "(": "Com2",
        ")": "Com2",
        "{": "Com2",
        "}": "Com2",
        "Aceptacion": false,

    },
    "Com3": {

        "Alph": "Error",
        "Num": "Error",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "Error",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "Error",
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": true,
        "type": "Operador aritmético",

    },
    "Com4": {

        "Alph": "Com4",
        "Num": "Com4",
        "Chars": "Com4",
        "esp": "Com4",
        "tab": "Com4",
        "enter": "Inicial",
        "_": "Com4",
        "!": "Com4",
        ">": "Com4",
        "<": "Com4",
        "=": "Com4",
        "&": "Com4",
        "|": "Com4",
        "+": "Com4",
        "-": "Com4",
        "*": "Com4",
        "%": "Com4",
        "/": "Com4",
        "\"": "Com4",
        ".": "Com4",
        "(": "Com4",
        ")": "Com4",
        "{": "Com4",
        "}": "Com4",
        "Aceptacion": true,
        "type": "Comentario de línea",

    },
    "Com5": {

        "Alph": "Com5",
        "Num": "Com5",
        "Chars": "Com5",
        "esp": "Com5",
        "tab": "Com5",
        "enter": "Inicial",
        "_": "Com5",
        "!": "Com5",
        ">": "Com5",
        "<": "Com5",
        "=": "Com5",
        "&": "Com5",
        "|": "Com5",
        "+": "Com5",
        "-": "Com5",
        "*": "Com6",
        "%": "Com5",
        "/": "Com5",
        "\"": "Com5",
        ".": "Com5",
        "(": "Com5",
        ")": "Com5",
        "{": "Com5",
        "}": "Com5",
        "Aceptacion": false,

    },
    "Com6": {

        "Alph": "Com5",
        "Num": "Com5",
        "Chars": "Com5",
        "esp": "Com5",
        "tab": "Com5",
        "enter": "Inicial",
        "_": "Com5",
        "!": "Com5",
        ">": "Com5",
        "<": "Com5",
        "=": "Com5",
        "&": "Com5",
        "|": "Com5",
        "+": "Com5",
        "-": "Com5",
        "*": "Com6",
        "%": "Com5",
        "/": "Com7",
        "\"": "Com5",
        ".": "Com5",
        "(": "Com5",
        ")": "Com5",
        "{": "Com5",
        "}": "Com5",
        "Aceptacion": false,

    },
    "Com7": {

        "Alph": "Error",
        "Num": "Error",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "Error",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "Error",
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": true,
        "type": "Comentario multilinea",

    },
    "Com8": {

        "Alph": "Error",
        "Num": "Error",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "Error",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "Error",
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": true,
        "type": "Cadena de caracteres",

    },
    "OpA1": {

        "Alph": "Error",
        "Num": "Error",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "Error",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "Error", 
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": true,
        "type": "Operador aritmético",

    },
    "OpA2": {

        "Alph": "Error",
        "Num": "NumEyD1",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "Error",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "Error", 
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": true,
        "type": "Operador aritmético",

    },
    "Error": {

        "Alph": "Error",
        "Num": "Error",
        "Chars": "Error",
        "esp": "Inicial",
        "tab": "Inicial",
        "enter": "Inicial",
        "_": "Error",
        "!": "Error",
        ">": "Error",
        "<": "Error",
        "=": "Error",
        "&": "Error",
        "|": "Error",
        "+": "Error",
        "-": "Error",
        "*": "Error",
        "%": "Error",
        "/": "Error",
        "\"": "Error",
        ".": "Error",
        "(": "Error",
        ")": "Error",
        "{": "Error",
        "}": "Error",
        "Aceptacion": false,

    }

}

const arrayOfReservedChars = ["_", "!", ">", "<", "=", "&", "|", "+", "-", "*", "%", "/", "\"", ".", "(", ")", "{", "}"];
const arrayOfReservedWords = ["if", "else", "switch", "case", "default", "for", "while", "break", "int", "String", "double", "char", "print"];

    export const recorrerAutomata = (textForAutomata = "") => {

    let estadoActual = "Inicial";
    let charValue = 0;
    let transitionChar = "";
    let currentWord = "";
    let position = -1;
    let flag = false;

    const counterOfTypes = {

        "Identificadores": {
    
            num: 0,
            pos: [],
            word: [],
    
        },
        "Palabras reservadas": {
    
            num: 0,
            pos: [],
            word: [],
    
        },
        "Paréntesis": {
    
            num: 0,
            pos: [],
            word: [],
    
        },
        "Llaves": {
    
            num: 0,
            pos: [],
            word: [],
    
        },
        "Asignaciones": {
    
            num: 0,
            pos: [],
            word: [],
    
        },
        "Operador lógico": {
    
            num: 0,
            pos: [],
            word: [],
    
        },
        "Operador relacional": {
    
            num: 0,
            pos: [],
            word: [],
    
        },
        "Números enteros": {
    
            num: 0,
            pos: [],
            word: [],
    
        },
        "Números decimales": {
    
            num: 0,
            pos: [],
            word: [],
    
        },
        "Operador aritmético": {
    
            num: 0,
            pos: [],
            word: [],
    
        },
        "Comentario de línea": {
    
            num: 0,
            pos: [],
            word: [],
    
        },
        "Comentario multilinea": {
    
            num: 0,
            pos: [],
            word: [],
    
        },
        "Cadena de caracteres": {
    
            num: 0,
            pos: [],
            word: [],
    
        },
        "Errores": {
    
            num: 0,
            pos: [],
            word: [],
    
        },
    
    }

    for(const transicion of textForAutomata) {

        transitionChar = "";

        //Condición para asegurar que no sume espacios, saltos de linea y tabuladores a la palabra actual
        if(transicion.charCodeAt(0) && transicion.charCodeAt(0) !== 10 && transicion.charCodeAt(0) !== 9) currentWord += transicion;

        charValue = transicion.charCodeAt(0);

        //Evaluar que el caracter sea una letra minúscula o mayúscula dentro del código ASCII
        if((charValue >= 65 && charValue <= 90) || (charValue >= 97 && charValue <= 122)) transitionChar = "Alph";
        
        //Evaluar que el caracter sea un número dentro del código ASCII
        else if(charValue >= 48 && charValue <= 57) transitionChar = "Num";

        //Si el caracter es pertenece al array de caracteres reservados, sea iguala directamente
        else if(arrayOfReservedChars.find((charReserved) => charReserved === transicion)) transitionChar = transicion;
        else transitionChar = "Chars";

        if(charValue === 32) transitionChar = "esp";
        else if(charValue === 10) transitionChar = "enter";
        else if(charValue === 9) transitionChar = "tab";

        //Evaluar tokens
        if(transitionChar === "esp" || transitionChar === "enter" || transitionChar === "tab") {

            if(automata[estadoActual]["Aceptacion"]) {

                if((estadoActual === "Com4" && transitionChar === "enter") || estadoActual !== "Com4") {

                    position++;
                    let typeOfChar = "";
    
                    //Si la palabra actual pertenece al arreglo de palabras reservadas, se iguala el tipo a palabras reservadas
                    if(arrayOfReservedWords.find((word) => word === currentWord.trim())) typeOfChar = "Palabras reservadas";     
                    else typeOfChar = automata[estadoActual]["type"];
    
                    counterOfTypes[typeOfChar]["num"] += 1;
                    counterOfTypes[typeOfChar]["pos"].push(position);
                    counterOfTypes[typeOfChar]["word"].push(currentWord.trim());
                    flag = true;

                }

            } else {

                //Se asegura que el espacio/enter/tabulador no se haya dado en el estado inicial. Si es así, se ignora el token. También se evalua que en el estado actual del automata exista una transición a "Inicial", esto verifica que no se trate de un espacio en un comentario
                if(estadoActual !== "Inicial" && (automata[estadoActual]["esp"] === "Inicial" || automata[estadoActual]["tab"] === "Inicial" || automata[estadoActual]["enter"] === "Inicial")) {

                    position++;

                    if(((estadoActual === "Com5" || estadoActual === "Com6") && transitionChar === "enter") || (estadoActual !== "Com5" && estadoActual !== "Com6")) {

                        counterOfTypes["Errores"]["num"] += 1;
                        counterOfTypes["Errores"]["pos"].push(position);
                        counterOfTypes["Errores"]["word"].push(currentWord.trim());
                        flag = true;

                    }

                }

            }

            //Se utiliza una bandera para saber si el espacio pertenece a un comentario
            if(flag) currentWord = "";
            flag = false;

        }
  
        estadoActual = automata[estadoActual][transitionChar];

    }

    return counterOfTypes;
}