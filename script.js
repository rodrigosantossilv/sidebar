var menuItem = document.querySelectorAll('.item-menu');
var caminhõesContainer = document.getElementById('caminhoes');

function selectLink() {
    menuItem.forEach((item) => {
        item.classList.remove('ativo');
    });

    this.classList.add('ativo');

    // Mostra ou esconde o container de caminhões
    if (this.querySelector('.txt-link').textContent === "Caminhoes") {
        caminhõesContainer.style.display = 'flex'; // Mostra os cards
    } else {
        caminhõesContainer.style.display = 'none'; // Esconde os cards
    }
}

menuItem.forEach((item) => item.addEventListener('click', selectLink));

// Expandir menu
var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function() {
    menuSide.classList.toggle('expandir');
});
