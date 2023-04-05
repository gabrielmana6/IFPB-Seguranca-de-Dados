import clientes from './clientesJSON.js';

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

function matriculaExist(matricula) {
    let exists = false;
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].matricula === matricula) {
            exists = true;
            break;
        }
    }
    return exists;
}

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

    const { matricula, nome, telefone, endereco, filhos, rendaFamiliar } = form;

    if (matriculaExist(matricula)) {
        window.alert('Já existe um cliente com essa matrícula.');
    } else {
        cadastraCliente(matricula, nome, telefone, endereco, filhos, rendaFamiliar);
        window.alert('Cliente cadastrado com sucesso.');
    }
});