/*========== Código javascript para a barra lateral ==========*/

/*========== Colocando interação na divs class para que elas possam ser selecionadas ==========*/
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

<<<<<<< HEAD
// Função para definir o tema
function setTheme(theme) {
    body.classList.remove("dark", "light");
    body.classList.add(theme);
=======

/*========== Colocando a função de clicar nas divs. ("Transformando elas em botões") ==========*/
toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
>>>>>>> 40bbe089387dd2a17fcd694a7b335060e80fe99c
    
    if (theme === "dark") {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";
    }
    
    // Armazenar a preferência do usuário em um cookie
    document.cookie = `theme=${theme}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}

// Função para verificar o tema no cookie
function checkTheme() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'theme') {
            setTheme(value);
            break;
        }
    }
}

// Adicionar evento de clique para o botão de alternância de tema
modeSwitch.addEventListener("click" , () => {
    if (body.classList.contains("dark")) {
        setTheme("light");
    } else {
        setTheme("dark");
    }
});

// Adicionar evento de clique para o botão de toggle da sidebar
toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

// Adicionar evento de clique para o botão de pesquisa
searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});

// Quando a página carrega, verifique o tema no cookie
window.addEventListener("load", () => {
    checkTheme();
});
