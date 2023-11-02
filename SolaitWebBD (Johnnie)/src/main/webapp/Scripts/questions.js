/*configuração das questoes que fazem parte do quiz*/

/*armazenar dados das questões: Pergunta, alternativas e respostas*/ 
export default [  
    
  {
    question: "1- O que é uma biblioteca em programação?",
    answers: [
      { option: "A) É um conjunto de funções que estão dentro de uma linguagem e podem ser utilizadas mediante sua importação", correct: true },
      { option: "B) É um conjunto de funções que só podem ser usadas por quem as fez", correct: false },
      { option: "C) É um recurso utilizado para que o desenvolvedor possa executar o código em modo debug, estritamente na linguagem C    ", correct: false },
    ],
  },
  {
    question: "2- Qual a sintaxe da função main na linguagem C?",
    answers: [
      { option: "A) (main) integer{}", correct: false },
      { option: "B) int main() {}", correct: true },
      { option: "C) integer {}(main)", correct: false },
    ],
  },
  {
    question: "3- Baseado na linguagem C, qual a opção que traz o comando de saída e o de entrada respectivamente?",
    answers: [
      { option: "A) printarf() e scanear()", correct: false },
      { option: "B) scanf() e printf()", correct: false },
      { option: "C) printf() e scanf()  ", correct: true },
    ],
  },
  {
    question: "4- Baseado na linguagem C, qual a opção que mostra uma variável do tipo decimal, inteiro, caracter e lógica respectivamente?",
    answers: [
      { option: "A) float, int, boolean, char", correct: false },
      { option: "B) int, char, float, boolean", correct: false },
      { option: "C) float, int, char, boolean", correct: true },
    ],
  },
  {
      question: "5- Para que serve a função main?",
      answers: [
        { option: "A) serve como uma função qualquer", correct: false },
        { option: "B) serve como o ponto final para que o programa execute", correct: false },
        { option: "C) serve como ponto inicial para que o programa possa ser executado ", correct: true },
      ],
    },
    {
    question: "6- Qual das opções apresenta um estrutura condicional?",
    answers: [
      { option: "A) if() {} else() {}", correct: true },
      { option: "B)  while() {}", correct: false },
      { option: "C) for() {}", correct: false },
    ],
  },
  {
    question: "7- Qual a lógica da estrutura condicional if else?",
    answers: [
      { option: "A) é estabelecida uma repetição, se ela ela é atendida o bloco executa o if, senão ele executa o else", correct: false },
      { option: "B) é estabelecida uma condição, se ela ela é atendida o bloco executa o else, senão ele executa o if", correct: false },
      { option: "C) é estabelecida uma condição, se ela ela é atendida o bloco executa o if, senão ele executa o else", correct: true },
    ],
  },
  {
    question: "8- É possível utilizar somente o if em um código?",
    answers: [
      { option: "A) Sim, ele pode ser usado sozinho", correct: true },
      { option: "B) Não, ele não pode ser usado sozinho", correct: false },
      { option: "C) Sim, mas somente se declarar uma variável pra ele", correct: false },
    ],
  },
  {
    question: "9- O que significa os dois &&?",
    answers: [
      { option: "A) ele representa um operador lógico, ele analisa duas condições e só retorna verdadeiro quando ambas condições forem falsas", correct: false },
      { option: "B) ele representa um operador lógico, ele analisa duas condições e só retorna verdadeiro quando ambas condições forem verdadeiras", correct: true },
      { option: "C) ele representa um operador lógico, ele analisa duas condições e só retorna verdadeiro quando uma condição for verdeira e a outra falsa ", correct: false },
    ],
  },
  {
    question: "10- Qual opção corresponde aos operadores lógicos maior que e menor que, respectivamente?",
    answers: [
      { option: "A) > e >", correct: true },
      { option: "B) > e <", correct:  false},
      { option: "C) < e >", correct: false },
    ],
  },
  {
    question: "11- Escolha a opção que apresente somente estruturas de repetição",
    answers: [
      { option: "A) for, while e if else", correct: false },
      { option: "B) while, switch case, for", correct: false },
      { option: "C) for, while, do while", correct: true },
    ],
  },
  {
    question: "12- Como é composta a estrutura básica de um for?",
    answers: [
      { option: "A) inicialização, condicional e iteração", correct: true },
      { option: "B) inicialização, contador e repetição", correct:  false},
      { option: "C) inicialização, condicional e while", correct: false },
    ],
  },
  {
    question: "13- O que é um for?",
    answers: [
      { option: "A) é uma estrutura de condição que tem o ciclo executado por um tempo ou iteração e na quantidade de vezes que a maquina permitir", correct:  false},
      { option: "B) é uma estrutura de repetição que seu ciclo será executado por um tempo ou condição e na quantidade de vezes explicitada", correct:  true},
      { option: "C) é uma estrutura de repetição que seu ciclo será executado infinitamente ", correct: false },
    ],
  },
  {
    question: "14- Como se chama quando eu coloco um for dentro de outro for?",
    answers: [
      { option: "A) For aninhado", correct: true },
      { option: "B) For alinhado", correct:  false},
      { option: "C) For indireto", correct: false },
    ],
  },
  ];