function game(skirt, diff) {
    'use strict';

    let myCardFactory = createCard();
    let cardField = document.querySelector(".game__field"),
        timerBlock = document.querySelector(".footer__timer"),
        timer = 0,
        isEnd = false,
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

    function startTimer(timer) {
        // cardField.children.length >= 2
        if (!isEnd) {

            timerBlock.innerHTML = '';
            timerBlock.innerHTML += timer;
            timer++;

            setTimeout(function () {
                startTimer(timer);
            }, 1000);
        }
        else timer = 0;
    }
    startTimer(timer);

    let gameEnd = function (cardleft) {
        return new Promise(function (resolve, reject) {

            if (cardleft < 2) {
                resolve();

                setTimeout(function () {
                    isEnd = true;
                }, 2000);
                
            }
        });
    }

    turnCards(theme, cardNumber, gameEnd);
}



