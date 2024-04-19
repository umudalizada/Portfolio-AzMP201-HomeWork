

const basket = JSON.parse(localStorage.getItem("basket")) || [];
const fav = JSON.parse(localStorage.getItem("fav")) || [];

const allcards=document.querySelector(".allcards")
const favCount=document.querySelector(".favCount")
const basCount=document.querySelector(".basCount")




fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    
data.forEach(elem => {
  createElement(elem,allcards)
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
    let element=data.find((elem)=>elem.id==e.target.getAttribute("data"))
    let control=basket.find(elem=>elem.id===element.id)
    if(control){
      control.count++
    }
    else{
      element.count=1
      basket.push(element)
    }

    localStorage.setItem("basket",JSON.stringify(basket))
    bascount()
    
  })

  iconPosition.addEventListener("click", (e) => {
  
    let element = data.find((item) => item.id == e.target.getAttribute("data"));
    let control = fav.findIndex(item => item.id === element.id);
    if (control !== -1) {
      fav.splice(control, 1);
        iconPosition.style.color="white"
    } else {
      favCount.textContent=Number( favCount.textContent)+1
      fav.push(element);
        iconPosition.style.color="red"
    }

    localStorage.setItem("fav", JSON.stringify(fav));
    favcount()
    
  });
  if (fav.find((item) => item.id === elem.id)) {
    iconPosition.style.color = "red";
}



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
bascount()
favcount()
    
  })
  .catch(error => console.error('Bir hata oluştu:', error));



  function favcount(){
    favCount.textContent = ` ( ${fav.length} )`;
  }
  
  function bascount(){
    basCount.textContent = ` ( ${basket.reduce((acc, elem) => {
      return acc + elem.count;
    }, 0)} )`; 
  }
  