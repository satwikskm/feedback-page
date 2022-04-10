'use strict'
let one=document.getElementById('one')
let two=document.getElementById('two')
let three=document.getElementById('three')
let four=document.getElementById('four')
let five=document.getElementById('five')
let feedback=0


one.addEventListener('click',()=>{
    one.style.color="orange"
    feedback=1
    document.getElementById('feedback-1').textContent=feedback
})