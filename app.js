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
    initWheelOfBalance();
    initAudioPlayer();
    initMockupSlider();
    initTimelineTabs();
    initFounderTabs();
    initFAQSearch();
    initChatSimulator();
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

// --- FAQ Live Search ---
function initFAQSearch() {
    const searchInput = document.getElementById("faq-search-input");
    const faqItems = document.querySelectorAll(".faq-item");
    if (!searchInput || faqItems.length === 0) return;

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        faqItems.forEach(item => {
            const questionText = item.querySelector(".faq-trigger span") ? item.querySelector(".faq-trigger span").textContent.toLowerCase() : "";
            const answerText = item.querySelector(".faq-content p") ? item.querySelector(".faq-content p").textContent.toLowerCase() : "";
            
            if (questionText.includes(query) || answerText.includes(query)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });
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
    
    const processingView = document.getElementById("checkout-processing-view");
    if (processingView) processingView.classList.add("hidden");
    
    const statusText = document.getElementById("processing-status-text");
    if (statusText) {
        statusText.textContent = "Установление безопасного соединения с Freedom Pay...";
    }
    
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
    
    const modalContent = checkoutModal.querySelector(".checkout-modal-content");
    const processingView = document.getElementById("checkout-processing-view");
    const statusText = document.getElementById("processing-status-text");
    
    // Hide inputs, show loader
    modalContent.classList.add("hidden");
    processingView.classList.remove("hidden");
    
    // Step-by-step progress simulation
    setTimeout(() => {
        if (statusText) {
            statusText.style.opacity = "0";
            setTimeout(() => {
                statusText.textContent = "Авторизация транзакции и проверка 3D Secure...";
                statusText.style.opacity = "1";
            }, 300);
        }
    }, 900);
    
    setTimeout(() => {
        if (statusText) {
            statusText.style.opacity = "0";
            setTimeout(() => {
                statusText.textContent = "Подтверждение платежа банком-эмитентом...";
                statusText.style.opacity = "1";
            }, 300);
        }
    }, 1800);
    
    setTimeout(() => {
        processingView.classList.add("hidden");
        checkoutSuccessView.classList.remove("hidden");
        
        showToast("Платеж успешно подтвержден!", "success");
        spawnSuccessHearts();
    }, 2800);
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

    // Preferred language switcher saver
    const langBtn = document.querySelector(".lang-toggle-btn");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            localStorage.setItem("preferred-lang", "kk");
        });
    }
}

// --- Gauge Meter Animation Helper ---
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
    }, 12);
}

// --- Wheel of Balance ---
function initWheelOfBalance() {
    const sliders = document.querySelectorAll(".wheel-range-slider");
    const polygon = document.getElementById("wheel-filled-polygon");
    const submitBtn = document.getElementById("btn-submit-wheel");
    const resultsContainer = document.getElementById("wheel-results-container");
    const leadFormSection = document.getElementById("wheel-lead-form-section");

    if (!polygon || sliders.length === 0) return;

    let levels = [5, 5, 5, 5, 5, 5, 5, 5];

    function updateWheel() {
        let points = [];
        sliders.forEach((slider, index) => {
            const val = parseInt(slider.value);
            levels[index] = val;
            const r = (val * 12);
            const angle = -Math.PI / 2 + (index * Math.PI / 4);
            const x = (r * Math.cos(angle)).toFixed(2);
            const y = (r * Math.sin(angle)).toFixed(2);
            points.push(`${x},${y}`);

            const valOutput = document.getElementById(`val-${index}`);
            if (valOutput) {
                valOutput.textContent = val;
            }
        });
        polygon.setAttribute("points", points.join(" "));
    }

    sliders.forEach((slider, index) => {
        slider.addEventListener("input", updateWheel);
    });

    updateWheel();

    const svg = document.getElementById("wheel-svg");
    if (svg) {
        svg.addEventListener("click", (e) => {
            const rect = svg.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxRadiusPx = rect.width * 0.4;
            
            let level = Math.round((distance / maxRadiusPx) * 10);
            level = Math.max(1, Math.min(10, level));
            
            let angle = Math.atan2(dy, dx);
            let normalizedAngle = angle + Math.PI / 2;
            if (normalizedAngle < 0) normalizedAngle += Math.PI * 2;
            
            const sectorIndex = Math.round(normalizedAngle / (Math.PI / 4)) % 8;
            
            const slider = document.getElementById(`slider-${sectorIndex}`);
            if (slider) {
                slider.value = level;
                slider.dispatchEvent(new Event('input'));
            }
        });
    }

    if (submitBtn) {
        submitBtn.addEventListener("click", () => {
            const nameInput = document.getElementById("wheel-user-name");
            const phoneInput = document.getElementById("wheel-user-phone");
            const name = nameInput ? nameInput.value.trim() : "";
            const phone = phoneInput ? phoneInput.value.trim() : "";

            if (!name) {
                showToast("Пожалуйста, введите ваше имя!", "error");
                return;
            }
            if (phone.length < 5) {
                showToast("Пожалуйста, введите корректный номер WhatsApp!", "error");
                return;
            }

            leadFormSection.classList.add("hidden");
            resultsContainer.classList.remove("hidden");

            const totalScore = levels.reduce((acc, curr) => acc + curr, 0);
            const scorePercent = Math.round((totalScore / 80) * 100);

            document.getElementById("wheel-zone-red").classList.add("hidden");
            document.getElementById("wheel-zone-yellow").classList.add("hidden");
            document.getElementById("wheel-zone-green").classList.add("hidden");

            let targetZoneId = "";
            let zoneColor = "";
            if (scorePercent <= 50) {
                targetZoneId = "wheel-zone-red";
                zoneColor = "#A85850";
            } else if (scorePercent > 50 && scorePercent <= 75) {
                targetZoneId = "wheel-zone-yellow";
                zoneColor = "#BCA057";
            } else {
                targetZoneId = "wheel-zone-green";
                zoneColor = "#153E2D";
            }

            const targetZone = document.getElementById(targetZoneId);
            if (targetZone) targetZone.classList.remove("hidden");

            animateGauge(scorePercent, zoneColor);

            const openPayBtns = resultsContainer.querySelectorAll(".btn-open-checkout");
            openPayBtns.forEach(btn => {
                btn.addEventListener("click", openCheckout);
            });
        });
    }
}

// --- Audio Meditation Player ---
function initAudioPlayer() {
    const audio = document.getElementById("meditation-audio");
    const playPauseBtn = document.getElementById("btn-play-pause");
    const playIcon = document.getElementById("play-icon");
    const progressSlider = document.getElementById("audio-progress");
    const timeCurrent = document.getElementById("time-current");
    const timeTotal = document.getElementById("time-total");
    const waveVisualizer = document.getElementById("wave-visualizer");

    if (!audio || !playPauseBtn) return;

    function formatTime(secs) {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    playPauseBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playIcon.setAttribute("data-lucide", "pause");
            waveVisualizer.classList.add("playing");
        } else {
            audio.pause();
            playIcon.setAttribute("data-lucide", "play");
            waveVisualizer.classList.remove("playing");
        }
        lucide.createIcons();
    });

    audio.addEventListener("timeupdate", () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressSlider.value = progress || 0;
        timeCurrent.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener("loadedmetadata", () => {
        timeTotal.textContent = formatTime(audio.duration);
    });

    progressSlider.addEventListener("input", () => {
        const time = (progressSlider.value / 100) * audio.duration;
        audio.currentTime = time;
    });

    audio.addEventListener("ended", () => {
        playIcon.setAttribute("data-lucide", "play");
        waveVisualizer.classList.remove("playing");
        progressSlider.value = 0;
        timeCurrent.textContent = "0:00";
        lucide.createIcons();
    });
}

// --- Smartphone Mockup Slider ---
function initMockupSlider() {
    const slides = document.querySelectorAll(".screen-slide");
    const dots = document.querySelectorAll(".mockup-dot-btn");
    
    if (slides.length === 0 || dots.length === 0) return;

    let currentSlide = 0;
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        currentSlide = index;
        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            clearInterval(autoSlideInterval);
            const index = parseInt(dot.getAttribute("data-slide"));
            showSlide(index);
            startAutoSlide();
        });
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            let nextSlide = (currentSlide + 1) % slides.length;
            showSlide(nextSlide);
        }, 4000);
    }

    startAutoSlide();
}

// --- Interactive Chat Simulator ---
function initChatSimulator() {
    const chatLog = document.getElementById("chat-messages-log");
    const chatInput = document.getElementById("chat-input-field");
    const sendBtn = document.getElementById("chat-send-btn");

    if (!chatLog || !chatInput || !sendBtn) return;

    function appendMessage(text, isOutgoing) {
        const bubble = document.createElement("div");
        bubble.className = `chat-bubble ${isOutgoing ? 'outgoing' : 'incoming'}`;
        bubble.textContent = text;
        chatLog.appendChild(bubble);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function showTypingIndicator() {
        const indicator = document.createElement("div");
        indicator.className = "typing-indicator";
        indicator.id = "chat-typing-indicator";
        
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement("div");
            dot.className = "typing-dot";
            indicator.appendChild(dot);
        }
        
        chatLog.appendChild(indicator);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById("chat-typing-indicator");
        if (indicator) {
            indicator.remove();
        }
    }

    function handleSend() {
        const text = chatInput.value.trim();
        if (!text) return;

        // Append user's message
        appendMessage(text, true);
        chatInput.value = "";

        // Trigger bot response after a delay
        showTypingIndicator();

        setTimeout(() => {
            removeTypingIndicator();
            
            // Analyze keywords to customize response
            const lowerText = text.toLowerCase();
            let botResponse = "";
            let isCrisis = false;

            if (lowerText.includes("смерть") || lowerText.includes("умру") || lowerText.includes("умереть") || lowerText.includes("убить себя") || lowerText.includes("покончить с собой") || lowerText.includes("суицид") || lowerText.includes("не хочу жить") || lowerText.includes("өлгім") || lowerText.includes("өлу")) {
                botResponse = "Дорогая, мне очень жаль, что ты проходишь через это, но твоя жизнь бесценна. Пожалуйста, не оставайся наедине со своей болью. Ты можешь бесплатно и анонимно получить профессиональную помощь. В Казахстане работает единая государственная служба психологической помощи: позвони по номеру 111 или 150 (звонок бесплатный и круглосуточный).";
                isCrisis = true;
            } else if (lowerText.includes("помощь") || lowerText.includes("поможешь") || lowerText.includes("помочь") || lowerText.includes("умеешь") || lowerText.includes("можешь") || lowerText.includes("көмек")) {
                botResponse = "Я — виртуальный помощник сообщества «Близкие Друзья». Я здесь, чтобы подсказать, как наше пространство и программа могут помочь тебе вернуть душевное равновесие, выстроить личные границы и найти поддерживающее окружение. В самом клубе тебе будут помогать профессиональные психологи, опытные кураторы и поддерживающий круг женщин. Расскажи, с какими сложностями ты сейчас сталкиваешься?";
            } else if (lowerText.includes("ене") || lowerText.includes("свекровь") || lowerText.includes("родственник") || lowerText.includes("семья") || lowerText.includes("родител") || lowerText.includes("муж")) {
                botResponse = "Отношения с близкими — это часто сложнейшая тема. Ты имеешь право на свои границы и личное пространство. В нашем клубе мы часто разбираем с психологами темы сепарации и здоровых границ.";
            } else if (lowerText.includes("уят") || lowerText.includes("жұрт") || lowerText.includes("люди") || lowerText.includes("осужден") || lowerText.includes("стыд") || lowerText.includes("позор")) {
                botResponse = "Страх осуждения и синдром «уят» часто сковывают нас. Но помни: твоя жизнь принадлежит только тебе. Ты заслуживаешь жить свободно и счастливо, не пытаясь угодить всем вокруг.";
            } else if (lowerText.includes("шарша") || lowerText.includes("уста") || lowerText.includes("выгор") || lowerText.includes("быт") || lowerText.includes("декрет") || lowerText.includes("силы")) {
                botResponse = "Береги себя, дорогая. Усталость — это сигнал, что твой ресурс на исходе. Тебе нужна теплая поддержка и отдых без чувства вины. Наша программа создана именно для бережного возвращения сил.";
            } else {
                botResponse = "Спасибо, что поделилась своей историей. Твои чувства абсолютно важны. Ты не должна нести эту нагрузку в одиночку. В клубе «Близкие Друзья» мы помогаем друг другу справляться с трудностями в атмосфере тепла и безопасности.";
            }

            // Append bot response
            appendMessage(botResponse, false);

            // Append a small CTA bubble right after
            setTimeout(() => {
                const ctaBubble = document.createElement("div");
                ctaBubble.className = "chat-bubble incoming chat-cta-link-bubble";
                
                const ctaText = document.createElement("p");
                ctaText.style.margin = "0 0 8px 0";
                
                const ctaBtn = document.createElement("a");
                ctaBtn.className = "chat-cta-btn";
                
                if (isCrisis) {
                    ctaText.textContent = "Пожалуйста, обратись за помощью прямо сейчас. Специалисты готовы выслушать тебя:";
                    ctaBtn.href = "tel:111";
                    ctaBtn.textContent = "Позвонить на 111";
                } else {
                    ctaText.textContent = "Ты достойна заботы и лучшего окружения. Давай сделаем первый шаг вместе:";
                    ctaBtn.href = "#pricing";
                    ctaBtn.textContent = "Узнать о программе";
                }
                
                ctaBubble.appendChild(ctaText);
                ctaBubble.appendChild(ctaBtn);
                chatLog.appendChild(ctaBubble);
                chatLog.scrollTop = chatLog.scrollHeight;
            }, 800);

        }, 1500);
    }

    sendBtn.addEventListener("click", handleSend);
    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    });
}
