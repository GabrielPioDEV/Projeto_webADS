/* Selecionando os elementos do DOM */
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

/* Removendo a classe 'close' para deixar a barra lateral aberta inicialmente */
sidebar.classList.remove("close");
    
/* Definindo a função para alternar a barra lateral */
toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

/* Definindo a função para abrir a barra lateral ao clicar na caixa de busca */
searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});

/* Definindo a função para alternar entre os modos claro e escuro */
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    // Salvando o modo escuro no armazenamento local (localStorage)
    if (body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

/* Verificando o modo escuro ao carregar a página */
window.addEventListener("load", () => {
    const darkModeStatus = localStorage.getItem("darkMode");
    if (darkModeStatus === "enabled") {
        body.classList.add("dark");
    }
});





/*===================alterações exercicios (quiz)=======================*/
/*Declaração de variáveis*/ 
const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spanDaQuantidade = document.querySelector(".spanDaQuantidade");
const textfinal = document.querySelector(".final span");
const conteudo = document.querySelector(".conteudo");
const conteudofinal = document.querySelector(".final");
const btnRestart = document.querySelector(".final button");

import questions from "./questions.js";     //importando os dados das questões

let currentIndex = 0;     //dados da questão atual (que está na tela do usuário)
let questionsCorrect = 0;   //número de acertos

btnRestart.onclick = () => {
  conteudo.style.display = "flex";
  conteudofinal.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    final();
  }
}
  //mostrar a quantidade de acertos
function final() {
  textfinal.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}`;
  conteudo.style.display = "none";
  conteudofinal.style.display = "flex";
}

function loadQuestion() {         //mostrar a quantidade de questões que ainda faltam para o quiz acabar
  spanDaQuantidade.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    /*Armazenar o botão da questão correta*/
    div.innerHTML = `       
    <button class="answer" data-correct="${answer.correct}"> 
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });
      //ao clicar em uma opção do quiz ele passa para próxima questão
  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();
