
function getDeckOfCards() {
    var cardCount = [52];
var deck = [];
var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
    for (var rankCounter = 0; rankCounter < 13; rankCounter++) {
        // console.log(ranks[rankCounter] + suits[suitCounter]);
        deck.push(ranks[rankCounter] + suits[suitCounter]);
    }
}
return deck;
}

function shuffleDeck(deck) {
    for(var i = 0; i < 52; i++) {
        var tempCard = deck[i]; 
        var randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempCard;
    }  
}
var testDeck = createDeck();
shuffleDeck(testDeck);
console.log(testDeck);


function renderDeck(deck)
{
    document.getElementById("deck").innerHTML = "";

    for(let i = 0; i < deck.length; i++)
    {
        let card = document.createElement("div");
        let value = document.createElement("div");
        let suit = document.createElement("div");
        card.className = "card";
        value.className = "value";
        suit.className = "suit" + deck[i].Suit;

        value.innerHTML = deck[i].Value;
        card.appendChild(value);
        card.appendChild(suit);

        document.getElementById("deck").appendChild(card);
    }
}

