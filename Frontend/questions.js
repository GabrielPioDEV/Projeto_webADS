/*configuração das questoes que fazem parte do quiz*/

/*armazenar dados das questões: Pergunta, alternativas e respostas*/ 
export default [  
    {
      question: "1- O que é uma variável?",
      answers: [
        { option: "A) É algo que consegue reter e representar um valor ou expressão", correct: true },
        { option: "B) É uma palavra", correct: false },
        { option: "C) faz referencia a um nome de cachorro", correct: false },
      ],
    },
    {
      question: "2- Quais são as vantagens do javascript em relação a outras tecnologias web?",
      answers: [
        { option: "A) Ele não apresenta vantagens", correct: false },
        { option: "B) Melhora na interação, boa interface de usuário, frameworks", correct: true },
        { option: "C) Péssima interação, não ser web", correct: false },
      ],
    },
    {
      question: "3- Quais as características do JS?",
      answers: [
        { option: "A) Não ser orientada a objeto", correct: false },
        { option: "B) Não ter compatibilidade com muitas plataformas", correct: false },
        { option: "C) Código aberto, Orientação a objeto", correct: true },
      ],
    },
    {
      question: "4- Javascript é uma linguagem de programaçaõ?",
      answers: [
        { option: "A) Depende do ponto de vista", correct: false },
        { option: "B) Não", correct: false },
        { option: "C) Sim", correct: true },
      ],
    },
    {
        question: "5- O que faz o compilador?",
        answers: [
          { option: "A) Não existe isso na programação", correct: false },
          { option: "B) Só analisa o código", correct: false },
          { option: "C) Lê e analisa o código da aplicação", correct: true },
        ],
      },
  ];