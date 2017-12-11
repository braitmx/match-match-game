function game(skirt, diff) {
    'use strict';

    let myCardFactory = createCard();
    let cardField = document.querySelector(".game__field"),
        theme = skirt || '',
        difficulty = diff,
        cardNumber;

    switch (difficulty) {
        case 'easy':
            cardNumber = 10;
            break;
        case 'medium':
            cardNumber = 18;
            break;
        case 'hard':
            cardNumber = 24;
            break;
        default:
            cardNumber = 0;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    } // картинок не равное число

    for (let i = 0; i < cardNumber; i++) {

        let myCard = myCardFactory.makeCard(difficulty, {
            id: i,
            theme: theme,
            picture: theme + getRandomInt(1, 5)
        });
        cardField.insertAdjacentHTML("beforeEnd", myCard.el);
    }

    turnCards(theme);
}



