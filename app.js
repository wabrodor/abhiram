const btn = document.querySelector(".click")
const fuck = document.querySelector(".fuck")
const close = document.querySelector(".close")
const names = document.querySelector(".name")
btn.addEventListener("click", ()=>{
fuck.classList.add("active");
names.classList.add("display")
btn.classList.add("display")
})

// close.addEventListener("click", ()=>{
//     fuck.classList.remove("active")
// })

fuck.addEventListener("click", ()=>{
    fuck.classList.remove("active")
    names.classList.remove("display")
btn.classList.remove("display")
})