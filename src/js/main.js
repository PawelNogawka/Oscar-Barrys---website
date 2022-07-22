const menuBtn = document.querySelector(".nav__btn")




function handleNav(){
   const header = document.querySelector(".header")
   const links = document.querySelectorAll(".nav__link")

   header.classList.toggle("active")
   links.forEach(link =>{
    link.addEventListener("click",()=>{
      header.classList.remove("active")
    })
   })


}

menuBtn.addEventListener("click",handleNav)



