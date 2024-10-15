document.addEventListener("DOMContentLoaded", function(){
    getSize()
    createBoard(16)
    console.log('hi')
})

function createBoard(size){
    let container = document.querySelector("#border")

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div")
        div.style.backgroundColor = "yellow"
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
        }
    }
}