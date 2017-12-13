function turnCards(theme, cardNumber, handleEnd) {
    'use strict';

    let elements = document.querySelectorAll('.' + theme),
        gameEnd = handleEnd,
        cardLeft = cardNumber;

    let counter = 0,
        prevCard;

    function toggleCard(e) {
        e.preventDefault();

        let that = this;
        ++counter;

        function turnCard(card, back) {

            function turn() {
                card.classList.toggle('rotate');

                setTimeout(function () {
                    card.classList.toggle(card.dataset.theme);

                }, 1000);
            }

            if (back) setTimeout(turn, 2000);
            else turn();
        }

        turnCard(e.target, false);

        this.removeEventListener('click', toggleCard);

        if (counter === 2) {

            let thisCard = this,
                props = [prevCard, thisCard];

            if (prevCard.dataset.theme === this.dataset.theme && prevCard.id != this.id) {

                setTimeout(function () {

                    props[0].classList.add("invisble");
                    props[1].classList.add("invisble");

                }.bind(props), 2000);

                cardLeft -= 2;

            } else {
                turnCard(prevCard, true);
                turnCard(thisCard, true);
            }
            counter = 0;

            gameEnd(cardLeft).then(function (result) {
                setTimeout(function () {
                    alert('Good Job!');
                }, 2500);

                setTimeout(function () {
                    gameField.innerHTML = '';

                    init();
                    gameRules.classList.toggle('none');
                    gameField.classList.toggle('none');

                }, 3000);  
            });
        }

        setTimeout(function () {
            that.addEventListener('click', toggleCard);
        }, 4100);

        prevCard = this;
    }

    elements.forEach(function (item, i) {

        item.addEventListener('click', toggleCard);
    });

}