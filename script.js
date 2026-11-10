// Daftar Soal (Bisa Anda tambah atau sesuaikan sendiri)
const quizData = [
    {
        question: "Hasil dari 125 + 75 - 50 adalah...",
        options: ["150", "140", "160", "130"],
        answer: 0 // Indeks jawaban benar (0 = pilihan pertama, dst)
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

const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const optionsListEl = document.getElementById("options-list");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const scoreValEl = document.getElementById("score-val");

function loadQuestion() {
    const currentQuiz = quizData[currentQuestionIndex];
    
    questionNumberEl.innerText = `Soal ${currentQuestionIndex + 1} dari ${quizData.length}`;
    questionTextEl.innerText = currentQuiz.question;
    
    optionsListEl.innerHTML = "";
    
    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("option-btn");
        button.innerText = option;
        
        // Tandai jika opsi ini sudah dipilih sebelumnya
        if (userAnswers[currentQuestionIndex] === index) {
            button.classList.add("selected");
        }
        
        button.onclick = () => selectOption(index);
        optionsListEl.appendChild(button);
    });

    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.innerText = currentQuestionIndex === quizData.length - 1 ? "Selesai" : "Selanjutnya";
}

function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    
    // Perbarui visual tombol yang dipilih
    const buttons = optionsListEl.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        if (i === index) {
            buttons[i].classList.add("selected");
        } else {
            buttons[i].classList.remove("selected");
        }
    }
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function showResult() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    
    let score = 0;
    quizData.forEach((item, index) => {
        if (userAnswers[index] === item.answer) {
            score += (100 / quizData.length);
        }
    });
    
    scoreValEl.innerText = Math.round(score);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers.fill(null);
    resultContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    loadQuestion();
}

// Inisialisasi awal
loadQuestion();