const quizData = [
    {
        question: "Hasil dari 125 + 75 - 50 adalah...",
        options: ["150", "140", "160", "130"],
        answer: 0
    },
    {
        question: "Berapa jumlah sudut dalam sebuah segitiga?",
        options: ["90 derajat", "180 derajat", "270 derajat", "360 derajat"],
        answer: 1
    },
    {
        question: "Jika sebuah persegi memiliki sisi 8 cm, maka luasnya adalah...",
        options: ["32 cm²", "16 cm²", "64 cm²", "128 cm²"],
        answer: 2
    },
    {
        question: "Faktor persekutuan terbesar (FPB) dari 24 dan 36 adalah...",
        options: ["6", "8", "12", "18"],
        answer: 2
    },
    {
        question: "Bentuk pecahan biasa dari 0,75 adalah...",
        options: ["1/2", "3/4", "1/4", "2/3"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill(null);
let timeLeft = 600; // 10 menit dalam detik
let timerInterval;

const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const optionsListEl = document.getElementById("options-list");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const scoreValEl = document.getElementById("score-val");
const paletteGridEl = document.getElementById("palette-grid");
const timeLeftEl = document.getElementById("time-left");
const correctCountEl = document.getElementById("correct-count");
const wrongCountEl = document.getElementById("wrong-count");

// Inisialisasi Ujian
function initQuiz() {
    createPalette();
    startTimer();
    loadQuestion();
}

// Timer Mundur
function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResult();
            return;
        }
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timeLeftEl.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// Buat Kotak Nomor Soal di Sidebar
function createPalette() {
    paletteGridEl.innerHTML = "";
    quizData.forEach((_, index) => {
        const btn = document.createElement("button");
        btn.classList.add("palette-btn");
        btn.innerText = index + 1;
        btn.onclick = () => goToQuestion(index);
        paletteGridEl.appendChild(btn);
    });
}

// Perbarui Status Palet
function updatePalette() {
    const buttons = paletteGridEl.getElementsByClassName("palette-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
        if (i === currentQuestionIndex) {
            buttons[i].classList.add("active");
        }
        if (userAnswers[i] !== null) {
            buttons[i].classList.add("answered");
        } else {
            buttons[i].classList.remove("answered");
        }
    }
}

function loadQuestion() {
    const currentQuiz = quizData[currentQuestionIndex];
    
    questionNumberEl.innerText = `Soal ${currentQuestionIndex + 1} dari ${quizData.length}`;
    questionTextEl.innerText = currentQuiz.question;
    
    optionsListEl.innerHTML = "";
    
    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("option-btn");
        button.innerText = option;
        
        if (userAnswers[currentQuestionIndex] === index) {
            button.classList.add("selected");
        }
        
        button.onclick = () => selectOption(index);
        optionsListEl.appendChild(button);
    });

    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.innerText = currentQuestionIndex === quizData.length - 1 ? "Selesai" : "Selanjutnya";
    
    updatePalette();
}

function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    
    const buttons = optionsListEl.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        if (i === index) {
            buttons[i].classList.add("selected");
        } else {
            buttons[i].classList.remove("selected");
        }
    }
    updatePalette();
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        if (confirm("Apakah Anda yakin ingin mengakhiri ujian dan melihat hasil?")) {
            showResult();
        }
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function goToQuestion(index) {
    currentQuestionIndex = index;
    loadQuestion();
}

function showResult() {
    clearInterval(timerInterval);
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    
    let correct = 0;
    quizData.forEach((item, index) => {
        if (userAnswers[index] === item.answer) {
            correct++;
        }
    });
    
    let score = Math.round((correct / quizData.length) * 100);
    scoreValEl.innerText = score;
    correctCountEl.innerText = correct;
    wrongCountEl.innerText = quizData.length - correct;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers.fill(null);
    timeLeft = 600;
    resultContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    initQuiz();
}

// Mulai aplikasi saat halaman dimuat
initQuiz();
