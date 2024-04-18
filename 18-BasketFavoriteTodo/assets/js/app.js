let api=[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  }  
]


const cards = document.querySelector('.cards');
const basketCards=document.querySelector(".basketCards")
const fovarite=document.querySelector(".fovarite")
const aboutbasket=document.querySelector(".aboutbasket")
const fovaritabout=document.querySelector(".fovaritabout")
const countp=document.querySelector(".countp")

const deleteAll=document.createElement("i")
deleteAll.className="fa-solid fa-delete-left"
const deleteAll2=document.createElement("i")
deleteAll2.className="fa-solid fa-delete-left"


api.forEach((elem) => {
  createCardElement(elem, cards);
});

function createCardElement(elem,page) {
  const card = document.createElement("div");
  card.className = "card";

  const cardImg = document.createElement("img");
  const cardTitle = document.createElement("h3");
  const cardRaiting = document.createElement("p");
  const cardPrice = document.createElement("h4");
  const basketfav = document.createElement("div");
  const favIcon = document.createElement("i");
  const BasketIcon = document.createElement("i");
  const cardRaitingicon=document.createElement("i")

 




  cardImg.src = elem.image;
  cardTitle.innerText = elem.title;
  cardRaiting.innerText = elem.rating.rate;
  cardPrice.innerText = elem.price + " Azn";

  basketfav.className = "basketfav";
  favIcon.className = "fa fa-heart";
  BasketIcon.className = "fa fa-shopping-basket";
  cardRaitingicon.className="fa-solid fa-ranking-star"
  cardRaitingicon.style.marginLeft="20px"


  page.appendChild(card);
  cardRaiting.append(cardRaitingicon)
  card.append(cardImg, cardTitle, cardRaiting, cardPrice, basketfav);
  basketfav.append(favIcon, BasketIcon);
  aboutbasket.append(deleteAll)
  fovaritabout.append(deleteAll2)



  BasketIcon.setAttribute("data", elem.id);
  favIcon.setAttribute("data", elem.id);
 

  
  
  BasketIcon.addEventListener("click", function (e) {
      e.stopPropagation();

      let element = api.find((elem) => elem.id == e.target.getAttribute("data"));
      createCardElement(element, basketCards);
      
    });

    deleteAll.addEventListener("click", function (e) {
      e.stopPropagation();
      basketCards.innerHTML=""
    });

    favIcon.addEventListener("click", function (e) {
      e.stopPropagation();

      let element = api.find((elem) => elem.id == e.target.getAttribute("data"));
      createCardElement(element, fovarite);
    });

    deleteAll2.addEventListener("click", function (e) {
      e.stopPropagation();
      fovarite.innerHTML=""
    });
    
    
}



const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todolist");
const deleteAllBtn = document.getElementById("delete-all-btn");
const searchBox = document.querySelector(".searchbox");
const sortaz=document.querySelector(".a-z-short")


const todos = [];

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
        todos.push(todoText);
        todoInput.value = "";
        renderTodos();
    }
});

function renderTodos() {

    todoList.innerHTML = "";

    const searchTerm = searchBox.value.toLowerCase();
    const filteredTodos = todos.filter(todo => todo.toLowerCase().includes(searchTerm));


    filteredTodos.forEach((todo, index) => {
        const todoItem = document.createElement("li");
        todoItem.className = "todo-item";
        todoItem.textContent = todo;
        const editIcons = document.createElement("div");
        const editIcon = document.createElement("i");
        const time=document.createElement("p")
        const checkDiv=document.createElement("div")
        const checkIcon=document.createElement("i")
        checkIcon.className="fa fa-check"
        time.className="timeList"
        const times=new Date()
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        time.textContent=`${times.getDate()}.${times.getMonth()}.${times.getFullYear()}.${times.getHours()}.${times.getMinutes()}.${times.getSeconds()}`
        editIcon.className = "fas fa-marker";





        editIcon.addEventListener("click", () => {
            const editText = prompt("Edit your todo:", todo);
            if (editText !== null) {
                todos[index] = editText.trim();
                renderTodos();
            }
        });

        deleteBtn.addEventListener("click", () => {
            todos.splice(index, 1);
            renderTodos();
        });

        checkDiv.addEventListener("click", () => {
          todoItem.style.textDecoration = "line-through"
        });
        
        

        todoItem.appendChild(editIcons);
        editIcons.append(time,editIcon, deleteBtn,checkDiv);
        todoList.appendChild(todoItem);
        checkDiv.append(checkIcon)
    });
}

deleteAllBtn.addEventListener("click", () => {
    todos.length = 0;
    renderTodos();
});

searchBox.addEventListener("input", () => {
    renderTodos();
});

sortaz.addEventListener("click", () => {
  todos.sort()
  renderTodos();
});





