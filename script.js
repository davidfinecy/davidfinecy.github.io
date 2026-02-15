const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

if (filterButtons.length > 0) {
    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const filter = btn.dataset.filter;

            projectCards.forEach((card) => {
                const tags = card.dataset.tags.split(" ");

                const show =
                    filter === "all" || tags.includes(filter);

                card.style.display = show ? "block" : "none";
            });
        });
    });
}
