function divisao(a, b) {
    if (b === 0) {
        return 'Todo número dividido por 0 é 0';
    }
    return a /b;
}

module.exports = divisao;