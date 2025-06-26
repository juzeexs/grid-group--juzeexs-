function dragstart(event) {
  
  event.dataTransfer.setData("text/plain", event.target.id);
}

function dragover(event) {
 
  event.preventDefault();
}

function drop(event) {

  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  event.target.appendChild(document.getElementById(data));
}

function verificar() {

  const OrdemCorreta = ["0", "1", "2", "3", "4"];

  
  const botoes = document.querySelectorAll(".processo");

 
  const ordem = Array.from(botoes).map((botao) => botao.id);

 
  if (ordem.join("") === OrdemCorreta.join("")) {
    alert("Ordem correta!");
    
    const div2 = document.querySelector(".div2");
    div2.style.boxShadow = "";
    const div1 = document.querySelector(".div1");
    div1.style.boxShadow = "";
  } else {
    alert("Ordem incorreta!");
    
    const div1 = document.querySelector(".div1");
    div1.style.boxShadow = "";
    const div2 = document.querySelector("");
    div2.style.boxShadow = "";
  }
}