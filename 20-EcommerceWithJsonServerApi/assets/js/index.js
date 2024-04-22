import { getDatas } from "./requests.js";
import { ProductURL } from "./baseURL.js";
export let adminUser = document.querySelector(".adminUser")
const basket = JSON.parse(localStorage.getItem("basket")) || [] 
let like = JSON.parse(localStorage.getItem("like")) || [] 
let detail = JSON.parse(localStorage.getItem("detail")) || [];





const productCards = document.querySelector(".productcards");
const searchInput = document.querySelector(".searchInput");
const searchButton = document.querySelector(".search");
const AtoZ = document.querySelector(".AtoZ");
const ZtoA = document.querySelector(".ZtoA");
const lowHigh = document.querySelector(".lowHigh");
const highLow = document.querySelector(".highLow");


AllPosts();

async function AllPosts() {
  let data = await getDatas(ProductURL);

  function createPost(data) {
    productCards.innerHTML = "";

    data.forEach((element) => {
      const card = document.createElement("div");
      const newBox = document.createElement("div");
      const backBag = document.createElement("div");
      const imgSrc = document.createElement("img");
      const likeBox = document.createElement("div");
      const likeIcon = document.createElement("i");
      const content = document.createElement("div");
      const stars = document.createElement("div");
      const contentP = document.createElement("p");
      const price = document.createElement("h6");
      const addButton = document.createElement("button");

      card.className = "card";
      newBox.className = "new";
      backBag.className = "backbag";
      likeBox.className = "like";
      likeIcon.className = "fa-regular fa-heart";
      content.className = "content";
      stars.className = "stars";

      newBox.textContent = "NEW";
      imgSrc.src = element.image;
      contentP.textContent = element.title.slice(0, 25);
      price.textContent = "$ " + element.price;
      addButton.textContent = "Add to cart";

      productCards.appendChild(card);
      card.append(newBox, backBag, likeBox, content, addButton);
      backBag.appendChild(imgSrc);
      likeBox.appendChild(likeIcon);
      content.append(stars, contentP, price);
      for (let i = 0; i <= 5; i++) {
        const star = document.createElement("img");
        star.src = "./assets/images/homeImg/icons/star.svg";
        stars.appendChild(star);
      }

      addButton.setAttribute("data", element.id);
      likeIcon.setAttribute("data", element.id);

      addButton.addEventListener("click", (e) => {
        let elem = data.find((item) => item.id == e.target.getAttribute("data"));
        let CheckItem = basket.find((item) => item.id === elem.id);
        if (CheckItem) {
          CheckItem.count++;
        } else {
          elem.count = 1;
          basket.push(elem);
        }
        Toastify({
          text: "Added to Basket",
          offset: {
            x: 50,
            y: 10,
          },
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();
        localStorage.setItem("basket", JSON.stringify(basket))

      })

      imgSrc.setAttribute("data",element.id)
      imgSrc.addEventListener("click",(e)=>{
        detail=data.find(elem=>elem.id==e.target.getAttribute("data"))
        localStorage.setItem("detail",JSON.stringify(detail))
        window.location="./reviews.html"
      })

      
      likeIcon.addEventListener("click", (e) => {
        let elem = data.find((item) => item.id == e.target.getAttribute("data"));
        let CheckItemIndex = like.findIndex((item) => item.id === elem.id);
        if (CheckItemIndex !== -1) {
          like.splice(CheckItemIndex, 1);
          likeIcon.className = "fa-regular fa-heart";
          likeIcon.style.color = "black";
        } else {
          like.push(element);
          likeIcon.className = "fa-solid fa-heart";
          likeIcon.style.color = "red";
          Toastify({
            text: "Added to Favorite",
            offset: {
              x: 50,
              y: 10,
            },
            style: {
              background: "linear-gradient(to right, #ff4d4d, #ff9999)",
            },
          }).showToast();
        }
        localStorage.setItem("like", JSON.stringify(like));
      });

    if (like.find((item) => item.id === element.id)) {
      likeIcon.className="fa-solid fa-heart";
      likeIcon.style.color = "red"
    }

    
    });
  }

  createPost(data);

  searchInput.addEventListener("input", () => {
    const filteredData = data.filter((card) => card.title.toLowerCase().includes(searchInput.value.toLowerCase()));
    createPost(filteredData);
  });

  searchButton.addEventListener("click", () => {
    const filteredData = data.filter((card) => card.title.toLowerCase().includes(searchInput.value.toLowerCase()));
    createPost(filteredData);
  });

  AtoZ.addEventListener("click", () => {
    data.sort((a, b) => a.title.localeCompare(b.title));
    createPost(data);
  });

  ZtoA.addEventListener("click", () => {
    data.sort((a, b) => b.title.localeCompare(a.title));
    createPost(data);
  });

  highLow.addEventListener("click", () => {
    data.sort((a, b) => b.price - a.price);
    createPost(data);
  });
  lowHigh.addEventListener("click", () => {
    data.sort((a, b) => a.price - b.price);
    createPost(data);
  });

  

}