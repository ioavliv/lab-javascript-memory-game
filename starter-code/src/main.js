var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];
var pairsClicked = 0;
var pairsGuessed = 0;
var turn = [];
var memoryGame = new MemoryGame(cards, pairsClicked, pairsGuessed);

$(document).ready(function(event) {
  memoryGame.shuffleCards(memoryGame.cards)
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  })

  // Add all the div's to the HTML
  $('#memory_board').html(html)

  // Bind the click event of each element to a function
  $(".card div").on("click", function(event) {
  let card = event.currentTarget
  $(card).toggleClass("back front");
  $(card).siblings().toggleClass("back front");
  //do not allow player to click same card twice by removing event listener
  turn.push(card)

  if(turn.length == 2){ 

    $("#pairs_clicked").html(++pairsClicked);

    if(memoryGame.checkIfPair($(turn[0]).attr("name"), $(turn[1]).attr("name"))){ 
      $("#pairs_guessed").html(++pairsGuessed)
      $(turn[0]).siblings().unbind()
      $(turn[1]).siblings().unbind()
      turn.pop()
      turn.pop()
      if(pairsGuessed==12){
        alert("You win!")
      }
      return
    }

    setTimeout(function(){
      $(turn[0]).toggleClass("back front")
      $(turn[0]).siblings().toggleClass("back front")
      $(turn[1]).toggleClass("back front")
      $(turn[1]).siblings().toggleClass("back front")
      turn.pop()
      turn.pop()
    }, 300)
  }


  });

});


