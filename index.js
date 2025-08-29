// head heart number increase
const hearts = document.getElementsByClassName("fa-heart");
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    const headHeart = document.getElementById("head-heart");
    const recentNumber = parseInt(headHeart.innerText);
    headHeart.innerText = recentNumber + 1;
  });
}


const coins= document.getElementById('coinCount');

// call button functionality

// for 1st div
const subtitle1=document.getElementById('sub-1');
const helpNumber1= document.getElementById('num1');
const callButton = document.getElementById("call-button1").addEventListener('click',function(){
    alert(subtitle1.innerText+"\n"+helpNumber1.innerText);
    let totalCoin= parseInt(coins.innerText);
    if(totalCoin >=20){
        totalCoin=totalCoin-20;
    } else{
        alert('Unsufficient Coin, minimum 20 coins require to make a call');
    }
    coins.innerText=totalCoin;

});





