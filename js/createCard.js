function createCard() {
    function BigCard(name, desc) {
        this.cardType = "big";
        this.id = desc.id || 0;
        this.theme = desc.theme;
        this.picture = desc.picture || '';
        this.size = " game__card--big";
        this.class = desc.class || (this.theme + this.size);
        this.el = `<div id='${this.id}' class='${this.class}' data-theme='${this.picture}'></div>`;
        this.checked = false;
    }

    function MediumCard(name, desc) {
        this.cardType = "medium";
        this.id = desc.id || 0;
        this.theme = desc.theme;
        this.picture = desc.picture || '';
        this.size = " game__card--medium";
        this.class = desc.class || (this.theme + this.size);
        this.el = `<div id='${this.id}' class='${this.class}' data-theme='${this.picture}'></div>`;
        this.checked = false;
    }

    function SmallCard(name, desc) {
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

    CardFactory.prototype.makeCard = function (name, desc) {
        let cardClass = null;

        if (name === "big") cardClass = BigCard;
        else if (name === "medium") cardClass = MediumCard;
        else if (name === "small") cardClass = SmallCard;
        else return false;

        return new cardClass(name, desc);
    }

    return new CardFactory();
}
