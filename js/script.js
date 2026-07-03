document.addEventListener("DOMContentLoaded", () => {
  const paginaAtual = document.body.dataset.pagina;
  const linksNavegacao = document.querySelectorAll("[data-link-pagina]");
  const anoAtual = document.querySelectorAll("[data-ano-atual]");

  linksNavegacao.forEach((link) => {
    if (link.dataset.linkPagina === paginaAtual) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  anoAtual.forEach((elemento) => {
    elemento.textContent = new Date().getFullYear();
  });

  const botaoCuriosidade = document.querySelector("[data-botao-curiosidade]");
  const caixaCuriosidade = document.querySelector("[data-caixa-curiosidade]");
  const cardConteudo = document.querySelector("[data-card-conteudo]");

  if (botaoCuriosidade && caixaCuriosidade && cardConteudo) {
    botaoCuriosidade.addEventListener("click", () => {
      const estaOculto = caixaCuriosidade.classList.contains("d-none");
      caixaCuriosidade.classList.toggle("d-none");
      cardConteudo.classList.toggle("d-none");
      botaoCuriosidade.textContent = estaOculto
        ? "Ocultar curiosidade"
        : "Mostrar curiosidade";
    });
  }

  const formularioContato = document.querySelector("[data-formulario-contato]");
  const alertaFormulario = document.querySelector("[data-alerta-formulario]");

  if (formularioContato && alertaFormulario) {
    formularioContato.addEventListener("submit", (evento) => {
      evento.preventDefault();

      const nome = document.querySelector("#nome").value.trim();
      const email = document.querySelector("#email").value.trim();
      const mensagem = document.querySelector("#mensagem").value.trim();

      if (!nome || !email || !mensagem) {
        alertaFormulario.className = "alert alert-danger alerta-customizado";
        alertaFormulario.textContent = "Preencha nome, e-mail e mensagem para enviar o formulário.";
        alertaFormulario.style.display = "block";
        return;
      }

      const assunto = encodeURIComponent(`Mensagem de ${nome} - ADS IF`);
      const corpo = encodeURIComponent(
        `Nome: ${nome}\nE-mail: ${email}\n\n${mensagem}`
      );

      window.open(`mailto:renansaravalli@gmail.com?subject=${assunto}&body=${corpo}`);

      alertaFormulario.className = "alert alert-success alerta-customizado";
      alertaFormulario.textContent = `Obrigado, ${nome}! Seu cliente de e-mail foi aberto para enviar a mensagem.`;
      alertaFormulario.style.display = "block";
      formularioContato.reset();
    });
  }
});
