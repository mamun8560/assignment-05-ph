// head heart number increase
const hearts = document.getElementsByClassName("fa-heart");
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    const headHeart = document.getElementById("head-heart");
    const recentNumber = parseInt(headHeart.innerText);
    headHeart.innerText = recentNumber + 1;
  });
}

const coins = document.getElementById("coinCount");

// copy button functionality

const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const card = button.closest(".shadow-xl");
    const numberElement = card.querySelector("h1[id^='num']");
    const numberText = numberElement.innerText;

    try {
      const headCopy = document.getElementById("head-copy");
      let currentCopy = parseInt(headCopy.innerText);
      headCopy.innerText = currentCopy + 1;
      await navigator.clipboard.writeText(numberText);

      const myInput = document.getElementById("myInput");
      if (myInput) {
        myInput.value = numberText;
      }

      alert(`Copied and pasted: ${numberText}`);
    } catch (err) {
      console.error("Failed: ", err);
    }
  });
});

// call button functionality

// for 1st div
const subtitle1 = document.getElementById("sub-1");
const helpNumber1 = document.getElementById("num1");
const callButton = document
  .getElementById("call-button1")
  .addEventListener("click", function () {
    alert(subtitle1.innerText + "\n" + helpNumber1.innerText);
    let totalCoin = parseInt(coins.innerText);
    if (totalCoin >= 20) {
      totalCoin = totalCoin - 20;
    } else {
      alert("Unsufficient Coin, minimum 20 coins require to make a call");
    }
    coins.innerText = totalCoin;
  });



// for 2nd div

const subtitle2 = document.getElementById("sub-2");
const helpNumber2 = document.getElementById("num2");
const callButton2 = document
  .getElementById("call-button2")
  .addEventListener("click", function () {
    alert(subtitle2.innerText + "\n" + helpNumber2.innerText);
    let totalCoin = parseInt(coins.innerText);
    if (totalCoin >= 20) {
      totalCoin = totalCoin - 20;
    } else {
      alert("Unsufficient Coin, minimum 20 coins require to make a call");
    }
    coins.innerText = totalCoin;
  });

  // for 3rd div

const subtitle3 = document.getElementById("sub-3");
const helpNumber3 = document.getElementById("num3");
const callButton3 = document
  .getElementById("call-button3")
  .addEventListener("click", function () {
    alert(subtitle3.innerText + "\n" + helpNumber3.innerText);
    let totalCoin = parseInt(coins.innerText);
    if (totalCoin >= 20) {
      totalCoin = totalCoin - 20;
    } else {
      alert("Unsufficient Coin, minimum 20 coins require to make a call");
    }
    coins.innerText = totalCoin;
  });


  // for 4th div

const subtitle4 = document.getElementById("sub-4");
const helpNumber4 = document.getElementById("num4");
const callButton4 = document
  .getElementById("call-button4")
  .addEventListener("click", function () {
    alert(subtitle4.innerText + "\n" + helpNumber4.innerText);
    let totalCoin = parseInt(coins.innerText);
    if (totalCoin >= 20) {
      totalCoin = totalCoin - 20;
    } else {
      alert("Unsufficient Coin, minimum 20 coins require to make a call");
    }
    coins.innerText = totalCoin;
  });


// for 5th div

const subtitle5 = document.getElementById("sub-5");
const helpNumber5 = document.getElementById("num5");
const callButton5 = document
  .getElementById("call-button5")
  .addEventListener("click", function () {
    alert(subtitle5.innerText + "\n" + helpNumber5.innerText);
    let totalCoin = parseInt(coins.innerText);
    if (totalCoin >= 20) {
      totalCoin = totalCoin - 20;
    } else {
      alert("Unsufficient Coin, minimum 20 coins require to make a call");
    }
    coins.innerText = totalCoin;
  });
  
// for 6th div

const subtitle6 = document.getElementById("sub-6");
const helpNumber6 = document.getElementById("num6");
const callButton6 = document
  .getElementById("call-button6")
  .addEventListener("click", function () {
    alert(subtitle6.innerText + "\n" + helpNumber6.innerText);
    let totalCoin = parseInt(coins.innerText);
    if (totalCoin >= 20) {
      totalCoin = totalCoin - 20;
    } else {
      alert("Unsufficient Coin, minimum 20 coins require to make a call");
    }
    coins.innerText = totalCoin;
  });



// for 7th div

const subtitle7 = document.getElementById("sub-7");
const helpNumber7 = document.getElementById("num7");
const callButton7 = document
  .getElementById("call-button7")
  .addEventListener("click", function () {
    alert(subtitle7.innerText + "\n" + helpNumber7.innerText);
    let totalCoin = parseInt(coins.innerText);
    if (totalCoin >= 20) {
      totalCoin = totalCoin - 20;
    } else {
      alert("Unsufficient Coin, minimum 20 coins require to make a call");
    }
    coins.innerText = totalCoin;
  });

  
// for 8th div

const subtitle8 = document.getElementById("sub-8");
const helpNumber8 = document.getElementById("num8");
const callButton8 = document
  .getElementById("call-button8")
  .addEventListener("click", function () {
    alert(subtitle8.innerText + "\n" + helpNumber8.innerText);
    let totalCoin = parseInt(coins.innerText);
    if (totalCoin >= 20) {
      totalCoin = totalCoin - 20;
    } else {
      alert("Unsufficient Coin, minimum 20 coins require to make a call");
    }
    coins.innerText = totalCoin;
  });



  // for 9th div

const subtitle9 = document.getElementById("sub-9");
const helpNumber9 = document.getElementById("num9");
const callButton9 = document
  .getElementById("call-button9")
  .addEventListener("click", function () {
    alert(subtitle9.innerText + "\n" + helpNumber9.innerText);
    let totalCoin = parseInt(coins.innerText);
    if (totalCoin >= 20) {
      totalCoin = totalCoin - 20;
    } else {
      alert("Unsufficient Coin, minimum 20 coins require to make a call");
    }
    coins.innerText = totalCoin;
  });