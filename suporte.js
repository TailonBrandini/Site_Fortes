document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const successMessage = document.querySelector(".success-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário para a administração

    // Exibindo a mensagem de sucesso
    successMessage.style.display = "block";
  });
});

document.getElementById('my-form').onsubmit = function () {
  alert('Sua mensagem foi enviada com sucesso!');
};