const API_URL = "https://backend-ppvb.onrender.com";

/* =========================
   ADICIONAR PRODUTO
========================= */

function adicionarProduto() {
  const nome = document.getElementById("nome").value.trim();
  const preco = document.getElementById("preco").value;
  const categoria = document.getElementById("categoria").value.trim();
  const descricao = document.getElementById("descricao").value.trim();
  const mensagem = document.getElementById("mensagem");

  if (!nome || !preco || !categoria) {
    mensagem.textContent = "⚠️ Preencha nome, preço e categoria";
    mensagem.style.color = "red";
    return;
  }

  fetch(`${API_URL}/produtos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome,
      preco: Number(preco),
      categoria,
      descricao
    })
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Erro ao salvar produto");
      }
      return res.json();
    })
    .then(data => {
      mensagem.textContent = "✅ Produto adicionado com sucesso";
      mensagem.style.color = "green";

      limparFormulario();
      console.log("Produto salvo:", data);
    })
    .catch(err => {
      console.error(err);
      mensagem.textContent = "❌ Erro ao adicionar produto";
      mensagem.style.color = "red";
    });
}

/* =========================
   UTILIDADES
========================= */

function limparFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("descricao").value = "";
}
