const minute = document.querySelector('#minute')
const hour = document.querySelector('#hour')
const second = document.querySelector('#second')

function secondRotation(s) {
    return s * 360/60
}
function minRotation(m) {
    return m * 360/60
}
function hourRotation(h) {
    return h * 360/12
}

let secondcount = 0
let mincount = 0
let hourcount = 0
function secondrotate() {
    secondcount++
    let secondTurnDegree = secondRotation(secondcount)
    second.style.transform = "rotate(" + secondTurnDegree + "deg)"
    minrotate()
    hourrotate()
}

function minrotate() {
    mincount = secondcount/60
    let minTurnDegree = minRotation(mincount)
    minute.style.transform = "rotate(" + minTurnDegree + "deg)"
}

function hourrotate() {
    hourcount = mincount/60
    let hourTurnDegree = hourRotation(hourcount)
    hour.style.transform = "rotate(" + hourTurnDegree + "deg)"
}

setInterval(secondrotate, 1000)

//sean javascript code help shout out!