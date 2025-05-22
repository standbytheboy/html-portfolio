function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Adiciona eventos aos botões de abrir os modais
const openButtons = document.querySelectorAll('.openModal');
openButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const modalId = button.getAttribute('data-modal');
        openModal(modalId);
    });
});

// Adiciona eventos aos botões de fechar
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const modal = button.closest('.modal');
        modal.style.display = "none";
    });
});

// Fecha o modal ao clicar fora dele
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Fecha todos os modais ao pressionar a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" || event.key === "Esc") {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(function(modal) {
            if (modal.style.display === "block") {
                modal.style.display = "none";
            }
        });
    }
});


const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Alterna a classe 'active' para mostrar/ocultar o menu
});

// Animações das Sections

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".project, .experience, .title").forEach(el => observer.observe(el));


// Animação do H1
const text = "LUCAS MORAIS";
let i = 0;
function type() {
  if (i < text.length) {
    document.querySelector("h1").textContent += text.charAt(i);
    i++;
    setTimeout(type, 200);
  }
}
type();