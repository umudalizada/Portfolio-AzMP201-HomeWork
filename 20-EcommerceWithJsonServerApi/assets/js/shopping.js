{
  /* <div class="forcard">
<div class="miniimg">
    <img src="./assets/images/homeImg/kisspng-lancel-handbag-leather-clothing-accessories-women-bag-5abc8960466306 1.png" alt="">
</div>
<div class="head">
    <h4>Hotel Magique  Love and Magique Tote Bag</h4>
    <div class="forp">
        <p>Size: XS</p>
        <p>Color: Grey</p>
    </div>
    <p>Delivery: 25-32 days</p>
    <p>Quality</p>
    <div class="select">
        <div class="plus">+</div>
        <p class="count">5</p>
        <div class="minus">-</div>
    </div>
</div>
<div class="fovarite">
    
        <img src="./assets/images/homeImg/icons/Vector (5).svg" alt="">
        <h3> Favorite
    

</div>
<div class="fovaritetwo">
    <h4>US $20.00</h4>
    <div class="trashbox">
        <img src="./assets/images/homeImg/icons/Vector (6).svg" alt="">
        <h3> delete
    </div>


</div>


</div> */
}

let basket = JSON.parse(localStorage.getItem("basket")) || [];
let like = JSON.parse(localStorage.getItem("like")) || [] 

const leftSide = document.querySelector(".left");
const totalSum = document.querySelector(".totalSum");
const deleteBasket = document.querySelector(".deleteBasket");
const confirm = document.querySelector(".confirm");




basket.forEach((element) => {
    total()
  
  const card = document.createElement("div");
  const backBag = document.createElement("div");
  const imgSrc = document.createElement("img");
  const head = document.createElement("div");
  const title = document.createElement("h4");
  const category = document.createElement("div");
  const size = document.createElement("p");
  const color = document.createElement("p");
  const delivery = document.createElement("p");
  const quality = document.createElement("p");
  const select = document.createElement("div");
  const plus = document.createElement("div");
  const count = document.createElement("p");
  const minus = document.createElement("div");
  const fovarite = document.createElement("div");
  const favoriteİcon = document.createElement("i");
  const favoriteText = document.createElement("h3");
  const fovaritetwo = document.createElement("div");
  const price = document.createElement("h4");
  const trashBox = document.createElement("div");
  const trashİcon = document.createElement("img");
  const trashText = document.createElement("h3");

  card.className = "forcard";
  backBag.className = "miniimg";
  head.className = "head";
  category.className = "forp";
  select.className = "select";
  plus.className = "plus";
  minus.className = "minus";
  count.className = "count";
  fovarite.className = "fovarite";
  fovaritetwo.className = "fovaritetwo";
  trashBox.className = "trashBox";
  favoriteİcon.className = "fa-regular fa-heart"
  imgSrc.src = element.image;
  title.textContent = element.title.slice(0, 25);
  price.textContent = "$ " + element.price*element.count;
  minus.textContent = "-";
  plus.textContent = "+";
  count.textContent = element.count;
  size.textContent = "Size: XS";
  color.textContent = "Color: Grey";
  trashText.textContent = "Delete";
  favoriteText.textContent= "Favorite"
  trashİcon.src = "./assets/images/homeImg/icons/Vector (6).svg";

  backBag.append(imgSrc);
  head.append(title, category, delivery, quality, select);
  category.append(size, color);
  select.append(minus, count, plus);
  fovarite.append(favoriteİcon, favoriteText);
  fovaritetwo.append(price, trashBox);
  trashBox.append(trashİcon, trashText);
  card.append(backBag, head, fovarite, fovaritetwo);
  leftSide.append(card);

  plus.addEventListener("click", () => {
    element.count++;
    count.textContent = element.count;
    price.textContent = "$ " + element.price * element.count;
    localStorage.setItem("basket", JSON.stringify(basket));
    total()

  });
  
  minus.addEventListener("click", () => {
    if (element.count > 1) {
      element.count--;
      count.textContent = element.count;
      price.textContent = "$ " + element.price * element.count;
    } else {
      card.remove();
      basket = basket.filter((elem) => elem.id !== element.id);
    }
    localStorage.setItem("basket", JSON.stringify(basket));
    total()

  });
  
  trashİcon.addEventListener("click", () => {
    card.remove();
    basket = basket.filter((elem) => elem.id !== element.id);
    localStorage.setItem("basket", JSON.stringify(basket));
    total()

  });

 
  favoriteİcon.addEventListener("click", (e) => {

    let CheckItemIndex = like.findIndex(item => item.id === element.id);
    if (CheckItemIndex !== -1) {
        like.splice(CheckItemIndex, 1);
        favoriteİcon.className="fa-regular fa-heart";
        favoriteİcon.style.color = "black"
    } else {
        like.push(element);
        favoriteİcon.className="fa-solid fa-heart";
        favoriteİcon.style.color = "red"
    }
    localStorage.setItem("like", JSON.stringify(like));
});

if (like.find((item) => item.id === element.id)) {
    favoriteİcon.className="fa-solid fa-heart";
    favoriteİcon.style.color = "red"
}
    
});


function total(){
    let total = basket.reduce((acc,elem)=>{
        return acc + elem.price*elem.count

    },0)
    total=Math.round(total*100)/100
    totalSum.textContent=total

}

deleteBasket.addEventListener("click",()=>{
  leftSide.remove();
  basket=[];
  localStorage.setItem("basket",JSON.stringify(basket));
  total()

})

confirm.addEventListener("click",()=>{
    if(basket.length == 0){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Basket is empty!!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }else{
        console.log(basket)

    }
    
})



