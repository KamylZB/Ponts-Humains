document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".search-bar");
    const searchInput = document.querySelector(".search-bar input");
    const filterSelect = document.querySelector(".filter-select");
    const cards = document.querySelectorAll(".asso-card");

    function filtrerAssociations() {
        const texteRecherche = (searchInput.value || "").toLowerCase().trim();
        const categorieChoisie = (filterSelect.value || "").toLowerCase().trim();

        cards.forEach(card => {
            const nomAsso = card.querySelector("h3").textContent.toLowerCase();
            const categorieAsso = (card.getAttribute("data-categorie") || "").toLowerCase();

            const correspondTexte = nomAsso.includes(texteRecherche);
            const correspondCategorie = (categorieChoisie === "") || (categorieAsso === categorieChoisie);

            card.style.display = (correspondTexte && correspondCategorie) ? "grid" : "none";
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        filtrerAssociations();
    });

    searchInput.addEventListener("input", filtrerAssociations);
    filterSelect.addEventListener("change", filtrerAssociations);
});
