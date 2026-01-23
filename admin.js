/* =========================
   ADICIONAR PRODUTO (ADMIN)
========================= */
function adicionarProduto() {
  const nome = document.getElementById("nome").value.trim();
  const preco = Number(document.getElementById("preco").value);
  const categoria = document.getElementById("categoria").value.trim();
  const descricao = document.getElementById("descricao").value.trim();

  if (!nome || !preco || !categoria) {
    alert("Preencha nome, preço e categoria");
    return;
  }

  fetch("https://backend-ppvb.onrender.com/produtos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome,
      preco,
      categoria,
      descricao
    })
  })
    .then(res => {
      if (!res.ok) throw new Error("Erro no backend");
      return res.json();
    })
    .then(() => {
      alert("✅ Produto adicionado com sucesso");
      limparFormulario();
    })
    .catch(err => {
      console.error(err);
      alert("Erro ao adicionar produto");
    });
}

/* =========================
   LIMPAR FORMULÁRIO
========================= */
function limparFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("descricao").value = "";
}
