function adicionarContato() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    if (nome && telefone) {
    const tabela = document.getElementById("tabelaContatos");
    const novaLinha = tabela.insertRow();
    const celulaNome = novaLinha.insertCell(0);
    const celulaTelefone = novaLinha.insertCell(1);

    celulaNome.textContent = nome;
    celulaTelefone.textContent = telefone;

      // Limpar os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    } else {
    alert("Por favor, preencha todos os campos.");
    }
}