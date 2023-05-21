let quoteParag = document.querySelector("#quote-parag")
let quoteBtn = document.querySelector("#quote-btn")
let quotes = [
    '"Your body language shapes who you are." - Amy Cuddy',
    '"The pose is the soul of the picture." - J. H. Lartigue',
    '"Every person\'s story is written in the body." - Philippa Gregory',
    '"Pose for the camera until you find your perfect angle." - Tyra Banks',
    '"A great pose is not just about how you look, but also about how you feel." - Lindsay Adler',
    '"Photography is an art of observation. It\'s about finding something interesting in an ordinary place... I\'ve found it has little to do with the things you see and everything to do with the way you see them." - Elliott Erwitt',
    '"Dont just stand there, lets get to it, Strike a pose , there is nothing to it " - Madonna Cicoone',
    '"Being natural is simply a pose, and the most irritating pose i know" - Oscar Wilde',
    '"Sometimes i pose, but sometimes i pose as posing" - Stella Benson',
    '" Cause im a musician, im not really good at posing and being a model, like, modelling" - Amy Winehouse'
]


quoteBtn.addEventListener("click", function() {
    let randomQuote = quotes[Math.floor( Math.random() * quotes.length) ]
   quoteParag.textContent = randomQuote
   nextQuote() 
})

    
  function nextQuote() {
    setTimeout(() => {
        let randomQuote = quotes[Math.floor( Math.random() * quotes.length) ]
   console.log(randomQuote)
   quoteParag.textContent = randomQuote
 
    }, 1000);  

  }
  $(function() {
const $gallery = $('.gallery a').simpleLightbox();
});
