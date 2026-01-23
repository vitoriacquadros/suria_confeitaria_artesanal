function adicionarProduto() {
  const produto = {
    nome: document.getElementById("nome").value,
    preco: document.getElementById("preco").value,
    categoria: document.getElementById("categoria").value,
    descricao: document.getElementById("descricao").value
  };

  fetch("https://suria-backend.onrender.com/produtos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(produto)
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("msg").textContent =
      "Produto adicionado com sucesso!";
  })
  .catch(err => {
    console.error(err);
    document.getElementById("msg").textContent =
      "Erro ao adicionar produto";
  });
}
