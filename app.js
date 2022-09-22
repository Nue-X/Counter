const value = document.getElementById("value")
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')
const btns = document.querySelectorAll('.btn')

let count = 0

// decrease.addEventListener('click', ()=>{
//     count--
//     value.innerHTML= count
//     if (count < 0){
//         value.style.color = "red"
//     }
// })
// reset.addEventListener('click', ()=>{
//     count = 0
//     value.innerHTML= count
//     value.style.color = "black"
// })
// increase.addEventListener('click', ()=>{
//     count++
//     value.innerHTML= count
//     if (count > 0){
//         value.style.color = "green"
//     }
// })

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const type = e.currentTarget.classList;
        if (type.contains("decrease")){
            count--
        } else if(type.contains("increase")){
            count++
        } else{
            count = 0
        }
        if(count > 0){
            value.style.color = "green"
        } else if (count < 0){
            value.style.color = "red"
        } else {
            value.style.color = "black"
        }
        value.innerHTML = count
    })
})

