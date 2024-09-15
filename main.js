const dateRegularExp = / ^(?:(\d{2})[-\/](\d{2})[-\/](\d{2})|(\d{4})[-\/](\d{2})[-\/](\d{2}))$/;

const firstError = document.getElementsByClassName('error-one');
const SecondError = document.getElementsByClassName('error-two');
const thirdError = document.getElementsByClassName('error-three');

const dayValue = document.getElementsByClassName('day')
const monthValue = document.getElementsByClassName('month').value;
const yearValue = document.getElementsByClassName('year').value;

let isVaid = fasle;

function validateInpuOne() {
    
    if(dayValue.value === "") {
        firstError.style.display = "inline";
        isVaid = true;
    } else{
        firstError.style.display = "none";
    }
}

validateInpuOne()


