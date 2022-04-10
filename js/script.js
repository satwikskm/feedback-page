'use strict'
let question_one_one=document.getElementById('question-one-one')
let question_one_two=document.getElementById('question-one-two')
let question_one_three=document.getElementById('question-one-three')
let question_one_four=document.getElementById('question-one-four')
let question_one_five=document.getElementById('question-one-five')

let question_two_one=document.getElementById('question-two-one')
let question_two_two=document.getElementById('question-two-two')
let question_two_three=document.getElementById('question-two-three')
let question_two_four=document.getElementById('question-two-four')
let question_two_five=document.getElementById('question-two-five')

let question_three_one=document.getElementById('question-three-one')
let question_three_two=document.getElementById('question-three-two')
let question_three_three=document.getElementById('question-three-three')
let question_three_four=document.getElementById('question-three-four')
let question_three_five=document.getElementById('question-three-five')

let question_four_one=document.getElementById('question-four-one')
let question_four_two=document.getElementById('question-four-two')
let question_four_three=document.getElementById('question-four-three')
let question_four_four=document.getElementById('question-four-four')
let question_four_five=document.getElementById('question-four-five')

let question_five_one=document.getElementById('question-five-one')
let question_five_two=document.getElementById('question-five-two')
let question_five_three=document.getElementById('question-five-three')
let question_five_four=document.getElementById('question-five-four')
let question_five_five=document.getElementById('question-five-five')




question_one_one.addEventListener('click',()=>{
    question_one_one.style.color="orange"
    question_one_one.style.color="rgb(255, 217, 0)"
    question_one_two.style.color="rgb(255, 217, 0)"
    question_one_three.style.color="rgb(255, 217, 0)"
    question_one_four.style.color="rgb(255, 217, 0)"
    question_one_five.style.color="rgb(255, 217, 0)"
    document.getElementById('feedback-1').value=1
   
})

question_one_two.addEventListener('click',()=>{
    question_one_one.style.color="orange"
    question_one_two.style.color="orange"
    question_one_three.style.color="rgb(255, 217, 0)"
    question_one_four.style.color="rgb(255, 217, 0)"
    question_one_five.style.color="rgb(255, 217, 0)"
    document.getElementById('feedback-1').value=2
})
question_one_three.addEventListener('click',()=>{
    question_one_one.style.color="orange"
    question_one_two.style.color="orange"
    question_one_three.style.color="orange"
    question_one_four.style.color="rgb(255, 217, 0)"
    question_one_five.style.color="rgb(255, 217, 0)"
    document.getElementById('feedback-1').value=3
})
question_one_four.addEventListener('click',()=>{
    question_one_one.style.color="orange"
    question_one_two.style.color="orange"
    question_one_three.style.color="orange"
    question_one_four.style.color="orange"
    question_one_five.style.color="rgb(255, 217, 0)"
    document.getElementById('feedback-1').value=4
})
question_one_five.addEventListener('click',()=>{
    question_one_one.style.color="orange"
    question_one_two.style.color="orange"
    question_one_three.style.color="orange"
    question_one_four.style.color="orange"
    question_one_five.style.color="orange"
    document.getElementById('feedback-1').value=5
})


question_two_one.addEventListener('click',()=>{
    question_two_one.style.color="orange"
    document.getElementById('feedback-2').value=1
})

question_two_two.addEventListener('click',()=>{
    question_two_one.style.color="orange"
    question_one_two.style.color="orange"
    document.getElementById('feedback-2').value=2
})
question_two_three.addEventListener('click',()=>{
    question_two_one.style.color="orange"
    question_two_two.style.color="orange"
    question_two_three.style.color="orange"
    document.getElementById('feedback-2').value=3
})
question_two_four.addEventListener('click',()=>{
    question_two_one.style.color="orange"
    question_two_two.style.color="orange"
    question_two_three.style.color="orange"
    question_two_four.style.color="orange"
    document.getElementById('feedback-2').value=4
})
question_two_five.addEventListener('click',()=>{
    question_two_one.style.color="orange"
    question_two_two.style.color="orange"
    question_two_three.style.color="orange"
    question_two_four.style.color="orange"
    question_two_five.style.color="orange"
    document.getElementById('feedback-2').value=5
})


question_three_one.addEventListener('click',()=>{
    question_three_one.style.color="orange"
    document.getElementById('feedback-3').value=1
})

question_three_two.addEventListener('click',()=>{
    question_three_one.style.color="orange"
    question_three_two.style.color="orange"
    document.getElementById('feedback-3').value=2
})
question_three_three.addEventListener('click',()=>{
    question_three_one.style.color="orange"
    question_three_two.style.color="orange"
    question_three_three.style.color="orange"
    document.getElementById('feedback-3').value=3
})
question_three_four.addEventListener('click',()=>{
    question_three_one.style.color="orange"
    question_three_two.style.color="orange"
    question_three_three.style.color="orange"
    question_three_four.style.color="orange"
    document.getElementById('feedback-3').value=4
})
question_three_five.addEventListener('click',()=>{
    question_three_one.style.color="orange"
    question_three_two.style.color="orange"
    question_three_three.style.color="orange"
    question_three_four.style.color="orange"
    question_three_five.style.color="orange"
    document.getElementById('feedback-3').value=5
})



