const quezContainer = document.querySelector('#quez')
const newsContainer = document.querySelector('.subscrib-container')
const allQuezContainer = document.querySelector('.container')
const playAgain = document.querySelector('#play-again')
const finalAnswer = document.querySelector('#answer')
const a = document.querySelector('#a')
const b = document.querySelector('#b')
const c = document.querySelector('#c')
const d = document.querySelector('#d')

const quezs = [
   {
      quez: 'who is ethiopan presdant now?',
      options: [
        {text: 'abby ahmed', answer: true},
        {text: 'mohammed jemal', answer: false},
        {text: 'seid yimam', answer: false},
        {text: 'fato hussen', answer: false}
      ]
   },
   {
      quez: 'what is the capital city of ethiopia?',
      options: [
        {text: 'harbu', answer: false},
        {text: 'addis ababa', answer: true},
        {text: 'tigray', answer: false},
        {text: 'adame', answer: false}
      ]
   },
   {
      quez: 'which one is wild animal below?',
      options: [
        {text: 'abby', answer: false},
        {text: 'trump', answer: false},
        {text: 'mekin', answer: false},
        {text: 'rabbit', answer: true}
      ]
   },
   {
      quez: 'what is OTP stands for?',
      options: [
        {text: 'one time lunch', answer: false},
        {text: "isreal's men shit", answer: false},
        {text: 'one time password', answer: true},
        {text: 'one time life', answer: false}
      ]
   }
  
]
let current = 0
let correctAnswer = 0
let wrongAnswer = 0

function getQuez() {
   current++
    const lis = document.querySelectorAll('li')
    let q = (current + 1) % quezs.length
    let allQuez = quezs[q]
   quezContainer.textContent = allQuez.quez
   //  quezContainer.textContent = quezs[0].quez

    allQuez.options.forEach((q, index)=> {
       let li = lis[index]
       li.textContent = q.text
       li.style.backgroundColor = ''

       let liClick = li.onclick = () => {
         if (q.answer === true) {
            li.style.backgroundColor = 'green'
            li.style.color = 'white' 
            correctAnswer++
         }else {   
            li.style.backgroundColor = 'red'
            wrongAnswer++   
         }
         
      }

      if (current > quezs.length) {
        finalAnswer.textContent = `You get: ${correctAnswer}, You lose: ${wrongAnswer}, out of ${quezs.length} questions`
        newsContainer.style.display = 'block'
        allQuezContainer.style.display = 'none'
     }else {
         newsContainer.style.display = 'none'
         allQuezContainer.style.display = 'block'
      }
    })
   
}
document.querySelector('#next-btn').addEventListener('click', ()=> {  
   getQuez()
})
playAgain.addEventListener('click', () => {
   location.reload()
})


getQuez()