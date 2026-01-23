const API_URL = "https://backend-ppvb.onrender.com";

/* =========================
   CATEGORIAS
========================= */
function mostrarCategoria(id, botao) {
  document.querySelectorAll(".lista").forEach(sec => {
    sec.classList.remove("ativo");
  });

  document.getElementById(id).classList.add("ativo");

  document.querySelectorAll(".categorias button").forEach(btn => {
    btn.classList.remove("ativo");
  });

  botao.classList.add("ativo");
}

/* =========================
   WHATSAPP
========================= */
function pedirWhatsApp(produto, preco) {
  const numero = "5553991433653";
  const mensagem =
    `Olá! Quero fazer um pedido:\n\n` +
    `• ${produto}\n` +
    `Valor: R$ ${Number(preco).toFixed(2)}`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

/* =========================
   CARREGAR PRODUTOS
========================= */
async function carregarProdutos() {
  try {
    const res = await fetch(`${API_URL}/produtos`);
    const produtos = await res.json();
    renderizarProdutos(produtos);
  } catch (err) {
    console.error("Erro ao carregar produtos:", err);
  }
}

function renderizarProdutos(produtos) {
  const docesSection = document.getElementById("Doces");
  const salgadosSection = document.getElementById("salgados");

  docesSection.innerHTML = "";
  salgadosSection.innerHTML = "";

  produtos.forEach(produto => {
    const card = document.createElement("div");
    card.className = "produto";

    card.innerHTML = `
      <img src="${produto.foto || 'fotofakedoce.jpeg'}" alt="${produto.nome}">
      <div class="info">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao || ""}</p>
        <strong>R$ ${Number(produto.preco).toFixed(2)}</strong>
        <button onclick="pedirWhatsApp('${produto.nome}', ${produto.preco})">
          Pedir
        </button>
      </div>
    `;

    if (produto.categoria?.toLowerCase() === "doces") {
      docesSection.appendChild(card);
    } else if (produto.categoria?.toLowerCase() === "salgados") {
      salgadosSection.appendChild(card);
    }
  });
}

carregarProdutos();
