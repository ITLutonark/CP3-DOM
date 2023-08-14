let divSliderWidth = document.querySelector('#slider').offsetWidth
let divPointer = document.querySelector('#pointer')
let pPercent = document.getElementById('percent')

let isMove = false

function movePointer (e){
    let xPos = e.pageX
    if (xPos > 55 & xPos < divSliderWidth + 50){
        divPointer.style.left = xPos - 65 + 'px'
    }
    pPercent.textContent = `${Math.round((xPos-50) / 4.1)}`
}

divPointer.addEventListener('mousedown', () => {
    isMove = true
    console.log("Click!")
})
divPointer.addEventListener('mouseup', () => {
    isMove = false
    console.log("OFF!")
})
divPointer.addEventListener('mouseout', () => {
    isMove = false
    console.log("OUT!")
})

divPointer.addEventListener('mousemove', (e) => {
    if(isMove){
        movePointer(e)
    }
})


