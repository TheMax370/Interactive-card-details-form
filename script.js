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
    let result = nameREGEX.test(name);
    
    if (result === true) {
        alert(result);
    }

    else {
        cardHolderName.style.borderColor = '#FF5050';
        const textName = document.createElement('p');
        textName.innerHTML = 'Wrong format, letters only'
        document.getElementsByClassName('name-container')[0].appendChild(textName);
    }
    
})

