"use strict"

const divRaiting = document.querySelector(".raiting");
const btnSubmit = document.querySelector("#subm");
const divAllRat = document.querySelectorAll(".quali");
const divContainer = document.querySelector(".container");
const divthank = document.querySelector(".thank");
const spanPunct = document.querySelector(".punct")
let punct = 0;


const clearSelected = ()=>{
    divAllRat.forEach(elem=>{
        if(elem.classList.contains("quali-active")) elem.classList.remove("quali-active")
    })
}

divRaiting.addEventListener("click",e=>{
    e.preventDefault()
    if(e.target.closest(".quali")){
        clearSelected()
        punct = parseInt(e.target.textContent)
        e.target.classList.add("quali-active")

        // console.log(punct)
    }
})


btnSubmit.addEventListener("click", e=>{
//    console.log(e.target.parentElement)
    e.preventDefault()

    if(punct===0){
        alert("select a score")
       
    }else{
        e.target.parentElement.classList.toggle("form-none")
        divthank.style.display = "flex"
        spanPunct.textContent = punct
    }

})