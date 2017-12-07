function ready() {

    function BigCard(name, desc) {
        this.cardType = "big";
        this.width = desc.width || 11.3;
        this.height = desc.height || 220;
    }

    function MediumCard(name, desc) {
        this.cardType = "medium";
        this.width = desc.width || 15;
        this.height = desc.height || 220;
    }

    function SmallCard(name, desc) {
        this.cardType = "small";
        this.width = desc.width || 18.5;
        this.height = desc.height || 330;
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

    let myCardFactory = new CardFactory();

    let myCard = myCardFactory.makeCard("big", {
        cardType: "big",
        width: 11.3,
        height: 230
    });

    let myCard1 = myCardFactory.makeCard("medium", {});

    console.log(myCard1);
}

document.addEventListener("DOMContentLoaded", ready);