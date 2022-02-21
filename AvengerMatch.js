document.addEventListener('DOMContentLoaded',() => {
    let cardArray = [
        {
            name: 'black panther',
            img: 'IMAGE/BlackPanther.png'
        },
        {
            name: 'black panther',
            img: 'IMAGE/BlackPanther.png'
        },
        {
            name: 'black widow',
            img: 'IMAGE/BlackWidow.png'
        },
        {
            name: 'black widow',
            img: 'IMAGE/BlackWidow.png'
        },
        {
            name: 'captain',
            img: 'IMAGE/Captain.png'
        },
        {
            name: 'captain',
            img: 'IMAGE/Captain.png'
        },
        {
            name: 'falcon',
            img: 'IMAGE/Falcon.png'
        },
        {
            name: 'falcon',
            img: 'IMAGE/Falcon.png'
        },
        {
            name: 'Hulk',
            img: 'IMAGE/Hulk.png'    
        },
        {
            name: 'Hulk',
            img: 'IMAGE/Hulk.png'   
        },
        {
            name: 'iron',
            img: 'IMAGE/Iron.png'
        },
        {
            name: 'iron',
            img: 'IMAGE/Iron.png'
        },
        {
            name: 'Thor',
            img: 'IMAGE/Thor.png'
        },
        {
            name: 'Thor',
            img: 'IMAGE/Thor.png'
        },
        {
            name: 'avenger',
            img: 'IMAGE/Avenger.png'
        },
        {
            name: 'avenger',
            img: 'IMAGE/Avenger.png'
        }
    ]
    cardArray.sort(()=> 0.5 - Math.random())
    console.log(0.5 - Math.random());


    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = [];
    let cardsChosenID = [];
    let cardsWon = [];
// tạo bảng game
    function createBoard () {
        for (let i = 0; i < cardArray.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src','IMAGE/blank2.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    //kiểm tra giá trị các cặp

    function checkForMatch(){
        let cards = document.querySelectorAll('img');
        const optionOneID = cardsChosenID[0];
        const optionTwoID = cardsChosenID[1];
        if ( cardsChosen[0] === cardsChosen[1] &&
            cardsChosenID[0] !== cardsChosenID[1]){

            cards[optionOneID].setAttribute('src', 'IMAGE/White.png');
            cards[optionTwoID].setAttribute('src', 'IMAGE/White.png');
            cardsWon.push(cardsChosen);
        }else {
            cards[optionOneID].setAttribute('src', 'IMAGE/blank2.png');
            cards[optionTwoID].setAttribute('src', 'IMAGE/blank2.png');
            
        }
        cardsChosen = [];
        cardsChosenID = [];
        resultDisplay.textContent= cardsWon.length;
        if (cardsWon.length=== cardArray.length/2){
            document.write('<h1 style = "text-align: center">Congratulation! You won!</h1>'+'<br>' + 
            '<img src =' + '"https://c.tenor.com/Use5e2lhLF0AAAAd/celebrate-yay.gif"'+' style = "align-self: center;">')
        }
    }
    //Lật thẻ bài
    function flipCard(){
        let cardID = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardID].name);
        cardsChosenID.push(cardID);
        this.setAttribute('src', cardArray[cardID].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch,500)
        }
    }
      
    createBoard();



})