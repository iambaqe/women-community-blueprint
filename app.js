// ====================================================
// UMAY WOMEN COMMUNITY INTERACTIVE LOGIC (KK VERSION)
// ====================================================

// --- Tests Database ---
const TESTS_DATABASE = {
    kelin: {
        title: "Қандай келінсіз?",
        category: "Дәстүр мен жеке шекаралар",
        questions: [
            {
                text: "Күйеуіңіздің туыстары 30 минуттан кейін қонаққа келетіндерін хабарлады. Сіздің реакцияңыз?",
                answers: [
                    { text: "Жан-таласып үй жинап, бесбармақ пен бауырсақ пісіруге кірісемін.", points: 10 },
                    { text: "Сабырлы түрде дайын тағамға тапсырыс беріп, үйді жеңіл-желпі жинаймын.", points: 30 },
                    { text: "Күйеуімнен кездесуді басқа уақытқа сыпайы түрде ауыстыруын өтінемін.", points: 40 },
                    { text: "Жатын бөлмеге кіріп, ауырып қалғанымды айтамын.", points: 20 }
                ]
            },
            {
                text: "Үйіңізде демалысқа қайда баратыныңызды немесе ірі жинақтарды қалай жұмсайтыныңызды кім шешеді?",
                answers: [
                    { text: "Күйеуім немесе оның ата-анасы. Менің пікірім ескерілмейді.", points: 10 },
                    { text: "Жолдасыммен бірге шешеміз, бірақ соңғы шешімді ол қабылдайды.", points: 20 },
                    { text: "Барлық маңызды шешімдерді тең дәрежеде бірлесіп талқылаймыз.", points: 40 },
                    { text: "Әркім өз ақшасын өзі жұмсайды, демалысты мен жоспарлаймын.", points: 30 }
                ]
            },
            {
                text: "Сізге туыстарыңыздың бала тәрбиесіне қатысты айтқан сындары ұнамайды. Не істейсіз?",
                answers: [
                    { text: "Үнсіз тыңдап, іштей ренжіп қаламын, бірақ ештеңе айтпаймын.", points: 10 },
                    { text: "Жолдасымнан оның анасымен немесе туыстарымен сөйлесуін сұраймын.", points: 30 },
                    { text: "Сабырлы әрі нық түрде: «Кеңесіңізге рақмет, бірақ біз өз баламызды өзіміз тәрбиелейміз» деп жауап беремін.", points: 40 },
                    { text: "Сөзге келіп, өз пікірімді дәлелдеуге тырысамын, бұл ренішке әкеледі.", points: 20 }
                ]
            },
            {
                text: "Қай тұжырым отбасындағы өзіңізді сезінуіңізді жақсы сипаттайды?",
                answers: [
                    { text: "Өзімді бәріне жағуға міндетті қызметші сияқты сезінемін.", points: 10 },
                    { text: "Мен жақсы әйелмін, бірақ жиі өз қалауларымды құрбан етемін.", points: 25 },
                    { text: "Мені жақсы көреді, бағалайды, менің жеке кеңістігім мен сүйікті ісім бар.", points: 40 },
                    { text: "Өзімді үнемі жүйеге қарсы шығатын бүлікші ретінде сезінемін.", points: 30 }
                ]
            }
        ],
        results: [
            {
                min: 0, max: 60,
                title: "Сіз — «Жанқияр супер келінсіз»",
                desc: "Өзіңізді ұмытып, айналаңыздағылардың ризашылығы үшін өмір сүресіз. Эмоциялық сарқылу және өзіңізді жоғалту қаупі 90% құрайды. Сізге шұғыл түрде жеке шекараларды құру қажет.",
                pdf: "Жоспар: «Ұят пен кінә сезімінсіз енеге қалай ЖОҚ деуге болады»"
            },
            {
                min: 61, max: 110,
                title: "Сіз — «Таңдау алдында тұрған дәстүрлі келінсіз»",
                desc: "Сіз теңгерімді сақтауға тырысасыз, бірақ дәстүрлер мен жеке қалаулар арасындағы ішкі қақтығыс көп энергияны талап етеді. Ниеттес әйелдердің қолдауы қажет.",
                pdf: "Нұсқаулық: «Дәстүрлі қазақ отбасындағы жеке шекаралар»"
            },
            {
                min: 111, max: 160,
                title: "Сіз — «Саналы келінсіз»",
                desc: "Құттықтаймыз! Өзіңізді де, жолдасыңыздың әулетін де, дәстүрлерін де бағалай білесіз. Жеке шекараларыңызды қалыптастырдыңыз, бірақ дамитын тұстар әрқашан бар. Біз оларды UMAY клубында бірге дамытамыз.",
                pdf: "Бақылау парағы: «Некедегі психологиялық денсаулық құпиялары»"
            }
        ]
    },
    burnout: {
        title: "Күйзеліс пен ресурс деңгейі",
        category: "Психологиялық денсаулық",
        questions: [
            {
                text: "Жеткілікті ұйықтасаңыз да, қаншалықты жиі шаршап оянасыз?",
                answers: [
                    { text: "Дерлік күн сайын. Күнім дәрменсіздік сезімімен басталады.", points: 10 },
                    { text: "Жиі, аптасына 2-3 рет.", points: 20 },
                    { text: "Сирек, өте ауыр күндерден кейін ғана.", points: 35 },
                    { text: "Ешқашан. Күш-қуатқа толы болып оянамын.", points: 40 }
                ]
            },
            {
                text: "Сізді тепе-теңдіктен шығару (ашуландыру, ренжіту, жылату) қаншалықты оңай?",
                answers: [
                    { text: "Өте оңай. Кез келген ұсақ-түйектен немесе баланың қыңырлығынан ашуланамын.", points: 10 },
                    { text: "Кейде ашуланып, кейін өзімді кінәлі сезінемін.", points: 25 },
                    { text: "Эмоцияларымды ұстай білемін, бірақ ішімнен қайнап жатамын.", points: 30 },
                    { text: "Қиындықтарға сабырлы жауап беріп, тез арада тыныштыққа ораламын.", points: 40 }
                ]
            },
            {
                text: "Күніне кемінде 1 сағат уақытты ТЕК өзіңізге (баласыз, үй шаруасынсыз, жұмыссыз) бөле аласыз ба?",
                answers: [
                    { text: "Жоқ, менде бір минут та жеке уақыт жоқ.", points: 10 },
                    { text: "Сирек, мүмкін аптасына бір рет демалыста.", points: 20 },
                    { text: "Иә, бірақ бұл ретте жиі кінә сезімін сезінемін.", points: 30 },
                    { text: "Иә, бұл менің күнделікті демалыс пен сүйікті ісіме арналған уақытым.", points: 40 }
                ]
            },
            {
                text: "Әдеттегі күннің соңында сізде қандай сезім басым болады?",
                answers: [
                    { text: "Толық қажу и мені ешкім мазаламаса екен деген тілек.", points: 10 },
                    { text: "Шаршау, бірақ жеңіл қанағаттану сезімі бар.", points: 25 },
                    { text: "Жағымды шаршау, демалуды асыға күту.", points: 35 },
                    { text: "Өмірге ризашылық және ертеңгі күнге шабыт алу.", points: 40 }
                ]
            }
        ],
        results: [
            {
                min: 0, max: 60,
                title: "Сізде қатты күйзеліс сатысы (Қызыл аймақ)",
                desc: "Ресурсыңыз мүлдем таусылған. Автопилоттағы өмір депрессия мен психосоматикаға әкелуі мүмкін. Сізге психологиялық қолдау мен кәсіби көмек қажет.",
                pdf: "Жинақ: «7 қадамда шаршаудан шығудың экспресс-әдістері»"
            },
            {
                min: 61, max: 110,
                title: "Ресурс деңгейі орташа (Сары аймақ)",
                desc: "Сіз шегінде тұрсыз. Шаршау жинақталып келеді, егер қазір өзіңізге уақыт бөлмесеңіз, күйзеліске ұшырайсыз. Өз қалауларыңызға назар аударатын уақыт келді.",
                pdf: "Ана мен әйелдің күнделікті өзіне күтім жасау рәсімдері"
            },
            {
                min: 111, max: 160,
                title: "Сізде жоғары ресурс деңгейі (Жасыл аймақ)",
                desc: "Сіз теңгерімді сақтауға және ішкі күйіңізге күтім жасай аласыз. UMAY клубы осы деңгейді сақтауға және пікірлестер ортасында дамуға көмектеседі.",
                pdf: "Нұсқаулық: «Жоғары өмірлік тонус пен ресурсты қалай сақтауға болады»"
            }
        ]
    },
    balance: {
        title: "Мансап пен отбасы теңгерімі",
        category: "Өзін-өзі жүзеге асыру және уақытты басқару",
        questions: [
            {
                text: "Жұмыста бөгелу керек болғанда немесе іскерлік кездесуге бару қажет болғанда не болады?",
                answers: [
                    { text: "Үйде келіспеушілік басталады, жолдасым немесе туыстарым наразылық білдіреді.", points: 10 },
                    { text: "Барамын, бірақ кеш бойы уайымдап, балалардың алдында кінә сезінемін.", points: 20 },
                    { text: "Жолдасыммен келісеміз немесе бала күтушіні шақырамыз, бәрі тыныш өтеді.", points: 40 },
                    { text: "Үйдегі тыныштық үшін кез келген мансаптық мүмкіндіктерден бас тартамын.", points: 15 }
                ]
            },
            {
                text: "Жұмыс күнінен кейін жолдасыңызбен жылы қарым-қатынас жасауға күш-қуатыңыз жете ме?",
                answers: [
                    { text: "Жоқ, өте қатты шаршап келемін, тек ұйықтағым келеді.", points: 10 },
                    { text: "Тек балалар мен төлемдер туралы тұрмыстық әңгімелерге ғана күшім жетеді.", points: 20 },
                    { text: "Кейде екеуіміз ғана оңаша қалатын уақыт табамыз.", points: 35 },
                    { text: "Иә, біз жұмыстан отбасылық жылылыққа ауыса аламыз.", points: 40 }
                ]
            },
            {
                text: "Қазіргі уақытта кәсіби жетістіктеріңізді қалай бағалайсыз?",
                answers: [
                    { text: "Мен тұрмысқа толықтай сіңіп кеттім және біліктілігімді жоғалтып алдым.", points: 10 },
                    { text: "Жұмыс істеймін, бірақ әлеуетімді толық аша алмай жүргенімді сеземін.", points: 25 },
                    { text: "Жұмысымда табыстымын, бірақ бұл үшін жеке өмірім зардап шегуде.", points: 30 },
                    { text: "Мен мансапта үйлесімді дамып келемін және отбасымда бақыттымын.", points: 40 }
                ]
            },
            {
                text: "Егер сізге көбірек уақытты талап ететін қызметті көтеру ұсынылса, қандай шешім қабылдайсыз?",
                answers: [
                    { text: "Бірден бас тартамын, отбасы маңыздырақ.", points: 15 },
                    { text: "Келісемін, бірақ үнемі күйзеліс пен кінә сезімінде өмір сүремін.", points: 20 },
                    { text: "Алдымен отбасыммен талқылаймын, тұрмысты реттеймін және содан кейін ғана келісемін.", points: 40 },
                    { text: "Әрине келісемін, мансап бірінші орында.", points: 30 }
                ]
            }
        ],
        results: [
            {
                min: 0, max: 60,
                title: "Тұрмыс/отбасы жағына қатты ауытқушылық",
                desc: "Сіз мансаптық мақсаттарыңыз бен өзіңізді жүзеге асыруды мүлдем ұмыттыңыз. Бұл болашақта қанағаттанбаушылық пен дағдарысқа әкелуі мүмкін. Өз дамуыңызға уақыт бөлудің сәті келді.",
                pdf: "Ана декретте сүйікті ісімен қалай ақша таба бастайды"
            },
            {
                min: 61, max: 110,
                title: "Сіз күйзеліс пен теңгерімсіздік арасындасыз",
                desc: "Үнемі асығыс өмір сүріп, бәріне бірден үлгеруге тырысасыз. Соның салдарынан екі сала да зардап шегеді. Сізге мұқият жоспарлау тәжірибесі қажет.",
                pdf: "Қазіргі қазақстандық әйелге арналған уақыт теңгерімі"
            },
            {
                min: 111, max: 160,
                title: "Өмір салаларының үйлесімді теңгерімі",
                desc: "Мансап пен жеке өмірді біріктіруді тамаша меңгергенсіз. Сіз көптеген адамдар үшін үлгісіз! UMAY клубында тәжірибе бөлісіп, шабыт алыңыз.",
                pdf: "Жақындарға зиян келтірмей мансапты ауқымдандыру"
            }
        ]
    }
};

// --- Stories Database ---
const STORIES_DATABASE = [
    {
        city: "Алматы қ.",
        quote: "«Тұрмыс құрғаннан кейін мен басқа қаладағы күйеуімнің ата-анасының үйіне көшіп келдім. Бейімделу өте қиын болды, өзімді жат сезініп, дәрменсіздіктен үнемі жылайтынмын. UMAY клубынан жеке шекараларды қалай дұрыс құру керектігін түсіндірген психологтарды таптым. Бір айдан кейін енеммен қарым-қатынасымыз жақсарды, ең бастысы — ішкі тыныштығымды таптым.»",
        author: "— Айдана, 24 жаста, келін"
    },
    {
        city: "Астана қ.",
        quote: "«Мен ірі компанияда бөлімді сәтті басқардым, бірақ үйде балаларға қатты шаршағандықтан айқайлайтынмын. Үздік болу синдромы мені сарқып бітірді. UMAY-дағы шаршау марафоны мен басқа аналардың қолдауының арқасында тұрмысты басқаларға тапсыруды үйрендім және өзімді кемелсіздігім үшін кінәлауды тоқтаттым. Үйде ақыры тыныштық орнады.»",
        author: "— Сабина, 34 жаста, екі баланың анасы, карьерист"
    },
    {
        city: "Шымкент қ.",
        quote: "«Ажырасу маған ауыр тиді — өмір аяқталғандай болды, ал қоғам мені айыптады. UMAY-да мен клубтың отбасылық заңгерінен тегін кеңестер алдым және психологиялық қолдау тобынан өттім. Қыздар мені сөзбе-сөз өмірге қайтарды. Қазір мен өз бизнесімді аштым және өзімді өте күшті әрі бақытты сезінемін.»",
        author: "— Мәдина, 29 жаста, кәсіпкер"
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
    testProgressNums.textContent = `Сұрақ ${currentQuestionIndex + 1}, барлығы ${testData.questions.length}`;
    
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
    btnGetPdf.textContent = `Telegram арқылы алу: ${matchedResult.pdf.substring(0, 15)}...`;
    
    // Render results view
    leadFormContainer.classList.add("hidden");
    
    resultsContainer.style.opacity = 0;
    resultsContainer.classList.remove("hidden");
    setTimeout(() => {
        resultsContainer.style.opacity = 1;
    }, 50);
    
    showToast("Анализ аяқталды! Толық талдау дайын.", "success");
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
    
    showToast(`Сауалнама жүктелді: "${TESTS_DATABASE[selectVal].title}"`, "info");
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

function selectPaymentTab(method) {
    if (method === "kaspi") {
        tabKaspi.classList.add("active");
        tabCard.classList.remove("active");
        panelKaspi.classList.add("active");
        panelCard.classList.remove("active");
        checkoutPayBtn.querySelector(".pay-btn-text").textContent = "Мен Kaspi QR арқылы төледім";
    } else {
        tabKaspi.classList.remove("active");
        tabCard.classList.add("active");
        panelKaspi.classList.remove("active");
        panelCard.classList.add("active");
        checkoutPayBtn.querySelector(".pay-btn-text").textContent = "Картамен төлеу";
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
        
        showToast("Төлем сәтті расталды!", "success");
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
            window.location.href = "index_ru.html";
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
        showToast("PDF нұсқаулық Telegram-ға жіберілді!", "success");
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
