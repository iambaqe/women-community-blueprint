// ====================================================
// UMAY WOMEN COMMUNITY INTERACTIVE LOGIC (RU VERSION)
// ====================================================

// --- Tests Database ---
const TESTS_DATABASE = {
    kelin: {
        title: "Какая ты келін?",
        category: "Традиции и личные границы",
        questions: [
            {
                text: "Родственники мужа сообщили, что приедут в гости через 30 минут. Ваша реакция?",
                answers: [
                    { text: "Начинаю судорожно убираться, готовить бешбармак и баурсаки.", points: 10 },
                    { text: "Спокойно заказываю доставку еды и навожу легкий порядок.", points: 30 },
                    { text: "Прошу мужа вежливо перенести встречу на другое время.", points: 40 },
                    { text: "Закрываюсь в спальне, говорю, что заболела.", points: 20 }
                ]
            },
            {
                text: "Кто в вашем доме решает, куда вы поедете отдыхать или как потратите крупные сбережения?",
                answers: [
                    { text: "Муж или его родители. Моё мнение редко учитывается.", points: 10 },
                    { text: "Мы решаем с мужем вместе, но последнее слово всегда за ним.", points: 20 },
                    { text: "Мы обсуждаем все крупные решения на равных правах.", points: 40 },
                    { text: "Каждый тратит свои деньги сам, отпуск планирую я.", points: 30 }
                ]
            },
            {
                text: "Вам не нравится критика в адрес вашего метода воспитания детей от родственников. Что сделаете?",
                answers: [
                    { text: "Молча выслушаю, затаю обиду, но ничего не скажу.", points: 10 },
                    { text: "Попрошу мужа поговорить с его мамой/родственниками.", points: 30 },
                    { text: "Спокойно и твердо отвечу: «Спасибо за совет, но мы воспитываем так».", points: 40 },
                    { text: "Начну спорить и защищаться, это приведет к ссоре.", points: 20 }
                ]
            },
            {
                text: "Какое утверждение лучше всего описывает ваше ощущение себя в семье?",
                answers: [
                    { text: "Я чувствую себя служанкой, обязанной всем угождать.", points: 10 },
                    { text: "Я хорошая жена, но часто жертвую своими желаниями.", points: 25 },
                    { text: "Я любима, ценна и имею личное пространство и увлечения.", points: 40 },
                    { text: "Я чувствую себя бунтаркой, постоянно идущей против системы.", points: 30 }
                ]
            }
        ],
        results: [
            {
                min: 0, max: 60,
                title: "Вы — «Жертвенная Супер-Келін»",
                desc: "Вы живете ради одобрения окружающих, забывая о себе. Риск эмоционального выгорания и потери себя составляет 90%. Вам срочно нужно выстраивать личные границы.",
                pdf: "План «Как говорить НЕТ свекрови без чувства вины и уята»"
            },
            {
                min: 61, max: 110,
                title: "Вы — «Традиционная Келін на распутье»",
                desc: "Вы стараетесь соблюдать баланс, но внутренний конфликт между традициями и личными желаниями забирает много энергии. Вам нужна поддержка единомышленниц.",
                pdf: "Гайд «Личные границы в традиционной казахстанской семье»"
            },
            {
                min: 111, max: 160,
                title: "Вы — «Осознанная Келін»",
                desc: "Поздравляем! Вы умеете ценить и себя, и традиции мужа. Вы выстроили экологичные границы, но всегда есть зоны роста, которые мы развиваем в клубе UMAY.",
                pdf: "Чек-лист «Секреты психологического здоровья в браке»"
            }
        ]
    },
    burnout: {
        title: "Уровень выгорания и ресурса",
        category: "Психологическое здоровье",
        questions: [
            {
                text: "Как часто вы просыпаетесь уже уставшей, даже если спали достаточно часов?",
                answers: [
                    { text: "Почти каждый день. Утро начинается с чувства бессилия.", points: 10 },
                    { text: "Часто, 2-3 раза в неделю.", points: 20 },
                    { text: "Редко, только после очень тяжелых дней.", points: 35 },
                    { text: "Никогда. Просыпаюсь полной сил и бодрости.", points: 40 }
                ]
            },
            {
                text: "Насколько легко вас вывести из равновесия (разозлить, расстроить, довести до слез)?",
                answers: [
                    { text: "Очень легко. Взрываюсь от любой мелочи или детского каприза.", points: 10 },
                    { text: "Иногда срываюсь, потом чувствую вину.", points: 25 },
                    { text: "Умею сдерживать эмоции, но внутри все равно киплю.", points: 30 },
                    { text: "Спокойно реагирую на трудности, быстро возвращаюсь в дзен.", points: 40 }
                ]
            },
            {
                text: "Удается ли вам выделить хотя бы 1 час времени в день ИСКЛЮЧИТЕЛЬНО на себя (без детей, быта, работы)?",
                answers: [
                    { text: "Нет, у меня нет ни минуты личного времени.", points: 10 },
                    { text: "Редко, может раз в неделю на выходных.", points: 20 },
                    { text: "Да, но часто испытываю при этом чувство вины.", points: 30 },
                    { text: "Да, это мое священное время на отдых и хобби ежедневно.", points: 40 }
                ]
            },
            {
                text: "Какое чувство преобладает у вас в конце обычного дня?",
                answers: [
                    { text: "Полное опустошение и желание, чтобы меня никто не трогал.", points: 10 },
                    { text: "Усталость, но с легким чувством удовлетворения.", points: 25 },
                    { text: "Приятная утомленность, предвкушение отдыха.", points: 35 },
                    { text: "Удовлетворение жизнью и вдохновение на завтра.", points: 40 }
                ]
            }
        ],
        results: [
            {
                min: 0, max: 60,
                title: "У вас острая стадия выгорания (Красная зона)",
                desc: "Ваш ресурс истощен до нуля. Жизнь на автопилоте ведет к депрессии и психосоматике. Вам необходима бережная психологическая разгрузка и профессиональная помощь.",
                pdf: "Сборник экспресс-техник «Выход из выгорания за 7 шагов»"
            },
            {
                min: 61, max: 110,
                title: "Уровень ресурса средний (Желтая зона)",
                desc: "Вы балансируете на грани. Усталость накапливается, и если не начать заботиться о себе сейчас, наступит выгорание. Время уделить внимание своим желаниям.",
                pdf: "План «Ежедневные ритуалы заботы о себе для мамы и жены»"
            },
            {
                min: 111, max: 160,
                title: "У вас высокий уровень ресурса (Зеленая зона)",
                desc: "Вы умеете сохранять баланс и заботиться о своем внутреннем состоянии. Клуб UMAY поможет вам поддерживать этот уровень и развиваться в кругу единомышленниц.",
                pdf: "Гайд «Как удерживать высокий жизненный тонус и ресурс»"
            }
        ]
    },
    balance: {
        title: "Баланс карьеры и семьи",
        category: "Самореализация и тайм-менеджмент",
        questions: [
            {
                text: "Что происходит, когда вам нужно задержаться на работе или пойти на деловую встречу?",
                answers: [
                    { text: "Дома начинается скандал, муж или родственники высказывают недовольство.", points: 10 },
                    { text: "Я иду, но весь вечер переживаю и чувствую сильную вину перед детьми.", points: 20 },
                    { text: "Мы договариваемся с мужем / вызываем няню, все проходит спокойно.", points: 40 },
                    { text: "Я отказываюсь от любых карьерных возможностей ради покоя дома.", points: 15 }
                ]
            },
            {
                text: "Хватает ли вам энергии на теплое общение с мужем после рабочего дня?",
                answers: [
                    { text: "Нет, я прихожу выжатая как лимон, хочется только спать.", points: 10 },
                    { text: "Хватает только на бытовые разговоры о детях и счетах.", points: 20 },
                    { text: "Иногда мы находим время побыть только вдвоем.", points: 35 },
                    { text: "Да, мы умеем переключаться с работы на семейную нежность.", points: 40 }
                ]
            },
            {
                text: "Как вы оцениваете свои профессиональные успехи на данный момент?",
                answers: [
                    { text: "Я полностью растворилась в быту и потеряла свою квалификацию.", points: 10 },
                    { text: "Я работаю, но чувствую, что не раскрываю свой потенциал полностью.", points: 25 },
                    { text: "Я успешна в работе, но за это расплачиваюсь личной жизнью.", points: 30 },
                    { text: "Я гармонично развиваюсь в карьере и счастлива в семье.", points: 40 }
                ]
            },
            {
                text: "Какое решение вы примете, если вам предложат повышение, требующее больше времени?",
                answers: [
                    { text: "Сразу откажусь, семья важнее.", points: 15 },
                    { text: "Соглашусь, но буду жить в постоянном стрессе и чувстве вины.", points: 20 },
                    { text: "Сначала обсужу с семьей, перераспределю быт и только потом соглашусь.", points: 40 },
                    { text: "Конечно соглашусь, карьера на первом месте.", points: 30 }
                ]
            }
        ],
        results: [
            {
                min: 0, max: 60,
                title: "Сильный перекос в сторону быта/семьи",
                desc: "Вы полностью забросили свои карьерные цели и самореализацию. Это может привести к неудовлетворенности и кризису в будущем. Пора уделить время своему развитию.",
                pdf: "Гайд «Как маме начать зарабатывать на любимом деле в декрете»"
            },
            {
                min: 61, max: 110,
                title: "Вы балансируете на качелях стресса",
                desc: "Вы пытаетесь успеть всё и сразу, живя в постоянной спешке. В итоге страдают обе сферы. Вам нужны практики бережного планирования.",
                pdf: "Рабочая тетрадь «Тайм-баланс для современной казахстанки»"
            },
            {
                min: 111, max: 160,
                title: "Гармоничный баланс сфер жизни",
                desc: "Вы отлично справляетесь с интеграцией карьеры и личной жизни. Вы являетесь примером для многих! Делитесь опытом и вдохновляйтесь в клубе UMAY.",
                pdf: "Чек-лист «Масштабирование карьеры без ущерба для близких»"
            }
        ]
    }
};

// --- Stories Database ---
const STORIES_DATABASE = [
    {
        city: "г. Алматы",
        quote: "«После свадьбы я переехала в дом родителей мужа в другом городе. Мне было безумно сложно привыкнуть, я чувствовала себя чужой и постоянно плакала от бессилия. В клубе UMAY я нашла психологов, которые объяснили мне, как бережно выстраивать границы. Через месяц мои отношения со свекровью наладились, а главное — я вернула внутренний покой.»",
        author: "— Айдана, 24 года, келін"
    },
    {
        city: "г. Астана",
        quote: "«Я успешно руководила отделом в крупной компании, но дома с детьми срывалась на крик из-за дикой усталости. Синдром отличницы выжигал меня. Благодаря марафону по выгоранию в UMAY и поддержке других мам, я научилась делегировать быт и перестала винить себя за неидеальность. Дома наконец-то воцарились тишина и уют.»",
        author: "— Сабина, 34 года, мама двоих детей, карьеристка"
    },
    {
        city: "г. Шымкент",
        quote: "«Развод дался мне тяжело — казалось, что жизнь окончена, а общество меня осуждает. В UMAY я получила бесплатные консультации от семейного юриста клуба и прошла психологическую группу поддержки. Девочки буквально вернули меня к жизни. Сейчас я открыла свой бизнес и чувствую себя невероятно сильной и счастливой.»",
        author: "— Мадина, 29 лет, предприниматель"
    }
];

// --- App State ---
let activeTestId = "burnout";
let currentQuestionIndex = 0;
let userAnswers = [];
let currentStoryIndex = 0;

// --- DOM Selections ---
const testSelect = document.getElementById("test-select");
const testTitleLabel = document.getElementById("test-title-label");
const testCategoryLabel = document.getElementById("test-category-label");
const testProgressBarFill = document.getElementById("test-progress-bar-fill");
const testProgressNums = document.getElementById("test-progress-nums");
const testProgressContainer = document.getElementById("test-progress-container");

const testContentArea = document.getElementById("test-content-area");
const questionContainer = document.getElementById("question-container");
const leadFormContainer = document.getElementById("lead-form-container");
const resultsContainer = document.getElementById("results-container");

const leadCaptureForm = document.getElementById("lead-capture-form");
const leadNameInput = document.getElementById("lead-name");
const ccNameDisplay = document.getElementById("cc-name-display");

const resultScoreTxt = document.getElementById("result-score-txt");
const resultTitleTxt = document.getElementById("result-title-txt");
const resultDescTxt = document.getElementById("result-desc-txt");
const btnGetPdf = document.getElementById("btn-get-pdf");

// Carousel
const activeStoryCard = document.getElementById("active-story-card");
const btnStoryPrev = document.getElementById("btn-story-prev");
const btnStoryNext = document.getElementById("btn-story-next");

// Modals
const checkoutModal = document.getElementById("checkout-modal");
const checkoutOverlay = document.getElementById("checkout-overlay");
const checkoutClose = document.getElementById("checkout-close");
const headerJoinBtn = document.getElementById("header-join-btn");
const heroTestBtn = document.getElementById("hero-test-btn");
const btnBuyClubOffer = document.getElementById("btn-buy-club-offer");
const btnOpenCheckout = document.getElementById("btn-open-checkout");

const tabKaspi = document.getElementById("tab-kaspi");
const tabCard = document.getElementById("tab-card");
const panelKaspi = document.getElementById("panel-kaspi");
const panelCard = document.getElementById("panel-card");

const checkoutCancelBtn = document.getElementById("checkout-cancel-btn");
const checkoutPayBtn = document.getElementById("checkout-pay-btn");
const successCloseBtn = document.getElementById("success-close-btn");
const checkoutSuccessView = document.getElementById("checkout-success-view");

const toastContainer = document.getElementById("toast-container");
const petalContainer = document.getElementById("petal-container");

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initTest(activeTestId);
    initGlobalListeners();
    initFAQAccordions();
    spawnAmbientPetals();
    lucide.createIcons(); // render SVG icons
});

// --- Scrolled Header ---
window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// --- Test Lifecycle Logic ---
function initTest(testId) {
    activeTestId = testId;
    currentQuestionIndex = 0;
    userAnswers = [];
    
    // Set headers
    const testData = TESTS_DATABASE[activeTestId];
    testTitleLabel.textContent = testData.title;
    testCategoryLabel.textContent = testData.category;
    
    // Set view elements
    testProgressContainer.classList.remove("hidden");
    questionContainer.classList.remove("hidden");
    leadFormContainer.classList.add("hidden");
    resultsContainer.classList.add("hidden");
    
    renderQuestion();
}

function renderQuestion() {
    const testData = TESTS_DATABASE[activeTestId];
    const question = testData.questions[currentQuestionIndex];
    
    // Calculate progress
    const percent = ((currentQuestionIndex + 1) / testData.questions.length) * 100;
    testProgressBarFill.style.width = `${percent}%`;
    testProgressNums.textContent = `Вопрос ${currentQuestionIndex + 1} из ${testData.questions.length}`;
    
    // Build answers markup
    let answersHTML = "";
    question.answers.forEach((ans, idx) => {
        answersHTML += `
            <button class="answer-btn" onclick="handleAnswerSelect(${ans.points})">
                ${ans.text}
            </button>
        `;
    });
    
    questionContainer.innerHTML = `
        <h4 class="question-text">${question.text}</h4>
        <div class="answers-grid">
            ${answersHTML}
        </div>
    `;
}

function handleAnswerSelect(points) {
    userAnswers.push(points);
    currentQuestionIndex++;
    
    const testData = TESTS_DATABASE[activeTestId];
    if (currentQuestionIndex < testData.questions.length) {
        // Add elegant transition animation
        questionContainer.style.opacity = 0;
        questionContainer.style.transform = "translateY(10px)";
        setTimeout(() => {
            renderQuestion();
            questionContainer.style.opacity = 1;
            questionContainer.style.transform = "translateY(0)";
        }, 200);
    } else {
        // Test complete, go to Lead Form
        showLeadForm();
    }
}

function showLeadForm() {
    testProgressContainer.classList.add("hidden");
    questionContainer.classList.add("hidden");
    
    leadFormContainer.style.opacity = 0;
    leadFormContainer.classList.remove("hidden");
    setTimeout(() => {
        leadFormContainer.style.opacity = 1;
    }, 50);
}

function processLeadForm(e) {
    e.preventDefault();
    
    // Fetch values
    const nameVal = leadNameInput.value.trim();
    if (nameVal) {
        // Format virtual credit card holder name
        ccNameDisplay.textContent = nameVal.toUpperCase();
    }
    
    // Calculate final results
    const scoreSum = userAnswers.reduce((sum, val) => sum + val, 0);
    const testData = TESTS_DATABASE[activeTestId];
    
    // Find matching result bracket
    const matchedResult = testData.results.find(res => scoreSum >= res.min && scoreSum <= res.max) || testData.results[1];
    
    // Inject results text
    resultScoreTxt.textContent = `${Math.min(100, Math.round((scoreSum / 160) * 100))}%`;
    resultTitleTxt.textContent = matchedResult.title;
    resultDescTxt.textContent = matchedResult.desc;
    
    // Set gift PDF text
    btnGetPdf.textContent = `Забрать ${matchedResult.pdf.substring(0, 15)}... в Telegram`;
    
    // Render results view
    leadFormContainer.classList.add("hidden");
    
    resultsContainer.style.opacity = 0;
    resultsContainer.classList.remove("hidden");
    setTimeout(() => {
        resultsContainer.style.opacity = 1;
    }, 50);
    
    showToast("Анализ завершен! Подробный разбор готов.", "success");
}

function startSegmentTest(segmentKey) {
    // Scroll smoothly to test widget
    document.getElementById("test-section").scrollIntoView({ behavior: 'smooth' });
    
    // Set select value and trigger change
    let selectVal = "burnout";
    if (segmentKey === "kelin") selectVal = "kelin";
    if (segmentKey === "mom") selectVal = "balance";
    if (segmentKey === "burnout") selectVal = "burnout";
    if (segmentKey === "divorce") selectVal = "kelin"; // fallback
    
    testSelect.value = selectVal;
    initTest(selectVal);
    
    showToast(`Загружен опрос: "${TESTS_DATABASE[selectVal].title}"`, "info");
}

// --- Checkout Dialog Logic ---
function openCheckout() {
    // Reset wizard view
    checkoutSuccessView.classList.add("hidden");
    const modalContent = checkoutModal.querySelector(".checkout-modal-content");
    modalContent.classList.remove("hidden");
    
    // Reset button loader states
    const btnText = checkoutPayBtn.querySelector(".pay-btn-text");
    const btnSpinner = checkoutPayBtn.querySelector(".pay-btn-spinner");
    btnText.classList.remove("hidden");
    btnSpinner.classList.add("hidden");
    checkoutPayBtn.disabled = false;
    
    // Select default tab
    selectPaymentTab("kaspi");
    
    // Toggle active classes
    checkoutModal.classList.add("active");
    checkoutOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCheckout() {
    checkoutModal.classList.remove("active");
    checkoutOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

// --- Tab Kaspi Selection ---
function selectPaymentTab(method) {
    if (method === "kaspi") {
        tabKaspi.classList.add("active");
        tabCard.classList.remove("active");
        panelKaspi.classList.add("active");
        panelCard.classList.remove("active");
        checkoutPayBtn.querySelector(".pay-btn-text").textContent = "Я оплатила через Kaspi QR";
    } else {
        tabKaspi.classList.remove("active");
        tabCard.classList.add("active");
        panelKaspi.classList.remove("active");
        panelCard.classList.add("active");
        checkoutPayBtn.querySelector(".pay-btn-text").textContent = "Оплатить картой";
    }
}

function processPayment() {
    const btnText = checkoutPayBtn.querySelector(".pay-btn-text");
    const btnSpinner = checkoutPayBtn.querySelector(".pay-btn-spinner");
    
    // Enter loader state
    btnText.classList.add("hidden");
    btnSpinner.classList.remove("hidden");
    checkoutPayBtn.disabled = true;
    
    // Simulate payment transaction
    setTimeout(() => {
        // Transition to success screen
        const modalContent = checkoutModal.querySelector(".checkout-modal-content");
        modalContent.classList.add("hidden");
        checkoutSuccessView.classList.remove("hidden");
        
        showToast("Платеж успешно подтвержден!", "success");
        spawnSuccessHearts();
    }, 2000);
}

// --- Testimonials Carousel ---
function updateStoryCard() {
    const data = STORIES_DATABASE[currentStoryIndex];
    
    activeStoryCard.style.opacity = 0;
    activeStoryCard.style.transform = "translateX(10px)";
    
    setTimeout(() => {
        activeStoryCard.querySelector(".story-user-city").textContent = `• ${data.city}`;
        activeStoryCard.querySelector(".story-quote").textContent = data.quote;
        activeStoryCard.querySelector(".story-author").textContent = data.author;
        
        activeStoryCard.style.opacity = 1;
        activeStoryCard.style.transform = "translateX(0)";
    }, 200);
}

function nextStory() {
    currentStoryIndex = (currentStoryIndex + 1) % STORIES_DATABASE.length;
    updateStoryCard();
}

function prevStory() {
    currentStoryIndex = (currentStoryIndex - 1 + STORIES_DATABASE.length) % STORIES_DATABASE.length;
    updateStoryCard();
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

// --- Toast System ---
function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = "toast";
    
    const icon = type === "success" ? "check-circle" : "sparkles";
    
    toast.innerHTML = `
        <i data-lucide="${icon}" class="toast-icon"></i>
        <span class="toast-text">${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    lucide.createIcons();
    
    // Slide entry animation
    setTimeout(() => toast.classList.add("show"), 50);
    
    // Destroy toast
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 450);
    }, 3000);
}

// --- Ambient Rose Petals Flow ---
function spawnAmbientPetals() {
    const petalCount = 12;
    for (let i = 0; i < petalCount; i++) {
        createPetal();
    }
    
    // Spawn periodically
    setInterval(createPetal, 5000);
}

function createPetal() {
    const petal = document.createElement("div");
    petal.className = "petal";
    
    const size = Math.random() * 18 + 8;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    
    // Random position horizontal
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.bottom = "-30px";
    
    // Random rotation angle
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    petalContainer.appendChild(petal);
    
    const duration = Math.random() * 12000 + 10000;
    const sway = Math.random() * 80 - 40;
    const rotateAngle = Math.random() * 360 + 180;
    
    const floatAnim = petal.animate([
        { transform: "translateY(0) translateX(0) rotate(0deg)", opacity: 0.1 },
        { opacity: 0.7, offset: 0.2 },
        { transform: `translateY(-105vh) translateX(${sway}px) rotate(${rotateAngle}deg)`, opacity: 0 }
    ], {
        duration: duration,
        easing: "linear",
        fill: "forwards"
    });
    
    floatAnim.onfinish = () => petal.remove();
}

function spawnSuccessHearts() {
    const colors = ["#d98880", "#e8a7a1", "#d4af37", "#f5dcd9"];
    for (let i = 0; i < 45; i++) {
        const heart = document.createElement("div");
        heart.style.position = "absolute";
        heart.style.width = `${Math.random() * 10 + 6}px`;
        heart.style.height = `${Math.random() * 10 + 6}px`;
        heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        heart.style.borderRadius = "50% 50% 0 0";
        heart.style.transform = "rotate(-45deg)";
        
        // Custom heart drawing logic in CSS
        heart.style.left = "50%";
        heart.style.top = "45%";
        heart.style.zIndex = "350";
        heart.style.pointerEvents = "none";
        
        // Make pseudo elements to build heart shape
        const style = document.createElement('style');
        style.innerHTML = `
            .success-heart-particle::before, .success-heart-particle::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: inherit;
                border-radius: 50%;
            }
            .success-heart-particle::before { top: -50%; left: 0; }
            .success-heart-particle::after { left: 50%; top: 0; }
        `;
        document.head.appendChild(style);
        heart.className = "success-heart-particle";
        
        checkoutModal.appendChild(heart);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 110 + 70;
        const xDir = Math.cos(angle) * velocity;
        const yDir = Math.sin(angle) * velocity - 60;
        
        heart.animate([
            { transform: "translate(0, 0) rotate(-45deg) scale(1)", opacity: 1 },
            { transform: `translate(${xDir}px, ${yDir}px) rotate(${Math.random() * 360}deg) scale(0.4)`, opacity: 0 }
        ], {
            duration: Math.random() * 900 + 600,
            easing: "cubic-bezier(0.1, 0.8, 0.25, 1)",
            fill: "forwards"
        });
        
        setTimeout(() => heart.remove(), 1600);
    }
}

// --- Global Event Listeners ---
function initGlobalListeners() {
    // Language Toggle Click
    const langBtn = document.getElementById("lang-btn");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    // Test selector change
    testSelect.addEventListener("change", (e) => {
        initTest(e.target.value);
    });
    
    // Lead Form Submit
    leadCaptureForm.addEventListener("submit", processLeadForm);
    
    // PDF trigger
    btnGetPdf.addEventListener("click", (e) => {
        e.preventDefault();
        showToast("PDF-руководство отправлено в ваш Telegram!", "success");
    });
    
    // Carousel handlers
    btnStoryPrev.addEventListener("click", prevStory);
    btnStoryNext.addEventListener("click", nextStory);
    
    // Checkout trigger listeners
    headerJoinBtn.addEventListener("click", openCheckout);
    btnBuyClubOffer.addEventListener("click", openCheckout);
    btnOpenCheckout.addEventListener("click", openCheckout);
    
    checkoutClose.addEventListener("click", closeCheckout);
    checkoutOverlay.addEventListener("click", closeCheckout);
    checkoutCancelBtn.addEventListener("click", closeCheckout);
    successCloseBtn.addEventListener("click", closeCheckout);
    
    // Checkout payment selectors
    tabKaspi.addEventListener("click", () => selectPaymentTab("kaspi"));
    tabCard.addEventListener("click", () => selectPaymentTab("card"));
    
    // Pay execute
    checkoutPayBtn.addEventListener("click", processPayment);
}
