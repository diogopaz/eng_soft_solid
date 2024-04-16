# Princípios de Design no Código de Cálculo de Área de Formas

Este é um README explicando como o código fornecido respeita os princípios de design SOLID: Responsabilidade Única, Aberto/Fechado, Princípio de Demeter e Substituição de Liskov.

## Responsabilidade Única

Cada classe no código tem uma única responsabilidade bem definida:

- A classe base `Forma` define a interface para calcular a área de uma forma.
- As subclasses `Circulo` e `Retangulo` implementam a lógica específica para calcular a área de um círculo e retângulo, respectivamente.
- A função `calcularArea()` é responsável por calcular a área de uma forma genérica, sem se preocupar com a implementação específica de cada forma.

## Aberto/Fechado

O código segue o Princípio Aberto/Fechado, que afirma que uma classe deve estar aberta para extensão, mas fechada para modificação:

- A classe base `Forma` é abstrata e fechada para modificação. Ela define um contrato (`area()`) que suas subclasses devem implementar, permitindo a extensão do comportamento sem modificar o código existente.
- As subclasses `Circulo` e `Retangulo` estendem a classe base `Forma` e implementam o método `area()`, adicionando novos comportamentos sem modificar a classe base.

## Princípio de Demeter

O código respeita o Princípio de Demeter, que sugere que um objeto deve conhecer o mínimo possível sobre a estrutura interna de outros objetos:

- A função `calcularArea()` não acessa diretamente os atributos das formas (`Circulo` e `Retangulo`). Em vez disso, ela apenas chama o método `area()` de um objeto `Forma`, mantendo a interação restrita ao nível da interface pública.

## Substituição de Liskov

O código segue o Princípio de Substituição de Liskov (LSP), que afirma que as instâncias de uma classe base devem poder ser substituídas pelas instâncias de suas subclasses sem alterar a corretude do programa:

- As subclasses `Circulo` e `Retangulo` podem ser substituídas pela classe base `Forma` em qualquer lugar do código onde `Forma` é esperada, sem alterar o comportamento esperado do programa.