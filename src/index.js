const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const space = '**********';
    let Symbols = [];
    let Strings = expr.padEnd(Math.ceil(expr.length/10)*10,'00').split(space);
    let result = '';
    for (let i = 0; i < Strings.length; i++) {
        Symbols.push({
            bit: [], 
            morse: [], 
            char: ''
        });

        for (let j = 0; j < Strings[i].length / 10; j++) {
            Symbols[i].bit[j] = Strings[i].substr(j*10, 10);
            Symbols[i].morse[j] = '';
        
            for (z = 0; z < Symbols[i].bit[j].length/2; z++) {
                Symbols[i].morse[j] += decodeBinToMorse(Symbols[i].bit[j].substr(z*2, 2)); 
            }
            
            Symbols[i].char += MORSE_TABLE[Symbols[i].morse[j]];
        }
        result += Symbols[i].char + ' ';
    }

        return result.trim();
}

function decodeBinToMorse(str) {
    switch (str) {
        case '10': return '.';
        case '11': return '-';
        default: return '';
    }
}

module.exports = {
    decode
}