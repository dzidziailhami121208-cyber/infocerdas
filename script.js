document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const articleCards = document.querySelectorAll(".artikel-card");
    const noResults = document.getElementById("noResults");
    const categoryCards = document.querySelectorAll(".kategori-card");

    let selectedCategory = "";

    function filterArticles() {
        const keyword = searchInput.value.toLowerCase().trim();
        let visibleCount = 0;

        articleCards.forEach(function (card) {
            const text = card.textContent.toLowerCase();
            const category = card.querySelector(".label-artikel")
                .textContent.toLowerCase();

            const matchesSearch = text.includes(keyword);
            const matchesCategory =
                selectedCategory === "" || category === selectedCategory;

            const show = matchesSearch && matchesCategory;

            card.style.display = show ? "" : "none";

            if (show) {
                visibleCount++;
            }
        });

        noResults.hidden = visibleCount > 0;
    }

    searchInput.addEventListener("input", filterArticles);

    categoryCards.forEach(function (card) {
        card.addEventListener("click", function () {
            const heading = card.querySelector("h3").textContent
                .toLowerCase();

            selectedCategory =
                heading === "komputer" ? "komputer" : "smartphone";

            searchInput.value = "";
            filterArticles();

            document.getElementById("artikel").scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});