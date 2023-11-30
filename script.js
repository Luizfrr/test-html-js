function calcularNotaFiscal() {
    const valorServico = parseFloat(document.getElementById("valorServico").value);
    const taxaImposto = parseFloat(document.getElementById("taxaImposto").value);
    const imposto = (valorServico * taxaImposto) / 100;
    const total = valorServico + imposto;
    const xmlDoc = document.implementation.createDocument(null, 'NotaFiscal', null);

    const valorServicoElem = xmlDoc.createElement('ValorServico');
    valorServicoElem.textContent = valorServico.toFixed(2);

    const impostoElem = xmlDoc.createElement('Imposto');
    impostoElem.textContent = imposto.toFixed(2);

    const totalElem = xmlDoc.createElement('Total');
    totalElem.textContent = total.toFixed(2);

    xmlDoc.documentElement.appendChild(valorServicoElem);
    xmlDoc.documentElement.appendChild(impostoElem);
    xmlDoc.documentElement.appendChild(totalElem);

    const xmlString = new XMLSerializer().serializeToString(xmlDoc);

    alert(`Nota Fiscal em XML:\n\n${xmlString}`);

    return false;
}
