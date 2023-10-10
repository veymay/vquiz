const quizData = [
  {
    question: '8+1=?',
    correct: '9',
    options: ['4', '9', '8']
  },
  {
    question: '2+2=?',
    correct: '4',
    options: ['4', '5', '8']
  },
  {
    question: '2+5=?',
    correct: '7',
    options: ['7', '5', '8']
  },
  {
    question: '2+3=?',
    correct: '5',
    options: ['4', '5', '8']
  },
  {
    question: '2+6=?',
    correct: '8',
    options: ['4', '5', '8']
  },
  {
    question: '2+1=?',
    correct: '3',
    options: ['4', '3', '8']
  },
]

let quizContent = document.querySelector('.quiz_content')
let resultPage = document.querySelector('.result')
let quizCount = document.querySelector('.quiz_count')
let quizTitle = document.querySelector('.quiz_title')
let responsList = document.querySelector('.response')
let quizContentData = document.querySelector('.quiz_content_data')
let responsListItems = document.querySelectorAll('.response>.item')
let nextBtn = document.querySelector('.next')
let result = 0
let id = 0

function loadQuiz() {
  if (id == quizData.length) {
    quizContentData.classList.add('active')
    resultPage.innerHTML = Math.round(result * (100 / quizData.length)) + '%'
    resultPage.classList.add('active')
    quizCount.innerHTML = '<i class="fi fi-br-refresh"></i> qayta boshlash'
    quizCount.style.cursor = 'pointer'
  } else {
    quizTitle.innerHTML = quizData[id].question
    responsList.innerHTML = ''
    quizData[id].options.forEach((answer) => {
      responsList.innerHTML += `<button onclick="checkAns(event)" class="item">${answer}</button>`
    })
    quizCount.innerHTML = `${id + 1}-savol | Jami: ${quizData.length}ta`
    responsListItems = document.querySelectorAll('.response>.item')
  }
}
loadQuiz()
function checkAns() {
  if (event.target.innerHTML == quizData[id].correct) {
    event.target.classList.add('success')
    result++
  } else {
    event.target.classList.add('error')
    responsListItems.forEach(item => {
      if (item.innerHTML == quizData[id].correct) {
        item.classList.add('success')
      }
    })
  }
  responsListItems.forEach((element) => {
    element.setAttribute('disabled', '')
  });
}
nextBtn.addEventListener('click', () => {
  id++
  loadQuiz()
})
quizCount.addEventListener('click', () => {
  id = 0
  result = 0
  loadQuiz()
  quizContentData.classList.remove('active')
  resultPage.classList.remove('active')
})