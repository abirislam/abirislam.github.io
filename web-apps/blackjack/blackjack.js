let cards = []
let hasBlackjack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sum = 0
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

const userName = prompt("What's your name?")
let player = {
    name: userName,
    money: 0
}

function startGame() {

    playerEl.textContent = "User: " + player.name + " | Money: " + player.money
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    hasBlackjack = false
    isAlive = true
    renderGame()
}

function renderGame() {
    sum = 0
    for (let count = 0; count < cards.length; count++) {
        sum += cards[count]
    }
    cardsEl.textContent = "Your cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i]
        if ( i != cards.length - 1) {
            cardsEl.textContent += ", "
        }
    }
    sumEl.textContent = "Your sum: " + sum
    if (sum <= 20) {
        messageEl.textContent = "Would you like to draw another card?"
    } else if (sum === 21) {
        messageEl.textContent = "Congrats, you got Blackjack!"
        hasBlackjack = true
        player.money += 100
    } else {
        messageEl.textContent = "Sorry, you're out of the game!"
        isAlive = false
    }
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13 + 1)
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10;
    } else {
        return randomCard
    }
}

function newCard() {
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard()
        cards.push(card)
        renderGame()
    }
}