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
  const numero = "5599999999999"; // TROQUE PELO SEU NÚMERO
  const mensagem =
    `Olá! Quero fazer um pedido:\n\n` +
    `• ${produto}\n` +
    `Valor: R$ ${preco},00`;

  const url =
    `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
}
