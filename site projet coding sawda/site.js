const bouton = document.getElementById("white mode");
const body = document.body;
bouton.addEventListener("click", function() {
   body.classList.toggle("mode-claire");
    if (body.classList.contains("mode-claire")) {
        bouton.textContent = "Activer le mode clair";
    } else {
        bouton.textContent = "Activer le White Mode";
    }
});

// --- GESTION DU BURGER MENU --//
const burgerBtn = document.getElementById("burgerBtn");
const sideMenu = document.getElementById("sideMenu");

burgerBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("visible");
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.side-nav a').forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove("visible");
    });
});

// --- GESTION DES TABS ---
function openTab(evt, tabName) {
    // Cacher tous les contenus d'onglets
    const tabContents = document.getElementsByClassName("tab-content");
    for (let content of tabContents) {
        content.classList.remove("visible");
    }

    // Désactiver tous les boutons
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let btn of tabBtns) {
        btn.classList.remove("visible");
    }
}