function calcularNotaFiscal() {
    const valorServico = parseFloat(document.getElementById("valorServico").value);
    const taxaImposto = parseFloat(document.getElementById("taxaImposto").value);
    const imposto = (valorServico * taxaImposto) / 100;
    const total = valorServico + imposto;

    const notaFiscalTexto = `
        Nota Fiscal de Serviço
        --------------------------
        Valor do Serviço: R$ ${valorServico.toFixed(2)}
        Imposto (${taxaImposto}%): R$ ${imposto.toFixed(2)}
        Total a Pagar: R$ ${total.toFixed(2)}
    `;

    alert(notaFiscalTexto);

    return false;
}
