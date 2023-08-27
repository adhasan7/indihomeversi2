function sendWhatsapp(){
    var nomor = "6289668251233";
    var pesan = "Halo%20Indihome%20Jogja.%20Saya%20ingin%20berlanggan%20Indihome%20Paket%20Yogyakarta%20.%20Apakah%20bisa%20dibantu%20untuk%20informasi%20lebih%20lanjut%20?";
    var win = window.open('https://api.whatsapp.com/send?phone='+nomor+'&text='+pesan);
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
}

const nav = document.querySelector("nav")
let isMobileMenuShown = false
const mobileMenuToggle = document.querySelector("nav button")
const mobileMenu = document.querySelector("#mobile-menu")
const mobileMenuItems = document.querySelectorAll("#mobile-menu li")

mobileMenuToggle.addEventListener("click", () => {
    if (isMobileMenuShown) {
        mobileMenu.style.top = "-100%"
        mobileMenuToggle.innerText = "menu"
    } else {
        mobileMenu.style.top = nav.scrollHeight + "px"
        mobileMenuToggle.innerText = "close"
    }
    isMobileMenuShown = !isMobileMenuShown
})

mobileMenuItems.forEach(menu => {
    menu.addEventListener("click", () => {
        mobileMenuToggle.click()
    })
})

const buttonHubungi = document.querySelector("header div button")
buttonHubungi.addEventListener("click", sendWhatsapp)