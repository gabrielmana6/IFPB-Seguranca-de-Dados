import clientes from './clientesJSON.js';

function getForm() {
    let matricula = document.getElementById('selectMatricula').value;
    let nome = document.getElementById('atualiza-nome').value;
    let telefone = document.getElementById('atualiza-fone').value;
    let endereco = document.getElementById('atualiza-endereco').value;
    let filhos = document.getElementById('atualiza-filhos').value;
    let rendaFamiliar = document.getElementById('atualiza-renda-familiar').value;

    return {
        matricula: matricula,
        nome: nome,
        telefone: telefone,
        endereco: endereco,
        filhos: filhos,
        rendaFamiliar: rendaFamiliar
    }
}

function atualizaCliente(matricula, nome, telefone, endereco, filhos, rendaFamiliar) {     
    const novoCliente = {
        "matricula": matricula,
        "nome": nome,
        "fone": telefone,
        "endereco": endereco,
        "filhos": filhos,
        "rendaFamiliar": rendaFamiliar
    }
    
    let index = clientes.findIndex(cliente => cliente.matricula === matricula);
    clientes[index] = novoCliente;
}

document.getElementById("btn-atualizar-cliente").addEventListener("click", function(event){
    event.preventDefault();
    const form = getForm();

    const { matricula, nome, telefone, endereco, filhos, rendaFamiliar } = form;

    atualizaCliente(matricula, nome, telefone, endereco, filhos, rendaFamiliar);
    window.alert('Cliente atualizado com sucesso.');
});