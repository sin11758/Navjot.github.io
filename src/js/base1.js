const clickBurger=()=>{
    let navbarBurger = document.querySelector(".navbar-burger");
    let navbarBurgerLine1 = document.querySelector(".navbar-burger-line1");
    let navbarBurgerLine2 = document.querySelector(".navbar-burger-line2");
    // let navbarLogo = document.querySelector(".navbar-logo");
    let navbarUl = document.querySelector(".navbar-ul");

    navbarBurger.addEventListener('click',()=>{
        navbarBurgerLine1.classList.toggle('navbar-burger-line1-click');
        navbarBurgerLine2.classList.toggle('navbar-burger-line2-click');
        // navbarLogo.classList.toggle('navbar-logo-click');
        navbarUl.classList.toggle('navbar-ul-click');
         
    });
    
    
    
}

const hoverBurger=()=>{
    let navbarBurger = document.querySelector(".navbar-burger");
    let navbarBurgerLine1 = document.querySelector(".navbar-burger-line1");
    let navbarBurgerLine2 = document.querySelector(".navbar-burger-line2");
    // let navbarBurgerLine1Click = document.querySelector(".navbar-burger-line1-click");
    // let navbarBurgerLine2Click = document.querySelector(".navbar-burger-line1-click");
    


    
    navbarBurger.addEventListener('mouseover',()=>{
        navbarBurgerLine1.classList.add('navbar-burger-line1-hover');
        navbarBurgerLine2.classList.add('navbar-burger-line2-hover');
        // navbarBurgerLine1Click.classList.add('navbar-burger-line1-hover');
        // navbarBurgerLine2Click.classList.add('navbar-burger-line2-hover');
    })
    
    navbarBurger.addEventListener('mouseout',()=>{
        navbarBurgerLine1.classList.remove('navbar-burger-line1-hover');
        navbarBurgerLine2.classList.remove('navbar-burger-line2-hover');
        // navbarBurgerLine1Click.classList.remove('navbar-burger-line1-hover');
        // navbarBurgerLine2Click.classList.remove('navbar-burger-line2-hover');
    })
}

// const back =()=>{
//     let link = document.querySelectorAll(".navbar-ul-link > a")
//     let navbarBurgerLine1 = document.querySelector(".navbar-burger-line1");
//     let navbarBurgerLine2 = document.querySelector(".navbar-burger-line2");
//     let navbarUl = document.querySelector(".navbar-ul");
    
//     for (let i in link){
//         link[i].addEventListener('click',()=>{
//             navbarBurgerLine1.classList.toggle('navbar-burger-line1-click');
//             navbarBurgerLine2.classList.toggle('navbar-burger-line2-click');
//             navbarUl.classList.toggle('navbar-ul-click');
            
//         });
//     }
// }




clickBurger();
hoverBurger();
back();