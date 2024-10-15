let black = "black"

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16)

    let btn_popup = document.querySelector("#popup")
    btn_popup.addEventListener('click', function(){
        let size = getSize()
        createBoard(size)
    })
})

function createBoard(size){
    let container = document.querySelector("#border")

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div")
        div.addEventListener('mouseover', colorDivs)
        container.insertAdjacentElement
        ("beforeend", div)
    }
}

function getSize(){
    let choose = window.prompt("what will be the size of the board?")
    let message = document.querySelector("#message")
    if(choose == ""){
        message.innerHTML = "Please provide a number"
    }else{
        if(input < 0 || input > 100){
            message.innerHTML = "Provide a number between 1 and 100"
        }else{
            message.innerHTML = "Now you can play!"
            return choose
        }
    }
}

function colorDivs(){
    if(colorChoise == 'random'){
        this.style.backgroundColor = ""
    }
}

function setColor(colorChoise){
    let color = colorChoise
}