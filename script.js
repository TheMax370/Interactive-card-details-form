let mockName = document.getElementById('mock-name');
let mockCCN = document.getElementById('mock-ccn');
let mockMonth = document.getElementById('mock-month');
let mockYear = document.getElementById('mock-year');
let mockCVC = document.getElementById('mock-cvc')

let cardHolderName = document.getElementById('card-hn');
let cardNumber = document.getElementById('card-number');
let cardMonth = document.getElementById('month');
let cardYear = document.getElementById('year');
let cardCVC = document.getElementById('cvc');

let button = document.getElementById('button');

cardHolderName.addEventListener('keyup', event => {
    mockName.innerHTML = cardHolderName.value;

    if (cardHolderName.value === "") {
        mockName.innerHTML = 'JANE APPLESEED';
    }

})

cardNumber.addEventListener('keyup', event => {
    mockCCN.innerHTML = cardNumber.value;

    if (cardNumber.value === "") {
        mockCCN.innerHTML = '0000 0000 0000 0000';
    }
})

cardMonth.addEventListener('keyup', event => {
    mockMonth.innerHTML = cardMonth.value;

    if (cardMonth.value === "") {
        mockMonth.innerHTML = '00';
    }
})

cardYear.addEventListener('keyup', event => {
    mockYear.innerHTML = cardYear.value;

    if (cardYear.value === "") {
        mockYear.innerHTML = '00';
    }
})

cardCVC.addEventListener('keyup', event => {
    mockCVC.innerHTML = cardCVC.value;

    if (cardCVC.value === "") {
        mockCVC.innerHTML = '000';
    }
})

button.addEventListener('click', event => {
    let name = cardHolderName.value;
    let nameREGEX = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/;
    let resultName = nameREGEX.test(name);

    if (resultName === false) {
        document.getElementById('card-hn').style.borderColor = '#FF5050';
        document.getElementById('error-name').innerHTML = 'Wrong format, letters only';
    }

    let number = cardNumber.value;
    let cardNumRegex = /^((4\d{3})|(5[1-5]\d{2})|(6011)|(34\d{1})|(37\d{1}))-?\s?\d{4}-?\s?\d{4}-?\s?\d{4}|3[4,7][\d\s-]{15}$/;
    let resultNum = cardNumRegex.test(number);

    if (resultNum === false) {
        document.getElementById('card-number').style.borderColor = '#FF5050';
        document.getElementById('error-num').innerHTML = 'Wrong format, numbers only';
    }

    let monthNum = cardMonth.value;
    let monthNumRegex = /0[1-9]|1[0-2]/;
    let monthResult = monthNumRegex.test(monthNum);

    if (monthResult === false) {
        document.getElementById('month').style.borderColor = '#FF5050';
        document.getElementById('error-date').innerHTML = 'Wrong format, MM only';
    }

    let yearNum = cardYear.value;
    let yearRegex = /2[0-9]/;
    let yearResult = yearRegex.test(yearNum);

    if (yearResult === false) {
        document.getElementById('month').style.borderColor = '#FF5050';
        document.getElementById('error-date').innerHTML = 'Wrong format, YY only';
    }

    if (yearResult === false && monthResult === false) {
        document.getElementById('year').style.borderColor = '#FF5050';
        document.getElementById('month').style.borderColor = '#FF5050';
        document.getElementById('error-date').innerHTML = 'Wrong format, YY only and MM only';
    }

    let cardCVCNum = cardCVC.value;
    let cardCVCRegex = /^[0-9]{3,4}$/;
    let cardCVCResult = cardCVCRegex.test(cardCVCNum);

    if (cardCVCResult === false) {
        document.getElementById('cvc').style.borderColor = '#FF5050';
        document.getElementById('error-cvc').innerHTML = 'Wrong format, 3-4 digits only ';
    }

    //window.location.reload(true);


    if (resultName === true && resultNum === true && monthResult === true && yearResult === true && cardCVCResult === true) {
        document.querySelector('.name-container').style.display = 'none';
        document.querySelector('.cn-container').style.display = 'none';
        document.querySelector('.date-container').style.display = 'none';
        document.querySelector('.thank-you').style.display = 'flex';
        document.getElementById('button').innerHTML = 'Continue';

    }

})


