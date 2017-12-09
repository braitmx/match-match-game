function createCard() {
    function BigCard(name, desc) {
        this.cardType = "big";
        this.theme = "game__card--" + desc.theme;
        this.size = " game__card--big";
        this.class = desc.class || (this.theme + this.size);
        this.el = `<div class='${this.class}'></div>`;
        this.checked = false;
    }

    function MediumCard(name, desc) {
        this.cardType = "medium";
        this.theme = desc.theme;
        this.size = " game__card--medium";
        this.class = desc.class || (this.theme + this.size);
        this.el = `<div class='${this.class}'></div>`;
        this.checked = false;
    }

    function SmallCard(name, desc) {
        this.cardType = "small";
        this.theme = desc.theme;
        this.size = " game__card--small";
        this.class = desc.class || (this.theme + this.size);
        this.el = `<div class='${this.class}'></div>`;
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
