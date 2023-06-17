function fazerLogin(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obter os valores do usuário e senha inseridos pelo usuário
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Verificar se o login e a senha estão corretos
  if (email === "ricardotelles@gmail.com" && senha === "admin") {
    // Login válido, redirecionar para a página inicial
    window.location.href = "menu.html";
  } else {
    // Login inválido, exibir mensagem de erro
    alert("Login ou senha incorretos. Tente novamente.");
  }
}