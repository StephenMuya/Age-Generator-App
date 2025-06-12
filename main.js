
function validateAge() {
    
const dayRegularExp = /^(0[1-9]|[12][0-9]|31)$/;
const monthRegularExp = /^(0?[1-9]|1[0-2])$/; 
const yearRegularExp = /^(19[0-9]{2}|20[0-1][0-9]|202[0-5])$/; //Users cannot enter future years.
const generalDateRegularExp = /^(?:(\d{2})[-\/](\d{2})[-\/](\d{2})|(\d{4})[-\/](\d{2})[-\/](\d{2}))$/;

const dayValue = document.getElementsByClassName('day')[0];
const monthValue = document.getElementsByClassName('month')[0];
const yearValue = document.getElementsByClassName('year')[0];


const firstError = document.getElementsByClassName('error-one');
const secondError = document.getElementsByClassName('error-two');
const thirdError = document.getElementsByClassName('error-three');

const dayText = document.getElementById('day-text');
const monthText = document.getElementById('month-text');
const yearText = document.getElementById('year-text');

    let isInputValid = true;

    if (dayValue.value === "") {
        firstError[0].style.display = "inline";
        dayValue.style.borderColor = 'red';
        dayText.style.color = 'red';
        isInputValid = false;
    } else {
        firstError[0].style.display = "none";
        dayValue.style.borderColor = 'black';
        dayText.style.color = 'black';
    }

    if (monthValue.value === "") {
        firstError[1].style.display = "inline";
        monthValue.style.borderColor = 'red';
        monthText.style.color = 'red';
        isInputValid = false;
    } else {
        firstError[1].style.display = "none";
        monthValue.style.borderColor = 'black';
        monthText.style.color = 'black';
    }

    if (yearValue.value === "") {
        firstError[2].style.display = "inline";
        yearValue.style.borderColor = 'red';
        yearText.style.color = 'red';
        isInputValid = false;
    } else {
        firstError[2].style.display = "none";
        yearValue.style.borderColor = 'black';
        yearText.style.color = 'black';
    }

    if(!isInputValid) return;

    if(!dayRegularExp.test(dayValue.value)) {
        secondError[0].style.display = "inline";
        dayValue.style.borderColor = 'red';
        dayText.style.color = 'red';
        isInputValid = false;
    } else{
        secondError[0].style.display = "none";
        dayValue.style.borderColor = 'black';
        dayText.style.color = 'black';
    }

    if(!monthRegularExp.test(monthValue.value)) {
        secondError[1].style.display = "inline";
        monthValue.style.borderColor = 'red';
        monthText.style.color = 'red';
        isInputValid = false;
    } else{
        secondError[1].style.display = "none";
        monthValue.style.borderColor = 'black';
        monthText.style.color = 'black';
    }

    if(!yearRegularExp.test(yearValue.value)) {
        secondError[2].style.display = "inline";
        yearValue.style.borderColor = 'red';
        yearText.style.color = 'red';
        isInputValid = false;
    } else{
        secondError[2].style.display = "none";
        yearValue.style.borderColor = 'black';
        yearText.style.color = 'black';
    }

    if(!isInputValid) return;

    const fullDateValue = `${yearValue.value}-${monthValue.value}-${dayValue.value}`;

    if (!generalDateRegularExp.test(fullDateValue)) {
        thirdError[0].style.display = "inline";
    } else{
        thirdError[0].style.display = "none";
    }


    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; 
    const currentYear = currentDate.getFullYear();

    const dayOfBirth = parseInt(dayValue.value);
    const monthOfBirth = parseInt(monthValue.value);
    const yearOfBirth = parseInt(yearValue.value);

    
    let ageInYears = currentYear - yearOfBirth;
    let ageInMonths = currentMonth - monthOfBirth;
    let ageInDays = currentDay - dayOfBirth;

    if (ageInDays < 0) {
        ageInMonths--;
        const lastMonth = new Date(currentYear, currentMonth - 1, 0);
        ageInDays += lastMonth.getDate(); 
    }

    if (ageInMonths < 0) {
        ageInYears--;
        ageInMonths += 12; 
    }

    const displayYearsRemaining = document.getElementsByClassName("current-years")[0];
    const displayMonthsRemaining = document.getElementsByClassName("current-months")[0];
    const displayDaysRemaining = document.getElementsByClassName("current-days")[0];

    displayYearsRemaining.innerHTML = ageInYears;
    displayMonthsRemaining.innerHTML = ageInMonths;
    displayDaysRemaining.innerHTML = ageInDays;

}

document.getElementById("button").addEventListener("click", validateAge);