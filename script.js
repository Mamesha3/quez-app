const quezContainer = document.querySelector('#quez')
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

function getQuez() {
    current++
    let q = (current + 1) % quezs.length
    let allQuez = quezs[q]
    const lis = document.querySelectorAll('li')

    quezContainer.textContent = allQuez.quez

    allQuez.options.forEach((q, index)=> {
       let done = quezs.length
       let li = lis[index]
       li.textContent = q.text
       li.style.backgroundColor = ''

       li.onclick = () => {
         if (q.answer === true) {
            li.style.backgroundColor = 'green'
            li.style.color = 'white' 
         }else {   
            li.style.backgroundColor = 'red'
            li.style.color = black        
         }
      }
    })
   
}
document.querySelector('#next-btn').addEventListener('click', ()=> {
    getQuez()
})

// for subscription field
const submitBtn = document.querySelector('#submit-btn')
const errorText = document.querySelector('#error')
const input = document.querySelector('#inp-field')
const newsContainer = document.querySelector('.subscrib-container')
const allQuezContainer = document.querySelector('.container')

function validation() {
   if (input.value.match(/[.@]/) && input.value.match(/[a-aA-Z]/)) {
      newsContainer.style.display = 'none'
      allQuezContainer.style.display = 'block'
      allQuezContainer.classList.add('animate')
   }else {
      newsContainer.style.display = 'block'
      allQuezContainer.style.display = 'none'
      errorText.style.display = 'block'
      errorText.textContent = 'ERROR'
      setTimeout(() => {
         errorText.style.display = 'none'
      }, 2000);
   }
}
submitBtn.onclick = () => {
   validation()
}

getQuez()