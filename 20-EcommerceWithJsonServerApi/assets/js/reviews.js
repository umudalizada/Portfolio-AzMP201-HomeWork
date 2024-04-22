import { getDatas } from "./requests.js";
import { ProductURL } from "./baseURL.js";

let detail = JSON.parse(localStorage.getItem("detail")) || [];
let basket = JSON.parse(localStorage.getItem("basket")) || [];
let like = JSON.parse(localStorage.getItem("like")) || [] 
let Allcards = JSON.parse(localStorage.getItem("Allcards")) || [] 






const forbigpage = document.querySelector(".forbigpage");



    const bigimg = document.createElement("div");
    const mini = document.createElement("div");
    const sideOne = document.createElement("div");
    const sideTwo = document.createElement("div");
    const sideThri = document.createElement("div");
    const sideFour = document.createElement("div");
    const big = document.createElement("div");
    const red = document.createElement("div");
    const likeOne = document.createElement("div");
    const likeTwo = document.createElement("div");
    const likeOneImg = document.createElement("img"); 
    const likeTwoImg = document.createElement("img"); 
    const bigBugImg = document.createElement("img");
    const about = document.createElement("div");
    const DetailAbout = document.createElement("h4");
    const priceDetail = document.createElement("h3");
    const descreptionDetail = document.createElement("h4");
    const categoryDetail = document.createElement("h3");
    const prices = document.createElement("div");
    const baskett = document.createElement("button");
    const fav = document.createElement("button");


    bigimg.className = "bigimg";
    mini.className = "mini";
    sideOne.className = "sideOne";
    sideTwo.className = "sideTwo";
    sideThri.className = "sideThri";
    sideFour.className = "sideFour";
    big.className = "big";
    red.className = "red";
    red.textContent = "30%";
    likeOne.className = "likeOne";
    likeTwo.className = "likeTwo";
    likeOneImg.src = "./assets/images/homeImg/icons/redGroup 25518 (1).svg"; 
    bigBugImg.className = "bigBugImg";
    bigBugImg.src = detail.image;
    about.className = "about";
    DetailAbout.className = "DetailAbout";
    DetailAbout.textContent = detail.title;
    priceDetail.className = "priceDetail";
    priceDetail.textContent = detail.price + "  $";
    descreptionDetail.className = "descreptionDetail";
    descreptionDetail.textContent = detail.description;
    categoryDetail.className = "categoryDetail";
    prices.className = "prices";
    fav.className = "price";
    fav.textContent="Favorite"
    fav.style.backgroundColor="red"
    fav.style.color="white"
    baskett.className = "price";
    baskett.textContent="Basket"
    baskett.style.backgroundColor="green"
    baskett.style.color="white"

    mini.append(sideOne, sideTwo, sideThri, sideFour);
    big.append(red, bigBugImg);
    bigimg.append(mini, big);
    about.append(DetailAbout, priceDetail, descreptionDetail, categoryDetail, prices);
    prices.append(baskett,fav);
    forbigpage.append(bigimg, about);


    baskett.addEventListener("click", (e) => {
        try {
            let CheckItem = basket.find(item => item.id === detail.id);
            if (CheckItem) {
                CheckItem.count++;
            } else {
                detail.count = 1;
                basket.push(detail);
            }
            localStorage.setItem("basket", JSON.stringify(basket));
        } catch (error) {
            console.error("Hata: ", error);
        }
    });
    
    fav.setAttribute("data",detail.id)
    fav.addEventListener("click", (e) => {
        let elem = detail; 
        let CheckItemIndex = like.findIndex(item => item.id === elem.id);
        if (CheckItemIndex !== -1) {
            like.splice(CheckItemIndex, 1);
        } else {
            like.push(elem);
        }
        localStorage.setItem("like", JSON.stringify(like));
});

const bottomCards=document.querySelector(".cardss")

async function CreateBottom() {
        let data = await getDatas(ProductURL);
        let category = data.filter(elem=> elem.category == detail.category)
        category.forEach(elem => {
            const card = document.createElement("div") 
            const red = document.createElement("div") 
            const backbag = document.createElement("div") 
            const Imgsrc = document.createElement("img") 
            const likeBox = document.createElement("div") 
            const likeIcon = document.createElement("img") 
            const content= document.createElement("div") 
            const stars = document.createElement("div")
            const pElement = document.createElement("p")
            const price = document.createElement("h6")
            const buttonAdd = document.createElement("button")
            card.className = "card"
            red.className = "red"
            backbag.className = "backbag"
            likeBox.className = "like"
            content.className = "content"
            stars.className = "stars"
    
            red.textContent = "30%";
            Imgsrc.src= elem.image 
            likeIcon.src ="./assets/images/homeImg/icons/heart (2).svg"
            pElement.textContent=elem.title.slice(0,14);
            price.textContent = elem.price;
            buttonAdd.textContent = "Add to card"
    
            bottomCards.appendChild(card);
            card.append(red, backbag,likeBox,content,buttonAdd)
            backbag.appendChild(Imgsrc)
            likeBox.appendChild(likeIcon)
            content.append(stars,pElement,price)
            
            for(let i = 0; i <= 5; i++) {
              const star = document.createElement("img");
              star.src = "./assets/images/homeImg/icons/star.svg";
              stars.appendChild(star);
            }
            buttonAdd.setAttribute("data", elem.id);
            likeIcon.setAttribute("data", elem.id);

      buttonAdd.addEventListener("click", (e) => {
        let elem = data.find((item) => item.id == e.target.getAttribute("data"));
        let CheckItem = basket.find((item) => item.id === elem.id);
        if (CheckItem) {
          CheckItem.count++;
        } else {
          elem.count = 1;
          basket.push(elem);
        }
       
        localStorage.setItem("basket", JSON.stringify(basket))

      })

      
      likeIcon.addEventListener("click", (e) => {
        let elem = data.find((item) => item.id == e.target.getAttribute("data"));
        let CheckItemIndex = like.findIndex((item) => item.id === elem.id);
        if (CheckItemIndex !== -1) {
          like.splice(CheckItemIndex, 1);
          likeIcon.className = "fa-regular fa-heart";
          likeIcon.style.color = "black";
        } else {
          like.push(elem);
          likeIcon.className = "fa-solid fa-heart";
          likeIcon.style.color = "red";
        
        }
        localStorage.setItem("like", JSON.stringify(like));
      });

    if (like.find((item) => item.id === elem.id)) {
      likeIcon.className="fa-solid fa-heart";
      likeIcon.style.color = "red"
    }

    
    });
        

    }
    
   CreateBottom();