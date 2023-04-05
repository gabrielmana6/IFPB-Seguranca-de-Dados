import clientes from './clientesJSON.js';

  let index = 0;

  for (const cliente of clientes) {
    const container = document.querySelector('.table');

    const item = createItemCard(cliente);

    container.insertAdjacentHTML('beforeend', item);

    index++;
}


function createItemCard(cliente) {
    return  `
        <td> ${index+1} </td>
        <td> ${cliente.matricula} </td>
        <td> ${cliente.nome} </td>
        <td> ${cliente.fone} </td>
        <td> ${cliente.endereco} </td>
        <td> ${cliente.filhos} </td>
        <td> ${cliente.rendaFamiliar} </td> `
}


//Parte do código para abrir o modal de cadastro

// seleciona o botão e a página modal
let btnModal = document.querySelector(".btn");
let modal = document.querySelector(".modal");

// seleciona o elemento <span> que fecha a página modal
let span = document.getElementsByClassName("close")[0];

// adiciona um evento de clique ao botão que mostra a página modal
btnModal.onclick = function() {
  modal.style.display = "block";
}

// adiciona um evento de clique ao elemento <span> que fecha a página modal
span.onclick = function() {
  modal.style.display = "none";
}

// adiciona um evento de clique fora da página modal que fecha a modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//Abrindo Modal de Atualização
let btnModalAtt = document.querySelectorAll(".btn")[1];
let modalAtt = document.querySelectorAll(".modal")[1];
let spanAtt = document.getElementsByClassName("close")[1];


btnModalAtt.onclick = function() {
  modalAtt.style.display = "block";
  createDynamicEnrollment();
}

//Fechando Modal de Atualização
spanAtt.onclick = function() {
  modalAtt.style.display = "none";
  //Falta Zerar a Função createDynamicEnrollment()
}

window.onclick = function(event) {
  if (event.target == modalAtt) {
    modalAtt.style.display = "none";
  }
}

//Função Matrículas Dinâmicas para Atualização
function createDynamicEnrollment() {
  for (const cliente of clientes){
    const inserirOptions = document.querySelector('#selectMatricula');
    const matricula = `<option>${cliente.matricula}</option>`;
    inserirOptions.insertAdjacentHTML('beforeend', matricula);
  } 
}

export { createItemCard };