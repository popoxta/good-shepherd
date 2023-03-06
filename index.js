const homePage = document.querySelector(".home")
const aboutPage = document.querySelector(".about")
const menuPage = document.querySelector(".menu")

const menu = document.querySelector(".menu-nav")
menu.addEventListener('click', (e) => {
    e.preventDefault()
    displayPage(menuPage)
    displaySelection(menu)

})

const home = document.querySelector(".home-nav")
home.addEventListener('click', (e) => {
    e.preventDefault()

    displayPage(homePage)
    displaySelection(home)

})

const about = document.querySelector(".about-nav")
about.addEventListener('click', (e) => {
    e.preventDefault()

    displayPage(aboutPage)
    displaySelection(about)

})

function displayPage(page){
    aboutPage.classList.add("hidden")
    menuPage.classList.add("hidden")
    homePage.classList.add("hidden")

    page.classList.remove("hidden")
}

function displaySelection(nav){
    about.classList.remove("selected")
    menu.classList.remove("selected")
    home.classList.remove("selected")

    nav.classList.add("selected")
}
