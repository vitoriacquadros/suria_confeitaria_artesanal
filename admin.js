function abrirLoja() {
  db.ref("status").set({
    aberto: true,
    atualizadoEm: Date.now()
  })
  .then(() => alert("✅ Loja ABERTA"))
  .catch(console.error);
}

function fecharLoja() {
  db.ref("status").set({
    aberto: false,
    atualizadoEm: Date.now()
  })
  .then(() => alert("⛔ Loja FECHADA"))
  .catch(console.error);
}

function salvarHorario() {
  const abre = document.getElementById("abre").value;
  const fecha = document.getElementById("fecha").value;

  if (!abre || !fecha) {
    alert("Preencha os horários");
    return;
  }

  db.ref("horario").set({
    abre,
    fecha,
    atualizadoEm: Date.now()
  })
  .then(() => alert("🕒 Horário salvo"))
  .catch(console.error);
}

function adicionarProduto() {
  const nome = document.getElementById("nome").value.trim();
  const preco = document.getElementById("preco").value;
  const categoria = document.getElementById("categoria").value.trim();
  const descricao = document.getElementById("descricao").value.trim();
  const foto = document.getElementById("foto").value.trim();

  if (!nome || !preco || !categoria) {
    alert("Campos obrigatórios faltando");
    return;
  }

  const id = Date.now();

  db.ref("produtos/" + id).set({
    nome,
    preco: Number(preco),
    categoria,
    descricao,
    foto,
    ativo: true,
    criadoEm: Date.now()
  })
  .then(() => {
    alert("🍰 Produto adicionado");
    limparFormularioProduto();
  })
  .catch(console.error);
}

function limparFormularioProduto() {
  ["nome","preco","categoria","descricao","foto"]
    .forEach(id => document.getElementById(id).value = "");
}
