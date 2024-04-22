import {
  getDatas,
  postDatas,
  getDataById,
  deleteById,
  putById,
  patchById,
} from "./requests.js";
import { ProductURL } from "./baseURL.js";

console.log(ProductURL);

let admintable = document.querySelector(".TBody");
let modal = document.querySelector(".modal-body");
const saveData = document.querySelector(".saveData");
async function createTable() {
  let data = await getDatas(ProductURL);
  data.forEach((elem) => {
    let tr = document.createElement("tr");
    let Idtd = document.createElement("td");
    let titletd = document.createElement("td");
    let imagetd = document.createElement("td");
    let deletetd = document.createElement("td");
    let deleteBtn = document.createElement("button");
    let edittd = document.createElement("td");
    let editBtn = document.createElement("button");
    let posttd = document.createElement("td");
    let postBtn = document.createElement("button");

    deleteBtn.setAttribute("data", elem.id);
    editBtn.setAttribute("data", elem.id);
    editBtn.setAttribute("data-bs-toggle", "modal");
    editBtn.setAttribute("data-bs-target", "#exampleModal");

    deleteBtn.className = "btn btn-danger";
    editBtn.className = "btn btn-warning";

    Idtd.innerText = elem.id;
    titletd.innerText = elem.title;
    imagetd.innerText = elem.image;
    imagetd.innerHTML = `<img src="${elem.image}" alt="${elem.title}" style="max-width: 100px; max-height: 100px;">`;

    deleteBtn.innerText = "Delete";
    editBtn.innerText = "Edit";

    deleteBtn.addEventListener("click", (e) => {
      deleteById(ProductURL, e.target.getAttribute("data"));
      e.target.parentElement.parentElement.remove();
    });

    editBtn.addEventListener("click", async (e) => {
      let elem = await getDataById(ProductURL, e.target.getAttribute("data"));
      console.log(elem);
      modal.innerHTML = ` 
            <p>Id <span class="elemId">${elem.id}</span></p>
              <div class="form-group">
                <label for="productTitle">Title:</label>
                <input class="elemTitle" type="text" value=${elem.title}/>
              </div>
              <div class="form-group">
                <label for="productImg">Image:</label>
                <input class="elemImg" type="text" value=${elem.image}/>
              </div>
              <div class="form-group">
                <label for="productPrice">Price:</label>
                <input class="elemPrice" type="text" value=${elem.price}/>
              </div>
         `;
    });

    deletetd.append(deleteBtn);
    edittd.append(editBtn);

    tr.append(Idtd, titletd, imagetd, deletetd, edittd);
    admintable.append(tr);
  });
}
createTable();

saveData.addEventListener("click", async () => {
  const id = document.querySelector(".elemId");
  const title = document.querySelector(".elemTitle");
  const image = document.querySelector(".elemImg");
  const price = document.querySelector(".elemPrice");

  let obj = await getDataById(ProductURL, id.innerText);

  obj.title = title.value;
  obj.image = image.value;
  obj.price = price.value;

  await patchById(ProductURL, id.innerText, obj);
});

let postData = document.querySelector(".postData");
let titleElement = document.querySelector(".titleElement");
let imageElement = document.querySelector(".imageElement");

postData.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    title: titleElement.value,
    img: imageElement.value,
  };
  postDatas(ProductURL, obj);
  console.log(obj);
});
