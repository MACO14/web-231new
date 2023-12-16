const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
console.log(alphabet);

[...Array(26)];

[...Array(26)].map((_, i) => i);

[...Array(26)].map((_, i) => String.fromCharCode(i));

[...Array(26)].map((_, i) => String.fromCharCode(i + 97));

function generateAlphabet(capital = false) {
    return [...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97)));
}

generateAlphabet();
