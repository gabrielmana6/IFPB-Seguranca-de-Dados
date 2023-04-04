import clientes from './clientesJSON.js';
//import { atualizaUsuarios } from './clientes-script.js';
import {geraCSV} from './gerar-csv.js';

function getForm() {
    let matricula = document.getElementById('matricula').value;
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('fone').value;
    let endereco = document.getElementById('endereco').value;
    let filhos = document.getElementById('filhos').value;
    let rendaFamiliar = document.getElementById('renda-familiar').value;

    return {
        matricula: matricula,
        nome: nome,
        telefone: telefone,
        endereco: endereco,
        filhos: filhos,
        rendaFamiliar: rendaFamiliar
    }
}

//function matriculaExist(matricula) {}

function cadastraCliente(matricula, nome, telefone, endereco, filhos, rendaFamiliar) {
    
    const novoCliente = {
        "matricula": matricula,
        "nome": nome,
        "fone": telefone,
        "endereco": endereco,
        "filhos": filhos,
        "rendaFamiliar": rendaFamiliar
    }

    clientes.push(novoCliente);
    console.log(clientes);
}

document.getElementById("btn-submit").addEventListener("click", function(event){
    event.preventDefault();
    const form = getForm();

    const { matricula, nome, telefone, endereco, filhos, rendaFamiliar } = form
    
    cadastraCliente(matricula, nome, telefone, endereco, filhos, rendaFamiliar);
    //atualizaUsuarios();
    //geraCSV();
});

