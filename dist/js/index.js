const diceWrapper = document.getElementById('dice-wrapper')
const submitWrapper = document.getElementById('submit-wrapper')
const submit = document.getElementById('submit')

const dice = [4, 6, 8, 10, 12, 20]

function generateButtons() {
    for (i = 0; i < dice.length; i++) {
        const btnValue = dice[i]

        const btnCol = document.createElement('div')
        btnCol.classList.add('col-4')
        diceWrapper.insertBefore(btnCol, submitWrapper)

        const btnRadio = document.createElement('input')
        btnRadio.type = 'radio'
        btnRadio.name = 'dice'
        btnRadio.value = btnValue
        btnRadio.id = btnValue
        btnCol.appendChild(btnRadio)

        const btnLabel = document.createElement('label')
        btnLabel.setAttribute('for', btnValue)
        btnLabel.innerText = btnValue
        btnLabel.classList.add('dice__btn')
        btnCol.appendChild(btnLabel)
    }
}
generateButtons()

submit.addEventListener('click', function() {
    const radio = document.getElementsByName('dice')
    for (i = 0; i < radio.length; i++) { 
        if (radio[i].checked) {
            const radioValue = radio[i].value
            const resultText = document.getElementById('result')
            resultText.classList.add('result__text--transition')
            submit.disabled = true
            setTimeout(function() {
                submit.disabled = false
                resultText.classList.remove('result__text--transition')
                resultText.innerText = Math.floor(Math.random() * radioValue + 1)
            }, 500)
        }
    }
})