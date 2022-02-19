const ButtonMenu = document.querySelector(".cabecalho-menu-cel");
const MenuSide = document.querySelector(".menu-itens-side")
const ButtonMenuBack = document.querySelector(".backButtonMenuSide");

ButtonMenu.addEventListener("click", () =>{
    MenuSide.classList.toggle("hide");
})
ButtonMenuBack.addEventListener("click", () =>{
    MenuSide.classList.toggle("hide");
})