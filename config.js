// Função para atualizar o tamanho da fonte
function updateFontSize() {
    var fontSize = document.getElementById("fontSizeRange").value;
    document.body.style.fontSize = fontSize + "px";
    document.getElementById("fontSizeLabel").textContent = fontSize + "px";
  }
  
  // Evento para atualizar o tamanho da fonte ao mover a barra
  document.getElementById("fontSizeRange").addEventListener("input", updateFontSize);
  
  // Função para ativar/desativar o modo noturno
  document.getElementById("darkMode").addEventListener("change", function() {
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.toggle("dark-mode");
    }
  });
  
  // Função para ativar/desativar os atalhos
  document.getElementById("shortcuts").addEventListener("change", function() {
    if (this.checked) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
  });
  
  // Função para manipular eventos de teclado
  function handleKeyDown(event) {
    if (event.ctrlKey && event.key === "s") {
      event.preventDefault();
      alert("Você pressionou Ctrl + S!");
    }
  }
  
  // Atualiza o tamanho da fonte inicialmente
  updateFontSize();
  