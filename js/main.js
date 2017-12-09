function ready() {
    'use strict';
    let myCardFactory = createCard();
    let cardField = document.querySelector(".game__field");
    let arrCards = [],
        theme = 'madagascar',
        cardNumber = 24;

    for (let i = 0; i < cardNumber; i++) {
        let myCard = myCardFactory.makeCard("big", {
            id: i,
            theme: theme,
            picture: 'madagascar1'
        });
        cardField.insertAdjacentHTML("beforeEnd", myCard.el);
        arrCards.push(myCard);
    }

    turnCards(theme);
}

document.addEventListener("DOMContentLoaded", ready);

