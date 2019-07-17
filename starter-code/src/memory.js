class MemoryGame {
  constructor(cards, pairsClicked, pairsGuessed){
    this.cards = cards;
    this.pairsClicked = pairsClicked;
    this.pairsGuessed = pairsGuessed;
  }

  shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array
  }
  
  checkIfPair(card1, card2) {
    if(card1 == card2){
      return true;
    } else{
      return false;
    }
  }

}