// ====================================================
// "CLOSE FRIENDS (БД)" INTERACTIVE LOGIC (RU VERSION)
// ====================================================

// --- Reviews Database ---
const REVIEWS_DATABASE = [
    {
        city: "г. Алматы",
        quote: "«Я пришла в БД в период тяжелого выгорания на работе. Казалось, что меня никто не понимает. За 21 день я не просто обрела круг потрясающих девчонок, с которыми мы до сих пор общаемся, но и выстроила личные границы. Отношения в семье улучшились, а тревога ушла.»",
        author: "— Айгерим, 31 год, маркетолог"
    },
    {
        city: "г. Астана",
        quote: "«Как маме троих детей, мне казалось невозможным найти время на себя. Программа БД научила меня правильному планированию и заботе о своем ресурсе без чувства вины. Муж заметил, как я расцвела, дома воцарился покой. Спасибо автору за это теплое пространство!»",
        author: "— Динара, 39 лет, мама троих детей"
    },
    {
        city: "г. Шымкент",
        quote: "«Самое ценное в этой программе — это дисциплина и окружение. Ежедневные отчеты в чате мотивируют делать действия, а поддержка девочек дает силы. Я наконец-то решилась сменить сферу деятельности и увеличила доход. Это лучшая инвестиция в себя!»",
        author: "— Сабина, 28 лет, дизайнер"
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
    initQuiz();
    initTimelineTabs();
    initFounderTabs();
    lucide.createIcons();
});

// --- Timeline week tabs ---
function initTimelineTabs() {
    const tabBtns = document.querySelectorAll(".timeline-tab-btn");
    const dayGrids = document.querySelectorAll(".timeline-days-grid");
    
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const weekNum = btn.getAttribute("data-week");
            
            tabBtns.forEach(b => b.classList.remove("active"));
            dayGrids.forEach(g => g.classList.remove("active"));
            
            btn.classList.add("active");
            const targetGrid = document.getElementById(`week-${weekNum}-days`);
            if (targetGrid) {
                targetGrid.classList.add("active");
            }
        });
    });
}

// --- Founder Bio Editorial Tabs ---
function initFounderTabs() {
    const tabBtns = document.querySelectorAll(".founder-tab-btn");
    const tabContents = document.querySelectorAll(".founder-tab-content");
    
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const tabName = btn.getAttribute("data-tab");
            
            tabBtns.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));
            
            btn.classList.add("active");
            const targetContent = document.getElementById(`founder-tab-${tabName}`);
            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });
}

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
        btnText.textContent = "Я оплатила через Kaspi QR";
    } else {
        tabKaspi.classList.remove("active");
        tabCard.classList.add("active");
        panelKaspi.classList.remove("active");
        panelCard.classList.add("active");
        btnText.textContent = "Оплатить картой";
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
            showToast("Введите корректный номер карты (16 цифр)!", "error");
            return;
        }
        
        if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
            showToast("Введите срок действия в формате MM/YY!", "error");
            return;
        }
        
        const [month, year] = cardExpiry.split("/").map(Number);
        if (month < 1 || month > 12) {
            showToast("Введите корректный месяц (01-12)!", "error");
            return;
        }
        
        if (cardCvv.length !== 3 || !/^\d{3}$/.test(cardCvv)) {
            showToast("Введите корректный код CVV (3 цифры)!", "error");
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
        
        showToast("Платеж успешно подтвержден!", "success");
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
        
        // Pseudo elements for heart geometry
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

    // Card brand logo auto-detect
    const brandLogo = document.getElementById("cc-brand-logo");
    if (cardNumInput && brandLogo) {
        cardNumInput.addEventListener("input", (e) => {
            const firstDigit = e.target.value.charAt(0);
            if (firstDigit === "4") {
                brandLogo.textContent = "Visa";
                brandLogo.style.color = "#a78bfa";
            } else if (firstDigit === "5") {
                brandLogo.textContent = "Mastercard";
                brandLogo.style.color = "#f97316";
            } else {
                brandLogo.textContent = "Visa / Mastercard";
                brandLogo.style.color = "var(--gold-primary)";
            }
        });
    }

    // Card CVV focus and flip
    const cvvInput = document.getElementById("card-cvv-input");
    const flipCard = document.getElementById("cc-flip-card");
    const cvvPreview = document.getElementById("cc-cvv-preview");
    if (cvvInput && flipCard) {
        cvvInput.addEventListener("focus", () => {
            flipCard.classList.add("flipped");
        });
        cvvInput.addEventListener("blur", () => {
            flipCard.classList.remove("flipped");
        });
        cvvInput.addEventListener("input", (e) => {
            let val = e.target.value.replace(/\D/g, "");
            e.target.value = val;
            if (cvvPreview) {
                cvvPreview.textContent = val || "•••";
            }
        });
    }

    // Social Links Toasts
    const socialLinks = document.querySelectorAll(".social-link");
    socialLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            showToast("Эта соцсеть пока не подключена!", "info");
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

// --- Interactive Diagnostic Quiz Logic ---
function initQuiz() {
    const btnStart = document.getElementById("btn-quiz-start");
    const introStep = document.getElementById("quiz-step-intro");
    const resultView = document.getElementById("quiz-result-view");
    
    if (!btnStart) return;

    let currentStep = 0; // 0 = intro, 1-5 = questions
    let quizScores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    function getStepEl(stepNum) {
        if (stepNum === 0) return introStep;
        return document.getElementById(`quiz-step-${stepNum}`);
    }

    function transitionStep(fromNum, toNum, direction) {
        const fromEl = getStepEl(fromNum);
        const toEl = getStepEl(toNum);
        if (!fromEl || !toEl) return;

        toEl.classList.remove("slide-left", "slide-right");

        if (direction === "next") {
            fromEl.classList.add("slide-left");
            fromEl.classList.remove("active");
            toEl.classList.add("active");
        } else {
            fromEl.classList.add("slide-right");
            fromEl.classList.remove("active");
            toEl.classList.add("active");
        }

        setTimeout(() => {
            fromEl.classList.remove("slide-left", "slide-right");
        }, 400);
    }

    // Start Quiz
    btnStart.addEventListener("click", () => {
        transitionStep(0, 1, "next");
        currentStep = 1;
    });

    // Setup Option Card Click Event for all 5 steps
    for (let step = 1; step <= 5; step++) {
        const stepEl = document.getElementById(`quiz-step-${step}`);
        if (!stepEl) continue;

        const options = stepEl.querySelectorAll(".quiz-option-card");
        options.forEach(option => {
            option.addEventListener("click", () => {
                // Remove selection from siblings
                options.forEach(opt => opt.classList.remove("selected"));
                // Add selection to clicked
                option.classList.add("selected");
                
                // Store score
                const val = parseInt(option.getAttribute("data-value"));
                quizScores[step] = val;
            });
        });

        // Next button handler
        const btnNext = stepEl.querySelector(".btn-quiz-next");
        if (btnNext) {
            btnNext.addEventListener("click", () => {
                if (quizScores[step] === 0) {
                    showToast("Пожалуйста, выберите один из вариантов ответа!", "error");
                    return;
                }
                // Transition to next
                transitionStep(step, step + 1, "next");
                currentStep = step + 1;
            });
        }

        // Prev button handler
        const btnPrev = stepEl.querySelector(".btn-quiz-prev");
        if (btnPrev) {
            btnPrev.addEventListener("click", () => {
                transitionStep(step, step - 1, "prev");
                currentStep = step - 1;
            });
        }
    }

    function animateGauge(scorePercent, zoneColor) {
        const circle = document.getElementById("results-gauge-circle");
        const text = document.getElementById("results-gauge-value");
        if (!circle || !text) return;
        
        const circumference = 440;
        circle.style.stroke = zoneColor;
        
        let currentPercent = 0;
        const interval = setInterval(() => {
            if (currentPercent >= scorePercent) {
                currentPercent = scorePercent;
                clearInterval(interval);
            }
            text.textContent = `${currentPercent}%`;
            const offset = circumference - (currentPercent / 100) * circumference;
            circle.style.strokeDashoffset = offset;
            
            if (currentPercent < scorePercent) {
                currentPercent++;
            }
        }, 15);
    }

    // Finish button handler
    const btnFinish = document.getElementById("btn-quiz-finish");
    if (btnFinish) {
        btnFinish.addEventListener("click", () => {
            if (quizScores[5] === 0) {
                showToast("Пожалуйста, выберите один из вариантов ответа!", "error");
                return;
            }
            
            // Calculate score
            const total = quizScores[1] + quizScores[2] + quizScores[3] + quizScores[4] + quizScores[5];
            
            // Hide question 5
            const q5El = document.getElementById("quiz-step-5");
            q5El.classList.remove("active");
            
            // Show result view
            resultView.classList.add("active");
            
            // Hide all zones
            document.getElementById("zone-red").classList.add("hidden");
            document.getElementById("zone-yellow").classList.add("hidden");
            document.getElementById("zone-green").classList.add("hidden");
            
            // Calculate resource percentage: 5 score -> 15%, 15 score -> 95%
            const resourcePercent = Math.round(15 + ((total - 5) / 10) * 80);
            
            // Show matched zone and color
            let targetZoneId = "";
            let zoneColor = "";
            if (total >= 5 && total <= 8) {
                targetZoneId = "zone-red";
                zoneColor = "#A85850";
            } else if (total >= 9 && total <= 12) {
                targetZoneId = "zone-yellow";
                zoneColor = "#BCA057";
            } else {
                targetZoneId = "zone-green";
                zoneColor = "#153E2D";
            }
            
            const targetZone = document.getElementById(targetZoneId);
            targetZone.classList.remove("hidden");
            
            // Trigger circular progress ring gauge animation
            animateGauge(resourcePercent, zoneColor);
            
            // Setup CTA buttons inside the loaded zone card
            const ctaBtn = targetZone.querySelector(".btn-open-checkout");
            if (ctaBtn) {
                ctaBtn.addEventListener("click", openCheckout);
            }
        });
    }
}
