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
