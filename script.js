function mostrarCategoria(id, botao) {
  // Esconde todas as listas
  document.querySelectorAll('.lista').forEach(sec => {
    sec.classList.remove('ativo');
  });

  // Mostra a categoria clicada
  document.getElementById(id).classList.add('ativo');

  // Remove destaque de todos os botões
  document.querySelectorAll('.categorias button').forEach(btn => {
    btn.classList.remove('ativo');
  });

  // Ativa o botão clicado
  botao.classList.add('ativo');
}

function pedirWhatsApp(produto, preco) {
  const numero = "5553991433653"; // numero de celular
  const mensagem =
    `Olá! Quero fazer um pedido:\n\n` +
    `• ${produto}\n` +
    `Valor: R$ ${preco},00`;

  const url =
    `https://wa.me/${5553991433653}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
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

fetch("https://backend-ppvb.onrender.com/produtos")
  .then(res => res.json())
  .then(data => {
    const statusDiv = document.getElementById("status");

    if (data.aberto) {
      statusDiv.textContent = "🟢 Aberto agora";
      statusDiv.className = "status aberto";
    } else {
      statusDiv.textContent = "🔴 Fechado no momento";
      statusDiv.className = "status fechado";
    }
  })
  .catch(() => {
    const statusDiv = document.getElementById("status");
    statusDiv.textContent = "⚠️ Erro ao verificar status";
  });
