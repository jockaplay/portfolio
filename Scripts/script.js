const ButtonMenu = document.querySelector(".cabecalho-menu-cel");
const MenuSide = document.querySelector(".menu-itens-side")
const ButtonMenuBack = document.querySelector(".backButtonMenuSide");

ButtonMenu.addEventListener("click", () =>{
    MenuSide.classList.toggle("hide");
})
ButtonMenuBack.addEventListener("click", () =>{
    MenuSide.classList.toggle("hide");
})
function openLink1(){
    window.open("https://gamejolt.com/games/forgottenarmy/579102", "_blank");
}
function openLink2(){
    window.open("https://gamejolt.com/games/ThiefThrillAlpha/645733", "_blank");
}
function openLink3(){
    window.open("https://gamejolt.com/games/shooterjocka258/650986", "_blank");
}