

// head heart number increase
const hearts = document.getElementsByClassName("fa-heart");
for (const heart of hearts) {
  
  heart.addEventListener("click", function () {
    const headHeart = document.getElementById("head-heart");
    const recentNumber=parseInt(headHeart.innerText);
    headHeart.innerText = recentNumber + 1;
  });
}
