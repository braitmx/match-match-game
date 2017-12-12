function game(skirt, diff) {
    'use strict';

    let myCardFactory = createCard();
    let cardField = document.querySelector(".game__field"),
        theme = skirt || '',
        difficulty = diff,
        cardNumber,
        ramdomCards = [],
        getCard;

    for (let i = 0; i < 5; i++) {
        ramdomCards[i] = 0;
    }

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

    getCard = getRandomCards(ramdomCards, cardNumber);

    for (let i = 0; i < cardNumber; i++) {

        let myCard = myCardFactory.makeCard(difficulty, {
            id: i,
            theme: theme,
            picture: theme + getCard()
        });
        cardField.insertAdjacentHTML("beforeEnd", myCard.el);
    }

    turnCards(theme);
}



