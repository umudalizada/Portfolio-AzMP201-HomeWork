{
  /* <div class="rightBox">
                    <div class="item">
                        <div class="discount">30%</div>
                        <div class="close"><img src="./assets/images/homeImg/icons/close.svg" alt=""></div>
                        <img class="bag" src="./assets/images/homeImg/kisspng-bag-laptop-backpack-knomo-beauchamp-5b0bf6a37cde46 7.png"
                            alt="">
                        <div class="stars">
                            <img src="./assets/images/homeImg/icons/star.svg" alt="">
                            <img src="./assets/images/homeImg/icons/star.svg" alt="">
                            <img src="./assets/images/homeImg/icons/star.svg" alt="">
                            <img src="./assets/images/homeImg/icons/star.svg" alt="">
                            <img src="./assets/images/homeImg/icons/star.svg" alt="">
                        </div>
                        <p class="about">Shoulder Bag Leather Bag Leather undertakes laborious physical physical</p>
                        <div class="price">
                            <h4>$130.00</h4>
                            <p>From $340.00</p>
                        </div>
                        <button>Add to card</button>

                    </div> */
}
let like = JSON.parse(localStorage.getItem("like")) || [];
let basket = JSON.parse(localStorage.getItem("basket")) || [];

const searchInput = document.querySelector(".searchInput");
const searchButton = document.querySelector(".search");
const AtoZ = document.querySelector(".AtoZ");
const ZtoA = document.querySelector(".ZtoA");
const lowHigh = document.querySelector(".lowHigh");
const highLow = document.querySelector(".highLow");
const rightBox = document.querySelector(".rightBox");
const deleteAll = document.querySelector(".deleteAll");

function createLike(likedItems) {
  rightBox.innerHTML = "";
  
  likedItems.forEach((element) => {
    const item = document.createElement("div");
    const newBox = document.createElement("div");
    const imgSrc = document.createElement("img");
    const closeBox = document.createElement("div");
    const closeIcon = document.createElement("img");
    const about = document.createElement("p");
    const stars = document.createElement("div");
    const price = document.createElement("h4");
    const addButton = document.createElement("button");

    item.className = "item";
    newBox.className = "new";
    imgSrc.className = "bag";
    closeBox.className = "close";
    about.className = "about";
    stars.className = "stars";

    newBox.textContent = "NEW";
    imgSrc.src = element.image;
    closeIcon.src = "./assets/images/homeImg/icons/close.svg";
    about.textContent = element.title.slice(0, 25);
    price.textContent = "$ " + element.price;
    addButton.textContent = "Add to cart";

    addButton.setAttribute("data", element.id);

    rightBox.appendChild(item);
    item.append(newBox, closeBox, imgSrc, stars, about, price, addButton);
    closeBox.appendChild(closeIcon);
    for (let i = 0; i <= 5; i++) {
      const star = document.createElement("img");
      star.src = "./assets/images/homeImg/icons/star.svg";
      stars.appendChild(star);
    }

    closeIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      item.remove();
      like = like.filter((elem) => elem.id != element.id);
      localStorage.setItem("like", JSON.stringify(like));
    });

    addButton.addEventListener("click", (e) => {
      e.stopPropagation();
      let check = like.find((elem) => elem.id == e.target.getAttribute("data"));
      let control = basket.find((elem) => elem.id == check.id);
      if (control) {
        control.count++;
      } else {
        check.count = 1;
        basket.push(check);
      }
      localStorage.setItem("basket", JSON.stringify(basket));
    });
  });
}

createLike(like);

searchInput.addEventListener("input", () => {
  const filteredData = like.filter((card) => card.title.toLowerCase().includes(searchInput.value.toLowerCase()));
  createLike(filteredData);
});

searchButton.addEventListener("click", () => {
  const filteredData = like.filter((card) => card.title.toLowerCase().includes(searchInput.value.toLowerCase()));
  createLike(filteredData);
});

AtoZ.addEventListener("click", () => {
  like.sort((a, b) => a.title.localeCompare(b.title));
  createLike(like);
});

ZtoA.addEventListener("click", () => {
  like.sort((a, b) => b.title.localeCompare(a.title));
  createLike(like);
});

highLow.addEventListener("click", () => {
  like.sort((a, b) => b.price - a.price);
  createLike(like);
});
lowHigh.addEventListener("click", () => {
  like.sort((a, b) => a.price - b.price);
  createLike(like);
});


deleteAll.addEventListener("click",()=>{
  rightBox.remove();
  like=[];
  localStorage.setItem("like",JSON.stringify(like))
})
