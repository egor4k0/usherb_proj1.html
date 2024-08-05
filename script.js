const questions = [
    { question: "Скількі днів у невисокосному році?", answers: ["365", "366", "364", "360"], correct: 0 },
    { question: "Столиця Казахстана?", answers: ["Київ", "Mосква", "Алмата", "Антананаріву"], correct: 2 },
    { question: "Найдовша ріка на у світі?", answers: ["Ніл", "Янцзи", "Амазонка", "Міссісипі"], correct: 2 },
    { question: "Найбільша планета у сонячній системі?", answers: ["Юпітер", "Сатурн", "Уран", "Нептун"], correct: 0 },
    { question: "Хто написал \"Критику Чистого Розуму\"?", answers: ["Ніцше", "Сковорода", "Кант", "Шопенгауер"], correct: 2 },
    { question: "Яка тварина найшвидша на сущі ?", answers: ["Страус", "Я", "Гепард", "Карась"], correct: 2},
    { question: "Скількі океанів на планеті Земля?", answers: ["4", "5", "6", "7"], correct: 1 },
    { question: "Найвища гора у світі?", answers: [ "Киліманджаро", "Эльбрус", "Монблан", "Эверест"], correct: 3 },
    { question: "Перша планета від Сонця?", answers: ["Меркурій", "Венера", "Земля", "Марс"], correct: 0 },
    { question: "Хто автор \"Гаррі Поттера\"?", answers: [ "Толкін", "Льюіс", "Роулінг", "Мартін"], correct: 2 },
    { question: "Скільки буде 435 + 786?", answers: ["1491", "1221", "1234", "2451"], correct: 1 },
    { question: "Столиця Алжиру?", answers: ["Алжир", "Нігер", "Воронєж", "Токіо"], correct: 0 },
    { question: "Міра сили (фізична величина)?", answers: ["Паскаль", "Кілограм", "Ньютон", "Вольт"], correct: 2 },
    { question: "Які зірки є найгарячішими?", answers: ["Червоні", "Білі", "Жовті", "Сині"], correct: 3 },
    { question: "Хто з них був філософом?", answers: ["Олександр Македонський", "Перикл", "Діоген Синопський", "Лікург"], correct: 2 },
    { question: "Скільки буде 5^5 ?", answers: ["245", "498", "3475", "3125"], correct: 2 },
    { question: "Скільки материків на планеті Земля?", answers: ["7", "8", "3", "6"], correct: 3 },
    { question: "На якій горі жили давньогрецькі боги?", answers: [ "Говерла", "Олімп", "Маттерхорн", "Каковець"], correct: 1 },
    { question: "Остання планета від Сонця?", answers: ["Земля", "Юпітер", "Нептун", "Уран"], correct: 2 },
    { question: "Хто автор \"Володаря Перстнів\"?", answers: [ "Ніцше", "Сервантес", "Камю", "Толкін"], correct: 3 }
];


let currentQuestionIndex;
let score;
function shuffleQuestions() {
    let currentIndex = questions.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [questions[randomIndex], questions[currentIndex]] = [questions[currentIndex], questions[randomIndex]];
    }
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult("Вы виграли" + " " + score + " " +"балів!" );
        return;
    }
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    const answerElements = document.getElementsByClassName('answer');
    for (let i = 0; i < answerElements.length; i++)
        answerElements[i].textContent = currentQuestion.answers[i];
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score += 10;
        if (score > 200) {
            showResult(`Вы виграли  ${score} балів`);
            return;
        }
    }
    currentQuestionIndex++;
    document.getElementById('score').textContent = `Бали: ${score}`;
    loadQuestion();
}

function showResult(message) {
    clearTimeout(timeout)
    document.getElementById('result-message').textContent = message;
    document.querySelector('.result').style.display = 'flex';
    document.querySelector('.question').style.display = 'none';
    document.querySelector('.answers').style.display = 'none';
}

function restartGame() {
    shuffleQuestions();
    score = 0;
    seconds = 59;
    clearTimeout(timeout);
    showTime();
    currentQuestionIndex = 0;
    document.getElementById('score').textContent = `Бали: 0`;
    document.querySelector('.result').style.display = 'none';
    document.querySelector('.question').style.display = 'block';
    document.querySelector('.answers').style.display = 'flex';
    loadQuestion();
}

function showTime(){
    if (timer == null) showTime();
    let str;
    if (seconds<10) str = '0'+seconds;
    else str = seconds;
    timer.innerHTML = "00:" + str;
    seconds--;
    if(seconds < 0 && timeout != undefined) {
        clearTimeout(timeout)
        showResult(`Вы виграли  ${score} балів`);
    }
    else timeout = setTimeout(showTime,1000);
}

let seconds = 10;
let timeout, timer;

document.addEventListener('DOMContentLoaded', function() {
    timer = document.getElementById('timer');
    showTime();
 }, false);

 function nagol_menu () {
    location.href ="index3.html";
 }