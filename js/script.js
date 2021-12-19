let cards = document.getElementsByClassName('card');

console.log(cards.length);



for(let card of cards){
    card.addEventListener('click', () => {
        for(let cart of cards){
            if(cart.className == 'card active' && cart != card){
                cart.classList.remove('active');
                card.classList.add('active');
            }
        }
    });
}