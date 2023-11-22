'use strict';

document.addEventListener('DOMContentLoaded', function () {
    
    let immagini = [
        {src: "img/01.jpg", title: "Img1", text: "Descrizione 1"},
        {src: "img/02.jpg", title: "Img 2", text: "Descrizione 2"},
        {src: "img/03.jpg", title: "Img 3", text: "Descrizione 3"},
        {src: "img/04.jpg", title: "Img 4", text: "Descrizione 4"},
        {src: "img/05.jpg", title: "Img 5", text: "Descrizione 5"}
    ];


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
            if (index === indiceCorrente) {
                item.style.display = 'block';
                item.innerHTML = `
                    <img src="${immagini[indiceCorrente].src}" alt="${immagini[indiceCorrente].title}">
                    <div class="caption">
                        <h3>${immagini[indiceCorrente].title}</h3>
                        <p>${immagini[indiceCorrente].text}</p>
                    </div>
                `;
            } else {
                item.style.display = 'none';
            }
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


