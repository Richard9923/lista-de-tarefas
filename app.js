const input = document.querySelector(".input");
const button = document.querySelector(".adTarefa");
const tarefasContainer = document.querySelector(".tarefasContainer");

button.addEventListener("click", adicionandoTarefa);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    adicionandoTarefa();
  }
});

function adicionandoTarefa() {
  const tarefaDiv = document.createElement("div");
  tarefaDiv.classList.add("divTarefas");

  const tarefa = document.createElement("li");
  tarefa.innerText = input.value;
  tarefa.classList.add("tarefa");

  // buttons

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttonDiv");

  const tarefaFeitaBtn = document.createElement("button");
  tarefaFeitaBtn.classList.add("TarefaFeita");

  function tarefaFeita() {
    tarefa.style.textDecoration = "line-through";
    tarefa.style.color = "green";
  }
  tarefaFeitaBtn.addEventListener("click", tarefaFeita);

  const tarefaApagarBtn = document.createElement("button");
  tarefaApagarBtn.classList.add("TarefaApagar");

  function tarefaApagar() {
    tarefaDiv.remove();
  }

  if (input.value === "") {
    return alert("Insira uma tarefa");
  }

  input.value = "";
  tarefaApagarBtn.addEventListener("click", tarefaApagar);
  tarefaDiv.appendChild(tarefa);
  tarefasContainer.appendChild(tarefaDiv);
  tarefaDiv.appendChild(buttonDiv);
  buttonDiv.appendChild(tarefaFeitaBtn);
  buttonDiv.appendChild(tarefaApagarBtn);
}


