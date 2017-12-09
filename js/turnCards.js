(function () {
    'use strict';

    let arrBlocks = [
        {
            name: 'block1',
            el: "<div id='1' data-theme='red' class='block'></div>",
            addClass: "red",
            clicked: false
        },
        {
            name: 'block2',
            el: "<div id='2' data-theme='green' class='block'></div>",
            addClass: "green",
            clicked: false
        },
        {
            name: 'block3',
            el: "<div id='3' data-theme='red' class='block'></div>",
            addClass: "red",
            clicked: false
        },
        {
            name: 'block3',
            el: "<div id='4' data-theme='green' class='block'></div>",
            addClass: "green",
            clicked: false
        }

    ];

    let area = document.querySelector(".area");

    function renderBlocks() {
        arrBlocks.forEach(function (item) {
            let el = item.el;
            console.log('render');
            area.insertAdjacentHTML("beforeEnd", el);
        });
    };

    renderBlocks();

    let elements = document.querySelectorAll('.block'),
        counter = 0,
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
                    area.removeChild(props[0]);
                    area.removeChild(props[1]);

                }.bind(props), 2000);

            } else {
                turnCard(prevCard, true);
                turnCard(thisCard, true);
            }
            counter = 0;
        }

        setTimeout(function () {

            that.addEventListener('click', toggleCard);
        }, 4000);

        prevCard = this;
    }

    elements.forEach(function (item, i) {

        item.addEventListener('click', toggleCard);
    });

})();