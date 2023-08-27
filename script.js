const QUOTETEXT = document.querySelector("#quote")

const arr = [
    "Battle not with monsters, lest ye become a monster, and if you gaze into the abyss, the abyss gazes also into you",
    "May the Force be with you",
    "Im the king of the world",
    "My mama always said life was like a box of chocolates. You never know what you're gonna get",
    "Houston, we have a problem",
    "Magic Mirror on the wall, who is the fairest one of all?",
    "Here's Johnny!",
    "To infinity and beyond!",
    "Great men are not born great, they grow great",
    "Hasta la vista, baby"
]

arr.sort(function() {
    return Math.random() - 0.5;
})

QUOTETEXT.textContent = arr[0];