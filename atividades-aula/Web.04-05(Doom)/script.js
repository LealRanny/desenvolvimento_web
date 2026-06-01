let campoTarefa = document.getElementById("tarefa");
let campoPrioridade = document.getElementById("prioridade");
let botaoAdicionar = document.getElementById("botao-adicionar");

let listaTarefasContainer = document.getElementById("lista-tarefas");

botaoAdicionar.addEventListener("click", function() {
    let textoTarefa = campoTarefa.value;
    let prioridade = campoPrioridade.value; //aqui pega o que o user digitou dentro do campo

    if (textoTarefa === ""){
        alert("Por favor, digite uma tarefa!");
        return;
    }

    let cardNovo = document.createElement("div");
    cardNovo.classList.add("card", "col-md-4", "m-2", "text-white");
    if (prioridade === "alta") {
        cardNovo.classList.add("bg-danger"); 
    } else if (prioridade === "media") {
        cardNovo.classList.add("bg-warning", "text-dark"); 
    } else if (prioridade === "baixa") {
        cardNovo.classList.add("bg-success"); 
    }

    let corpoCard = document.createElement("div"); 
    corpoCard.classList.add("card-body"); 

    let paragrafoTexto = document.createElement("p"); 
    paragrafoTexto.classList.add("card-text");
    paragrafoTexto.innerText = textoTarefa;

    let botaoMudar = document.createElement("button");
    botaoMudar.classList.add("btn", "btn-sm", "btn-light", "mt-2");
    botaoMudar.innerText = "Mudar Prioridade";

    botaoMudar.addEventListener("click", function() {
        let corAtualAlta = cardNovo.classList.contains("bg-danger");
        let corAtualMedia = cardNovo.classList.contains("bg-warning");
        let corAtualBaixa = cardNovo.classList.contains("bg-success");
        cardNovo.classList.remove("bg-danger", "bg-warning", "bg-success", "text-white", "text-dark");
        
        if (corAtualAlta) {
            cardNovo.classList.add("bg-warning", "text-dark");
        } else if (corAtualMedia) {
            cardNovo.classList.add("bg-success", "text-white");
        } else if (corAtualBaixa) {
            cardNovo.classList.add("bg-danger", "text-white");
        }
    });

    corpoCard.appendChild(paragrafoTexto); 
    corpoCard.appendChild(botaoMudar);
    cardNovo.appendChild(corpoCard);
    
    cardNovo.appendChild(corpoCard);
    listaTarefasContainer.appendChild(cardNovo);

    campoTarefa.value = "";
});

