// ====================================================
// "CLOSE FRIENDS (БД)" INTERACTIVE LOGIC (KK VERSION)
// ====================================================

// --- Reviews Database ---
const REVIEWS_DATABASE = [
    {
        city: "Алматы қ.",
        quote: "«Мен ЖД-ға жұмыста қатты шаршаған, күйзелген сәтте келдім. Мені ешкім түсінбейтіндей көрінетін. 21 күннің ішінде мен керемет қыздармен танысып, орта таптым. Жеке шекараларды құруды үйрендім. Отбасыммен қарым-қатынасым жақсарып, ішкі тыныштығымды таптым.»",
        author: "— Әйгерім, 31 жаста, маркетолог"
    },
    {
        city: "Астана қ.",
        quote: "«Үш баланың анасы ретінде маған өзіме уақыт табу мүмкін еместей көрінетін. Бағдарлама мені дұрыс жоспарлауға және кінә сезімінсіз өз ресурстарымды күтуге үйретті. Күйеуім менің өзгергенімді байқады, үйде тыныштық орнады. Авторына осындай жылы орта үшін рақмет!»",
        author: "— Динара, 39 жаста, көп балалы ана"
    },
    {
        city: "Шымкент қ.",
        quote: "«Бұл бағдарламаның ең құнды жері — тәртіп пен орта. Чаттағы күнделікті есептер әрекет етуге ынталандырады, ал қыздардың қолдауы күш береді. Мен ақыры жұмыс саласын ауыстыруға шешім қабылдап, табысымды арттырдым. Бұл өзіме жасаған ең жақсы инвестициям!»",
        author: "— Сабина, 28 жаста, дизайнер"
    }
];

let currentReviewIndex = 0;

// --- DOM Selections ---
const activeReviewCard = document.getElementById("active-review-card");
const btnReviewPrev = document.getElementById("btn-review-prev");
const btnReviewNext = document.getElementById("btn-review-next");

// Modal Elements
const checkoutModal = document.getElementById("checkout-modal");
const checkoutOverlay = document.getElementById("checkout-overlay");
const checkoutClose = document.getElementById("checkout-close");
const tabKaspi = document.getElementById("tab-kaspi");
const tabCard = document.getElementById("tab-card");
const panelKaspi = document.getElementById("panel-kaspi");
const panelCard = document.getElementById("panel-card");

const checkoutCancelBtn = document.getElementById("checkout-cancel-btn");
const checkoutPayBtn = document.getElementById("checkout-pay-btn");
const successCloseBtn = document.getElementById("success-close-btn");
const checkoutSuccessView = document.getElementById("checkout-success-view");

const toastContainer = document.getElementById("toast-container");

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initGlobalListeners();
    initFAQAccordions();
    lucide.createIcons();
});

// --- Header scroll effect ---
window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// --- Reviews Carousel ---
function updateReviewCard() {
    const data = REVIEWS_DATABASE[currentReviewIndex];
    
    activeReviewCard.style.opacity = 0;
    activeReviewCard.style.transform = "translateX(10px)";
    
    setTimeout(() => {
        activeReviewCard.querySelector(".review-user-meta").textContent = `• ${data.city}`;
        activeReviewCard.querySelector(".review-quote").textContent = data.quote;
        activeReviewCard.querySelector(".review-author").textContent = data.author;
        
        activeReviewCard.style.opacity = 1;
        activeReviewCard.style.transform = "translateX(0)";
    }, 200);
}

function nextReview() {
    currentReviewIndex = (currentReviewIndex + 1) % REVIEWS_DATABASE.length;
    updateReviewCard();
}

function prevReview() {
    currentReviewIndex = (currentReviewIndex - 1 + REVIEWS_DATABASE.length) % REVIEWS_DATABASE.length;
    updateReviewCard();
}

// --- FAQ Accordions ---
function initFAQAccordions() {
    const triggers = document.querySelectorAll(".faq-trigger");
    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const item = trigger.parentNode;
            const content = item.querySelector(".faq-content");
            const isActive = item.classList.contains("active");
            
            // Close other items
            document.querySelectorAll(".faq-item.active").forEach(activeItem => {
                if (activeItem !== item) {
                    activeItem.classList.remove("active");
                    activeItem.querySelector(".faq-content").style.maxHeight = null;
                }
            });
            
            if (isActive) {
                item.classList.remove("active");
                content.style.maxHeight = null;
            } else {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}

// --- Checkout Modal Logic ---
function openCheckout() {
    // Reset modal view
    checkoutSuccessView.classList.add("hidden");
    const modalContent = checkoutModal.querySelector(".checkout-modal-content");
    modalContent.classList.remove("hidden");
    
    // Reset buttons
    const btnText = checkoutPayBtn.querySelector(".pay-btn-text");
    const btnSpinner = checkoutPayBtn.querySelector(".pay-btn-spinner");
    btnText.classList.remove("hidden");
    btnSpinner.classList.add("hidden");
    checkoutPayBtn.disabled = false;
    
    selectPaymentTab("kaspi");
    
    checkoutModal.classList.add("active");
    checkoutOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

// Close Modal
function closeCheckout() {
    checkoutModal.classList.remove("active");
    checkoutOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

function selectPaymentTab(method) {
    const btnText = checkoutPayBtn.querySelector(".pay-btn-text");
    if (method === "kaspi") {
        tabKaspi.classList.add("active");
        tabCard.classList.remove("active");
        panelKaspi.classList.add("active");
        panelCard.classList.remove("active");
        btnText.textContent = "Мен Kaspi QR арқылы төледім";
    } else {
        tabKaspi.classList.remove("active");
        tabCard.classList.add("active");
        panelKaspi.classList.remove("active");
        panelCard.classList.add("active");
        btnText.textContent = "Картамен төлеу";
    }
}

function processPayment() {
    // Card inputs validation
    if (tabCard.classList.contains("active")) {
        const cardNumInput = document.getElementById("card-number-input");
        const cardExpiryInput = document.getElementById("card-expiry-input");
        const cardCvvInput = document.getElementById("card-cvv-input");
        
        const cardNum = cardNumInput ? cardNumInput.value.replace(/\s/g, "") : "";
        const cardExpiry = cardExpiryInput ? cardExpiryInput.value.trim() : "";
        const cardCvv = cardCvvInput ? cardCvvInput.value.trim() : "";
        
        if (cardNum.length !== 16) {
            showToast("Карта нөмірін дұрыс енгізіңіз (16 сан)!", "error");
            return;
        }
        
        if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
            showToast("Мерзімін MM/YY форматында енгізіңіз!", "error");
            return;
        }
        
        const [month, year] = cardExpiry.split("/").map(Number);
        if (month < 1 || month > 12) {
            showToast("Жарамды айды енгізіңіз (01-12)!", "error");
            return;
        }
        
        if (cardCvv.length !== 3 || !/^\d{3}$/.test(cardCvv)) {
            showToast("CVV кодын дұрыс енгізіңіз (3 сан)!", "error");
            return;
        }
    }

    const btnText = checkoutPayBtn.querySelector(".pay-btn-text");
    const btnSpinner = checkoutPayBtn.querySelector(".pay-btn-spinner");
    
    btnText.classList.add("hidden");
    btnSpinner.classList.remove("hidden");
    checkoutPayBtn.disabled = true;
    
    // Simulate checkout transaction
    setTimeout(() => {
        const modalContent = checkoutModal.querySelector(".checkout-modal-content");
        modalContent.classList.add("hidden");
        checkoutSuccessView.classList.remove("hidden");
        
        showToast("Төлем сәтті расталды!", "success");
        spawnSuccessHearts();
    }, 2000);
}

// --- Toast System ---
function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast ${type === "error" ? "error" : ""}`;
    
    const icon = type === "success" ? "check-circle" : "sparkles";
    
    toast.innerHTML = `
        <i data-lucide="${icon}" class="toast-icon"></i>
        <span class="toast-text">${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    lucide.createIcons();
    
    setTimeout(() => toast.classList.add("show"), 50);
    
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 450);
    }, 3500);
}

// --- Success Confetti Particles ---
function spawnSuccessHearts() {
    const colors = ["#dfba6b", "#153e2d", "#bca057", "#f4efeb"];
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");
        heart.style.position = "absolute";
        heart.style.width = `${Math.random() * 8 + 6}px`;
        heart.style.height = `${Math.random() * 8 + 6}px`;
        heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        heart.style.borderRadius = "50% 50% 0 0";
        heart.style.transform = "rotate(-45deg)";
        heart.style.left = "50%";
        heart.style.top = "45%";
        heart.style.zIndex = "250";
        heart.style.pointerEvents = "none";
        
        const style = document.createElement('style');
        style.innerHTML = `
            .success-heart::before, .success-heart::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: inherit;
                border-radius: 50%;
            }
            .success-heart::before { top: -50%; left: 0; }
            .success-heart::after { left: 50%; top: 0; }
        `;
        document.head.appendChild(style);
        heart.className = "success-heart";
        
        checkoutModal.appendChild(heart);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 120 + 80;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity - 50;
        
        heart.animate([
            { transform: "translate(0, 0) rotate(-45deg) scale(1)", opacity: 1 },
            { transform: `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg) scale(0.3)`, opacity: 0 }
        ], {
            duration: Math.random() * 800 + 600,
            easing: "cubic-bezier(0.1, 0.8, 0.25, 1)",
            fill: "forwards"
        });
        
        setTimeout(() => heart.remove(), 1500);
    }
}

// --- Global Listeners ---
function initGlobalListeners() {
    // Open Modal Triggers
    const openBtns = document.querySelectorAll(".btn-open-checkout");
    openBtns.forEach(btn => btn.addEventListener("click", openCheckout));
    
    // Close Modal Triggers
    checkoutClose.addEventListener("click", closeCheckout);
    checkoutOverlay.addEventListener("click", closeCheckout);
    checkoutCancelBtn.addEventListener("click", closeCheckout);
    successCloseBtn.addEventListener("click", closeCheckout);
    
    // Payment Tabs
    tabKaspi.addEventListener("click", () => selectPaymentTab("kaspi"));
    tabCard.addEventListener("click", () => selectPaymentTab("card"));
    
    // Pay Action
    checkoutPayBtn.addEventListener("click", processPayment);
    
    // Carousel navigation
    if (btnReviewPrev && btnReviewNext) {
        btnReviewPrev.addEventListener("click", prevReview);
        btnReviewNext.addEventListener("click", nextReview);
    }
    
    // Card dynamic formatting and previews
    const cardNumInput = document.getElementById("card-number-input");
    const cardNumPreview = document.getElementById("cc-card-number-preview");
    const cardExpiryInput = document.getElementById("card-expiry-input");
    const cardExpiryPreview = document.getElementById("cc-expiry-preview");

    if (cardNumInput && cardNumPreview) {
        cardNumInput.addEventListener("input", (e) => {
            let val = e.target.value.replace(/\D/g, "");
            let formatted = "";
            for (let i = 0; i < val.length; i++) {
                if (i > 0 && i % 4 === 0) formatted += " ";
                formatted += val[i];
            }
            e.target.value = formatted;
            cardNumPreview.textContent = formatted || "•••• •••• •••• 1122";
        });
    }

    if (cardExpiryInput && cardExpiryPreview) {
        cardExpiryInput.addEventListener("input", (e) => {
            let val = e.target.value.replace(/\D/g, "");
            if (val.length > 2) {
                val = val.substring(0, 2) + "/" + val.substring(2, 4);
            }
            e.target.value = val;
            cardExpiryPreview.textContent = val || "12/28";
        });
    }

    // Social Links Toasts
    const socialLinks = document.querySelectorAll(".social-link");
    socialLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            showToast("Бұл әлеуметтік желі әзірге қосылмаған!", "info");
        });
    });

    // Logo Click scroll to top
    const logoLink = document.getElementById("logo-link");
    if (logoLink) {
        logoLink.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}
