let icon = document.querySelector("#fast")
let container = document.querySelector(".container")
let image = document.querySelector(".image")
let last = document.querySelector("#sec")
image.addEventListener("dblclick",()=>{
    icon.style.color = "red"
    icon.style.opacity = 1
    icon.style.transform = "translate(-50% , -50%)scale(1)"

    setTimeout(()=>{
        icon.style.transform = "translate(-50% , -50%)scale(0)"
    },1500)
})
last.addEventListener("click",()=>{
    last.style.color = "red"
})
