
const calculateImc = () => {
    const hight = document.querySelector('input#ihight').value
    const weight = document.querySelector('input#iweight').value
    
    return weight/(hight/100)**2
}


let isButtonClicked = false
const showResult = () => {
    const textArea = document.querySelector('textarea')
    if (!isButtonClicked) {
        const result = calculateImc()
        if (result !== null){
            textArea.innerHTML = `Your BMI is ${result.toFixed(2)}!\n`
        
            if (result < 18.5) {
                textArea.innerHTML += 'Your BMI is low than the average.'
            } else if (result > 18.5 && result < 25) {
                textArea.innerHTML += 'Your BMI is in the average.'
            } else if (result > 25 && result < 30) {
                textArea.innerHTML += 'Your BMI is slightly up of the average.'
            } else if (result > 30 && result < 35) {
                textArea.innerHTML += 'Your BMI is classified as Grade 1 obesidy .'
            } else if (result > 35 && result < 40) {
                textArea.innerHTML += 'Your BMI is classified as Grade 2 obesidy .'
            } else {
                textArea.innerHTML += 'Your BMI is classified as Grade 3 obesidy .'
            }
            isButtonClicked = true
        }
    } else {
        textArea.innerHTML = ''
        isButtonClicked = false
        showResult()
    }
    
}


