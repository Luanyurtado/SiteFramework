// Aguarda até que o conteúdo do DOM esteja totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
  
    // Seleciona o menu lateral e o botão de abrir/fechar
    const sideMenu = document.getElementById('side-menu');
    const menuButton = document.querySelector('.menu-icon');
    const closeButton = document.querySelector('.close-btn');
  
    // ---------------------------------------------
    // 1. Abre e fecha o menu lateral
    // ---------------------------------------------
    // Função para alternar a visibilidade do menu
    function toggleMenu() {
      // Verifica a posição atual do menu
      if (sideMenu.style.right === '-300px') {
        sideMenu.style.right = '0'; // Mostra o menu
      } else {
        sideMenu.style.right = '-300px'; // Esconde o menu
      }
    }
  
    // Adiciona os eventos de clique nos botões
    menuButton.addEventListener('click', toggleMenu); // Abre o menu
    closeButton.addEventListener('click', toggleMenu); // Fecha o menu
  
   
    // ---------------------------------------------
    // 4. Scroll suave para links de navegação
    // ---------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link
  
        // Obtém o destino do link
        const target = document.querySelector(this.getAttribute('href'));
  
        // Calcula a posição do destino ajustada para o header fixo
        const offset = 80;
        const position = target.offsetTop - offset;
  
        // Faz o scroll suave até o destino
        window.scrollTo({
          top: position,
          behavior: 'smooth',
        });
      });
    });
  });