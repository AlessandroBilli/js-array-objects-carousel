'use strict';

document.addEventListener('DOMContentLoaded', function () {
    
    let immagini = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
    let indiceCorrente = 0;
    let intervalloTempo = 3000; // Intervallo di tempo in millisecondi (3 secondi)

    let items = document.querySelectorAll('.item');
    let prevButton = document.querySelector('.prev');
    let nextButton = document.querySelector('.next');
    let autoScrollInterval; // Variabile per salvare l'intervallo per il auto-scrolling

    function inizializzaCarosello() {
        mostraImmagineCorrente();
        prevButton.addEventListener('click', mostraImmaginePrecedente);
        nextButton.addEventListener('click', mostraImmagineSuccessiva);
        avviaAutoScorrimento(); // Avvia lo scorrimento automatico subito dopo l'inizializzazione del carosello
    }

    function avviaAutoScorrimento() {
        autoScrollInterval = setInterval(mostraImmagineSuccessiva, intervalloTempo);
    }

    function mostraImmagineCorrente() {
        items.forEach(function (item, index) {
            item.style.display = index === indiceCorrente ? 'block' : 'none';
        });
    }

    function mostraImmaginePrecedente() {
        indiceCorrente = (indiceCorrente - 1 + immagini.length) % immagini.length;
        mostraImmagineCorrente();
        resetAutoScroll();
    }

    function mostraImmagineSuccessiva() {
        indiceCorrente = (indiceCorrente + 1) % immagini.length;
        mostraImmagineCorrente();
        resetAutoScroll();
    }

    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        avviaAutoScorrimento();
    }

    inizializzaCarosello();
});


