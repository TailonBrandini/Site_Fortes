function trocarImagem(event) {
  const input = event.target;
  if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
          const imagemPreview = document.getElementById("foto-perfil");
          imagemPreview.src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
  }
}

function confirmarCampo() {
  const campoNome = document.querySelector("#nome")
  const inputNome = document.querySelector("#inputNome").value
  const inputSobreNome = document.querySelector("#inputSobreNome").value
  const nomeCompleto = `${inputNome} ${inputSobreNome}`
  campoNome.textContent = nomeCompleto
  alert("Cadastro Realizado!")
}