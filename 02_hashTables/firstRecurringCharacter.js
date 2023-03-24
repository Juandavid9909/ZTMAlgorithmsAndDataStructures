// Google question
// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]:
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]:
// It should return 1

// Given an array = [2, 3, 4, 5]:
// It should return undefined

function firstRecurringCharacter1(input) {
    let arrNumeros = [];

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < arrNumeros.length; j++) {
            if (input[i] === arrNumeros[j]) {
                return input[i];
            }
        }

        arrNumeros.push(input[i]);
    }

    return undefined;
}

function firstRecurringCharacter2(input) {
    let map = {};

    for (let i = 0; i < input.length; i++) {
        if (map[input[i]]) {
            return input[i];
        }

        map[input[i]] = i;
    }

    return undefined;
}

function firstRecurringCharacterMia(arrNumeros) {
    let intNumeroRecurrente;
    const objNumeros = {};

    for (let intNumero of arrNumeros) {
        if (objNumeros[intNumero]) {
            intNumeroRecurrente = intNumero;
            break;
        }

        objNumeros[intNumero] = true;
    }

    return intNumeroRecurrente;
}

console.log(firstRecurringCharacter1([2, 5, 5, 2, 3, 5, 1, 2, 4]));