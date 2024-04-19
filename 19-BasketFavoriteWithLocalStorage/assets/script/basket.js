
let basket = JSON.parse(localStorage.getItem("basket")) || [];

const basketcards=document.querySelector(".basketcards")
const totatSum=document.querySelector(".total")
const totaltitle=document.querySelector(".totatTitle")
const cem=document.querySelector(".cem")




function totalSum() {
  let total = 0;
  basket.forEach((elem) => {
      total += elem.price * elem.count;
  });
  cem.textContent = total + " AZN";
}


basket.forEach(elem=>{
  createBasketItem(elem,basketcards)
  totalSum()
})


function createBasketItem(element, container) {
    const basketItem = document.createElement('div');
    basketItem.className = 'cardbasket';
    basketItem.setAttribute("data",element.id)

    const leftDiv = document.createElement('div');
    leftDiv.className = 'left';

    const image = document.createElement('img');
    image.className = 'basketimg';
    image.src = element.image;
    image.alt = '';

    leftDiv.appendChild(image);

    const rightDiv = document.createElement('div');
    rightDiv.className = 'right';

    const itemNameHeading = document.createElement('h3');
    itemNameHeading.textContent = element.title;
    itemNameHeading.textContent=itemNameHeading.textContent.slice(0,15)

    const counts = document.createElement('span');
    counts.textContent = element.count; 
    counts.style.margin = "0 30px"; 


    const priceHeading = document.createElement('h3');
    priceHeading.textContent = 'Price: ' + element.price*element.count;

    const buyButton = document.createElement('button');
    buyButton.className = 'addCard';
    buyButton.textContent = 'Buy';

    const plusDiv = document.createElement('div');


    const plus = document.createElement('button');
    plus.className = 'plus';
    plus.textContent = '+';
    const minus = document.createElement('button');
    minus.className = 'minus';
    minus.textContent = '-';

    const deleteDiv = document.createElement('div');
    deleteDiv.className = 'right2';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Delete';


    deleteButton.addEventListener("click", (e) => {
      basketItem.remove();
      basket = basket.filter(item => item.id !== element.id);
      localStorage.setItem("basket", JSON.stringify(basket));
  totalSum()

  });


  plus.addEventListener("click", () => {
    element.count = element.count + 1;
    counts.textContent = element.count;
    priceHeading.textContent=element.count*element.price
    localStorage.setItem("basket", JSON.stringify(basket));
    totalSum()
});

  minus.addEventListener("click", () => {
    if (element.count && element.count > 1) {
        element.count--;
        counts.textContent = element.count;
        priceHeading.textContent=element.count*element.price
        localStorage.setItem("basket", JSON.stringify(basket));
    }
    else{
      basketItem.remove();

      basketItem.remove();
      basket = basket.filter(item => item.id !== element.id);
      localStorage.setItem("basket", JSON.stringify(basket));
    }
    totalSum()

});



    rightDiv.appendChild(itemNameHeading);
    rightDiv.appendChild(priceHeading);
    rightDiv.appendChild(buyButton);
    rightDiv.appendChild(plusDiv)
    plusDiv.append(minus)
    plusDiv.append(counts)
    plusDiv.append(plus)
    deleteDiv.appendChild(deleteButton);
    basketItem.appendChild(leftDiv);
    basketItem.appendChild(rightDiv);
    basketItem.appendChild(deleteDiv);

    container.appendChild(basketItem);
}

