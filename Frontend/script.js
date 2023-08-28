/* Selecionando os elementos do DOM */
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

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
