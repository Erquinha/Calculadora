class Calculadora {
    soma(n1, n2) {
        return n1 + n2;
    }

    subtrai(n1, n2) {
        return n1 - n2;
    }

    multiplica(n1, n2) {
        return n1 * n2;
    }

    divide(n1, n2) {
        if (n2 === 0) {
            return "Erro: Divisão por zero não permitida.";
        }
        return n1 / n2;
    }

    potencia(base, expoente) {
        return Math.pow(base, expoente);
    }

    raizQuadrada(numero) {
        if (numero < 0) {
            return "Erro: Raiz quadrada de número negativo não permitida.";
        }
        return Math.sqrt(numero);
    }

    // Novo método para calcular o módulo
    modulo(n1, n2) {
        return n1 % n2;
    }

    // Novo método para calcular o fatorial
    fatorial(numero) {
        if (numero < 0) {
            return "Erro: Fatorial de número negativo não permitido.";
        }
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

function verificarResultado(esperado, real, mensagem) {
    if (esperado === real) {
        console.log(`OK ${mensagem} passou.`);
    } else {
        console.log(`ERRO: ${mensagem} falhou. Esperando: ${esperado}, Obtido: ${real}`);
    }
}

const calculadora = new Calculadora();

// Teste para a função soma
verificarResultado(5, calculadora.soma(2, 3), "01 - Testando Soma");

// Teste para a função subtração
verificarResultado(1, calculadora.subtrai(3, 2), "02 - Teste Subtração");

// Teste para a função multiplicação
verificarResultado(6, calculadora.multiplica(2, 3), "03 - Testando Multiplicação");

// Teste para a função divisão
verificarResultado(2, calculadora.divide(6, 3), "04 - Testando Divisão");
verificarResultado("Erro: Divisão por zero não permitida.", calculadora.divide(6, 0), "05 - Testando Divisão por Zero");

// Teste para a função potenciação
verificarResultado(8, calculadora.potencia(2, 3), "06 - Testando Potenciação");

// Testes para a função raizQuadrada
verificarResultado(4, calculadora.raizQuadrada(16), "07 - Testando Raiz Quadrada");
verificarResultado("Erro: Raiz quadrada de número negativo não permitida.", calculadora.raizQuadrada(-4), "08 - Testando Raiz Quadrada Negativa");

// Teste para a função módulo
verificarResultado(1, calculadora.modulo(10, 3), "09 - Testando Módulo");

// Teste para a função fatorial
verificarResultado(120, calculadora.fatorial(5), "10 - Testando Fatorial");
verificarResultado("Erro: Fatorial de número negativo não permitido.", calculadora.fatorial(-5), "11 - Testando Fatorial Negativo");
