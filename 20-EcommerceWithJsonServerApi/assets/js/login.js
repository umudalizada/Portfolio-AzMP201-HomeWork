import { ProductURL } from "./baseURL.js"
import { UsersURL } from "./baseURL.js"
import {getDatas} from "./requests.js"


const valid=document.querySelector(".valid")
const inputUser=document.querySelector(".inputUser")
const inputPass=document.querySelector(".inputPass")
const loginButton=document.querySelector(".loginButton")



valid.addEventListener("submit", async (e)=>{
    e.preventDefault()
    if(inputUser.value!=="" && inputPass.value!==""){
        let allUsers= await getDatas(UsersURL)
        allUsers.forEach(element=>{
            
        })
        let control= await allUsers.find(elem=>elem.username==inputUser.value && elem.password == inputPass.value)
        if(control){
            if(control.inputUser){
                window.location="./index.html"
            }
            else{
                window.location="./index.html"
            }

        }
        else{
            Swal.fire({
                title: "Hey !",
                text: "Password or username is incorrect !",
                imageUrl: "https://img.freepik.com/premium-vector/cute-kid-boy-carrying-wrong-sign-cartoon-illustration_295036-1739.jpg",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image"
            });
        }

    }
    else{
        alert("Please do not leave spaces")
    }
})
