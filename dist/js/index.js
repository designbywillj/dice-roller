let diceWrapper = document.getElementById('dice-wrapper')
let submit = document.getElementById('submit')

let dice = [4, 6, 8, 10, 12, 20]

function generateButtons() {
    for (i = 0; i < dice.length; i++) {
        let btnCol = document.createElement('div')
        btnCol.classList.add('col-4')
        diceWrapper.insertBefore(btnCol, submit)

        let btnRadio = document.createElement('input')
        btnRadio.type = 'radio'
        btnRadio.name = 'dice'
        btnRadio.id = 'd' + dice[i]
        btnRadio.value = dice[i]
        btnCol.appendChild(btnRadio)

        let btnLabel = document.createElement('label')
        btnLabel.setAttribute('for', btnRadio.id)
        btnLabel.innerText = btnRadio.id.toUpperCase()
        btnLabel.classList.add('dice__btn')
        btnCol.appendChild(btnLabel)
    }
}
generateButtons()

submit.addEventListener('click', function() {
    let radio = document.getElementsByName('dice')
    for (i = 0; i < radio.length; i++) { 
        if (radio[i].checked) {
            let resultText = document.getElementById('result')
            resultText.innerText = Math.floor(Math.random() * radio[i].value + 1)
        }
    }
})