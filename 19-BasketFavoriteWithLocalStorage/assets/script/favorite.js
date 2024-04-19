let fav = JSON.parse(localStorage.getItem("fav")) || [];
const basket = JSON.parse(localStorage.getItem("basket")) || [];

const allcards=document.querySelector(".allcards")



fav.forEach(element => {
    createElement(element,allcards)
});

function createElement(elem, page) {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    const productIcon = document.createElement("div");
    productIcon.className = "product-header";

    const iconPosition = document.createElement("i");
    iconPosition.className = "fas fa-heart favorite-icon";
    iconPosition.setAttribute("data",elem.id)

    const img = document.createElement("img");
    img.className = "product-img";
    img.src = elem.image;

    const infoDiv = document.createElement("div");
    infoDiv.className = "product-info";

    const productName = document.createElement("h2");
    productName.className = "product-name";
    productName.textContent = elem.title;
    productName.textContent=productName.textContent.slice(0,15)

    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = elem.description;
    description.textContent= description.textContent.slice(0,15)
    const cardSpan = document.createElement("span");
    cardSpan.className = "product-price";
    cardSpan.textContent = "AZN " + elem.price.toFixed(2); 

    const basketButton = document.createElement("button");
    basketButton.className = "add-to-cart-btn";
    basketButton.textContent = "Add Basket";

    basketButton.setAttribute("data",elem.id)
    iconPosition.setAttribute("data",elem.id)



    basketButton.addEventListener("click",(e)=>{
      e.stopPropagation();
      let element=api.find((elem)=>elem.id==e.target.getAttribute("data"))
      let control=basket.find(elem=>elem.id===element.id)
      if(control){
        control.count++
      }
      else{
        element.count=1
        basket.push(element)
      }
      localStorage.setItem("fav",JSON.stringify(basket))
      
    })


    iconPosition.addEventListener("click", (e) => {
        productCard.remove();
        fav = fav.filter(element => element.id !== elem.id);
        localStorage.setItem("fav", JSON.stringify(fav));
    });
  





    page.appendChild(productCard);
    productCard.appendChild(productIcon);
    productIcon.appendChild(iconPosition);
    productCard.appendChild(img);
    productCard.appendChild(infoDiv);
    infoDiv.appendChild(productName);
    infoDiv.appendChild(description);
    infoDiv.appendChild(cardSpan);
    infoDiv.appendChild(basketButton);
}
