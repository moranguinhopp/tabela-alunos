function adicionarAluno() {
    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value) || 0;
    const nota2 = parseFloat(document.getElementById("nota2").value) || 0;
    const nota3 = parseFloat(document.getElementById("nota3").value) || 0;
    const frequencia = parseInt(document.getElementById("frequencia").value) || 0;

    const mediaFinal = ((nota1 + nota2 + nota3) / 3).toFixed(1);
    const situacao = (mediaFinal >= 6.0 && frequencia >= 75) ? "Aprovado" : "Reprovado";

    const tabela = document.getElementById("tabelaAlunos").getElementsByTagName("tbody")[0];
    const novaLinha = tabela.insertRow();

    novaLinha.insertCell(0).innerText = nome;
    novaLinha.insertCell(1).innerText = nota1.toFixed(1);
    novaLinha.insertCell(2).innerText = nota2.toFixed(1);
    novaLinha.insertCell(3).innerText = nota3.toFixed(1);
    novaLinha.insertCell(4).innerText = mediaFinal;
    novaLinha.insertCell(5).innerText = frequencia + "%";

    const situacaoCell = novaLinha.insertCell(6);
    situacaoCell.innerText = situacao;
    situacaoCell.classList.add(situacao === "Aprovado" ? "situacao-aprovado" : "situacao-reprovado");

    // Limpar os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("frequencia").value = "";
}
