var diceWrapper = document.getElementById('dice-wrapper')
var submit = document.getElementById('submit')

var dice = [4, 6, 8, 10, 12, 20]

function generateButtons() {
    for (i = 0; i < dice.length; i++) {
        var btnCol = document.createElement('div')
        btnCol.classList.add('col-4')
        diceWrapper.insertBefore(btnCol, submit)

        var btnRadio = document.createElement('input')
        btnRadio.type = 'radio'
        btnRadio.name = 'dice'
        btnRadio.id = 'd' + dice[i]
        btnRadio.value = dice[i]
        btnCol.appendChild(btnRadio)

        var btnLabel = document.createElement('label')
        btnLabel.setAttribute('for', btnRadio.id)
        btnLabel.innerText = btnRadio.id.toUpperCase()
        btnLabel.classList.add('dice__btn')
        btnCol.appendChild(btnLabel)
    }
}
generateButtons()

var submit = document.getElementById('submit')
submit.addEventListener('click', function() {
    var radio = document.getElementsByName('dice')
    for (i = 0; i < radio.length; i++) { 
        if (radio[i].checked) {
            var resultText = document.getElementById('result')
            resultText.innerText = Math.floor(Math.random() * radio[i].value + 1)
            result.appendChild(resultText)
        }
    }
})