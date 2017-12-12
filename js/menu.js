
let gameRules = document.querySelector(".game__rules"), 
    gameField = document.querySelector(".game__field");

let menu = document.querySelectorAll(".menu__title"),
    menuList = document.querySelectorAll(".menu__list"),
    currentMenuList,
    menuListItems = document.querySelectorAll(".menu__list-item"),
    skirt = '',
    difficulty = '';

function handleMenu(e) {
    e.preventDefault();

    currentMenuList = e.path[1].childNodes[3];

    if (currentMenuList !== undefined) currentMenuList.classList.toggle('active');
};

function handleMenuList() {
    let dropdown = this.parentNode.classList;

    if (this.dataset.skirt) skirt = this.dataset.skirt;
    if (this.dataset.difficulty) difficulty = this.dataset.difficulty;

    if (dropdown.contains('active')) dropdown.toggle('active');
}

function handleStart() {

    if (skirt != '' && difficulty != '') {

        gameRules.classList.toggle('none'); 
        gameField.classList.toggle('none'); 

        closeDropdownMenu(menuList);

        menuListItems.forEach(function (item, i) {
            observable.removeListener(item);
        });

        menu.forEach(function (item, i) {
            observable.removeListener(item);
        });

        game(skirt, difficulty);
        
    } else alert('Choose Skirt & Difficulty!');
}

function closeDropdownMenu(el) {

    el.forEach(function (item, i) {
        if (item.classList.contains('active')) item.classList.toggle('active');
    });
}

let Observable = function () {
    this.subscribers = [];
    this.callbaks = [];
}

Observable.prototype = {
    subscribe: function (subscriber, callback) {

        subscriber.addEventListener('click', callback);

        this.subscribers.push(subscriber);
        this.callbaks.push(callback);

    },

    unsubscribe: function (unsubscriber, callback) {
        for (i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === unsubscriber) {
                this.callbaks.splice(i, 1);
                this.subscribers.splice(i, 1);
            }
        }
    },

    removeListener: function (subscriber) {
        for (i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === subscriber) {
                this.subscribers[i].removeEventListener('click', this.callbaks[i]);
            }
        }
    }
}

let observable = new Observable();

menu.forEach(function (item, i) {
    if (item.id === 'start') observable.subscribe(item, handleStart);
    else observable.subscribe(item, handleMenu);
});

menuListItems.forEach(function (item, i) {
    observable.subscribe(item, handleMenuList);
});



