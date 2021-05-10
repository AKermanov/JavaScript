function printDeckOfCards(cards) {

    function makeCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = { 'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663' };

        if (!validFaces.includes(face) || !validSuits.hasOwnProperty(suit)) throw new Error(`${face}${suit}`);
        return `${face}${validSuits[suit]}`;
    }

    try {
        let result = cards.map(c => {
            let face = c.substr(0, c.length - 1);
            let suit = c.substr(c.length - 1, 1);
            return makeCard(face, suit);
        }).join(' ');
        console.log(result);
    } catch (error) {
        console.log(`Invalid card: ${error.message}`);
    }
}
