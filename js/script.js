'use strict'
let one=document.getElementById('one')
let two=document.getElementById('two')
let three=document.getElementById('three')
let four=document.getElementById('four')
let five=document.getElementById('five')
let feedback=0


two.addEventListener('click',()=>{
    one.style.color="orange"
    two.style.color="orange"
    feedback=2
    document.getElementById('feedback-1').value=feedback
})