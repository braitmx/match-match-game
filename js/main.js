function ready() {
    'use strict';
    let myCardFactory = createCard();
    let cardField = document.querySelector(".game__field");
    let arrCards = [],
        cardNumber = 24;

    for (let i = 0; i < cardNumber; i++) {
        let myCard = myCardFactory.makeCard("big", {
            theme: 'madagascar'
        });
        cardField.insertAdjacentHTML("afterBegin", myCard.el);
        arrCards.push(myCard);
    }
}

document.addEventListener("DOMContentLoaded", ready);

