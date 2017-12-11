function game(skirt) {
    'use strict';

    let myCardFactory = createCard();
    let cardField = document.querySelector(".game__field"),
        theme = skirt || '',
        cardNumber = 24;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    } // картинок не равное число

    for (let i = 0; i < cardNumber; i++) {
        
        let myCard = myCardFactory.makeCard("big", {
            id: i,
            theme: theme,
            picture: theme + getRandomInt(1, 5)
        });
        cardField.insertAdjacentHTML("beforeEnd", myCard.el);
    }

    turnCards(theme);
}



