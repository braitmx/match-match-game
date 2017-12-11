function createCard() {
    function BigCard(difficulty, desc) {
        this.cardType = "big";
        this.id = desc.id || 0;
        this.theme = desc.theme;
        this.picture = desc.picture || '';
        this.size = " game__card--big";
        this.class = desc.class || (this.theme + this.size);
        this.el = `<div id='${this.id}' class='${this.class}' data-theme='${this.picture}'></div>`;
        this.checked = false;
    }

    function MediumCard(difficulty, desc) {
        this.cardType = "medium";
        this.id = desc.id || 0;
        this.theme = desc.theme;
        this.picture = desc.picture || '';
        this.size = " game__card--medium";
        this.class = desc.class || (this.theme + this.size);
        this.el = `<div id='${this.id}' class='${this.class}' data-theme='${this.picture}'></div>`;
        this.checked = false;
    }

    function SmallCard(difficulty, desc) {
        this.cardType = "small";
        this.id = desc.id || 0;
        this.theme = desc.theme;
        this.picture = desc.picture || '';
        this.size = " game__card--small";
        this.class = desc.class || (this.theme + this.size);
        this.el = `<div id='${this.id}' class='${this.class}' data-theme='${this.picture}'></div>`;
        this.checked = false;
    }

    function CardFactory() { };

    CardFactory.prototype.makeCard = function (difficulty, desc) {
        let cardClass = null;

        if (difficulty === "hard") cardClass = BigCard;
        else if (difficulty === "medium") cardClass = MediumCard;
        else if (difficulty === "easy") cardClass = SmallCard;
        else return false;

        return new cardClass(difficulty, desc);
    }

    return new CardFactory();
}
