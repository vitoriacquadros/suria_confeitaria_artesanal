function mostrarCategoria(id, botao) {
  document.querySelectorAll('.lista').forEach(sec => {
    sec.classList.remove('ativo');
  });

  document.getElementById(id).classList.add('ativo');

  document.querySelectorAll('.categorias button').forEach(btn => {
    btn.classList.remove('ativo');
  });

  botao.classList.add('ativo');
}

function pedirWhatsApp(produto, preco) {
  const numero = "5553991433653";
  const mensagem =
    `Olá! Quero fazer um pedido:\n\n` +
    `• ${produto}\n` +
    `Valor: R$ ${preco},00`;

  const url =
    `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}
