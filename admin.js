/* =========================
   ADICIONAR PRODUTO (ADMIN)
========================= */
function adicionarProduto() {
  const nome = document.getElementById("nome").value;
  const preco = document.getElementById("preco").value;
  const categoria = document.getElementById("categoria").value;
  const descricao = document.getElementById("descricao").value;

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
      if (!res.ok) throw new Error("Erro ao salvar");
      return res.json();
    })
    .then(() => {
      document.getElementById("mensagem").textContent =
        "✅ Produto cadastrado com sucesso!";
      carregarProdutos();
    })
    .catch(() => {
      document.getElementById("mensagem").textContent =
        "❌ Erro ao adicionar produto";
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

function carregarProdutos() {
  fetch("https://backend-ppvb.onrender.com/produtos")
    .then(res => res.json())
    .then(produtos => {
      const lista = document.getElementById("lista-produtos");
      lista.innerHTML = "";

      produtos.forEach(p => {
        const div = document.createElement("div");
        div.className = "produto";

        div.innerHTML = `
          <strong>${p.nome}</strong><br>
          R$ ${p.preco}<br>
          ${p.descricao}
        `;

        lista.appendChild(div);
      });
    })
    .catch(() => {
      console.error("Erro ao carregar produtos");
    });
}

document.addEventListener("DOMContentLoaded", carregarProdutos);
