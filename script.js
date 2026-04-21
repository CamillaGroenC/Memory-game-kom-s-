const openCartBtn = document.getElementById("openCart");
const addToCartBtn = document.getElementById("addToCart");
const closeCartBtn = document.getElementById("closeCart");
const cartSidebar = document.getElementById("cartSidebar");
const overlay = document.getElementById("overlay");

function openCart() {
    cartSidebar.classList.add("active");
    overlay.classList.add("active");
}

function closeCart() {
    cartSidebar.classList.remove("active");
    overlay.classList.remove("active");
}

if (openCartBtn) openCartBtn.addEventListener("click", openCart);
if (addToCartBtn) addToCartBtn.addEventListener("click", openCart);
if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
if (overlay) overlay.addEventListener("click", closeCart);

const slider = document.getElementById("benefitsSlider");
const prevBenefitBtn = document.getElementById("prevBenefit");
const nextBenefitBtn = document.getElementById("nextBenefit");

if (slider && prevBenefitBtn && nextBenefitBtn) {
    const benefitCards = Array.from(slider.querySelectorAll(".benefit-card"));
    let activeIndex = 1;

    function updateBenefits() {
        benefitCards.forEach((card, index) => {
            card.classList.toggle("active", index === activeIndex);
        });

        const isMobile = window.innerWidth < 768;

        if (!isMobile) {
            const leftIndex = (activeIndex - 1 + benefitCards.length) % benefitCards.length;
            const centerIndex = activeIndex;
            const rightIndex = (activeIndex + 1) % benefitCards.length;

            slider.innerHTML = "";
            slider.appendChild(benefitCards[leftIndex]);
            slider.appendChild(benefitCards[centerIndex]);
            slider.appendChild(benefitCards[rightIndex]);
        }
    }

    prevBenefitBtn.addEventListener("click", () => {
        activeIndex = (activeIndex - 1 + benefitCards.length) % benefitCards.length;
        updateBenefits();
    });

    nextBenefitBtn.addEventListener("click", () => {
        activeIndex = (activeIndex + 1) % benefitCards.length;
        updateBenefits();
    });

    window.addEventListener("resize", updateBenefits);

    updateBenefits();
}
const searchToggle = document.getElementById("searchToggle");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");

if (searchToggle && searchBox) {
    searchToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        searchBox.classList.toggle("active");

        if (searchBox.classList.contains("active") && searchInput) {
            searchInput.focus();
        }
    });

    searchBox.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    document.addEventListener("click", () => {
        searchBox.classList.remove("active");
    });
}