import clientes from './clientesJSON.js';

export function geraCSV() {
    // Cria uma string com os dados CSV
    let csv = '';
    clientes.forEach(cliente => {
    csv += cliente.matricula + ',' + cliente.nome + ',' + cliente.fone + ',' + cliente.endereco +  ',' + cliente.filhos +  ',' + cliente.rendaFamiliar + '\n';
    });

    // Cria um blob com a string CSV
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    // Salva o blob como um arquivo CSV
    if (navigator.msSaveBlob) { // IE 10+
    navigator.msSaveBlob(blob, 'clientes.csv');
    } else {
    const link = document.createElement("a");
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "clientes.csv");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    }
}


document.getElementById("btn-gerar-csv").addEventListener("click", function(event){
    event.preventDefault();
    geraCSV();
});