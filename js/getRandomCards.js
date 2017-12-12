function getRandomCards(arrCards, cNumber) {

    let ramdomCards = arrCards,
        cardNumber = cNumber,
        counter1 = cNumber,
        cardIndex,
        cardRow = {};

    switch (cardNumber) {
        case 10:
            cardRow.cards = 5;
            cardRow.rows = 2;
            break;
        case 18:
            cardRow.cards = 6;
            cardRow.rows = 3;
            break;
        case 24:
            cardRow.cards = 6;
            cardRow.rows = 4;
            break;
        default:
            cardRow.cards = 0;
            cardRow.rows = 0;
    }

    return function returnCard() {

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        cardIndex = getRandomInt(1, cardRow.rows + 1);

        if (ramdomCards[cardIndex] < cardRow.cards) {
            ramdomCards[cardIndex] += 1;
            counter1--;

            return cardIndex;

        } else if (counter1 > 0) returnCard();

        return cardIndex;
    }
}