# Princípios de Projeto no Código de Cálculo de Área de Formas

Este é um código simples em Javascript que implementa o cálculo da área de diferentes formas geométricas respeita os princípios de design SOLID: Responsabilidade Única, Aberto/Fechado e Substituição de Liskov. Além disso, também respeita o Princípio de Demeter.

## Responsabilidade Única

Cada classe no código tem uma única responsabilidade bem definida:

- A classe base [`Forma`](main.js#L3)
 define a interface para calcular a área de uma forma.
    ```javascript
    class Forma {
        area() {
            throw new Error("Método 'area' deve ser implementado por subclasses");
        }
    }
- As subclasses [`Circulo`](main.js#L9) e [`Retangulo`](main.js#L20) implementam a lógica específica para calcular a área de um círculo e retângulo, respectivamente.
    ```javascript
    class Circulo extends Forma {
        constructor(raio) {
            super();
            this.raio = raio;
        }
        area() {
            return Math.PI * this.raio ** 2;
        }
    }

    class Retangulo extends Forma {
        constructor(largura, altura) {
            super();
            this.largura = largura;
            this.altura = altura;
        }
        area() {
            return this.largura * this.altura;
        }
    }
- A função [`calcularArea()`](main.js#L32) é responsável por calcular a área de uma forma genérica, sem se preocupar com a implementação específica de cada forma.
    ```javascript
    function calcularArea(forma) {
        return forma.area();
    }
## Aberto/Fechado

O código segue o Princípio Aberto/Fechado, que afirma que uma classe deve estar aberta para extensão, mas fechada para modificação:

- A classe base [`Forma`](main.js#L3) é abstrata e fechada para modificação. Ela define um contrato ([`area()`](main.js#L4)) que suas subclasses devem implementar, permitindo a extensão do comportamento sem modificar o código existente.
- As subclasses [`Circulo`](main.js#L9) e [`Retangulo`](main.js#L20) estendem a classe base [`Forma`](main.js#L3) e implementam o método [`area()`](main.js#L4), adicionando novos comportamentos sem modificar a classe base.

## Substituição de Liskov

O código segue o Princípio de Substituição de Liskov, que afirma que as instâncias de uma classe base devem poder ser substituídas pelas instâncias de suas subclasses sem alterar a corretude do programa:

- As subclasses [`Circulo`](main.js#L9) e [`Retangulo`](main.js#L20) podem ser substituídas pela classe base [`Forma`](main.js#L3) em qualquer lugar do código onde [`Forma`](main.js#L3) é esperada, sem alterar o comportamento esperado do programa.

## Princípio de Demeter

O código respeita o Princípio de Demeter, que sugere que um objeto deve conhecer o mínimo possível sobre a estrutura interna de outros objetos:

- A função [`calcularArea()`](main.js#L32) não acessa diretamente os atributos das formas ([`Circulo`](main.js#L9) e [`Retangulo`](main.js#L20)). Em vez disso, ela apenas chama o método [`area()`](main.js#L4) de um objeto [`Forma`](main.js#L3), mantendo a interação restrita ao nível da interface pública.


