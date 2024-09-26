const dateRegularExp = / ^(?:(\d{2})[-\/](\d{2})[-\/](\d{2})|(\d{4})[-\/](\d{2})[-\/](\d{2}))$/;
const dateRegularExpTwo = /^[1-7]$/

const secondError = document.getElementsByClassName('error-two');
const thirdError = document.getElementsByClassName('error-three');
const firstError = document.getElementsByClassName('error-one');

const dayValue = document.getElementsByClassName('day')[0];
const monthValue = document.getElementsByClassName('month')[0];
const yearValue = document.getElementsByClassName('year')[0];

let isInputValid = true; 


function showErrorOne() {
    
    /* First error for the inputs */
    if(dayValue.value === "") {
        firstError[0].style.display = "inline";
        dayValue.style.borderColor = 'red';
        isInputValid = false;
    } 
    else{
        firstError[0].style.display = "none";
        secondError[0].style.display = "none";
    }



    if(monthValue.value === "") {
        firstError[1].style.display = "inline";
        monthValue.style.borderColor = 'red';
        isInputValid = false;
    } else{
        monthValue.style.borderColor = 'black';
        firstError[1].style.display = "none";
    }

    if(yearValue.value === "") {
        firstError[2].style.display = "inline";
        yearValue.style.borderColor = 'red';
        isInputValid = false;
    } else{
        yearValue.style.borderColor = 'black';
        firstError[2].style.display = "none";
    }
}


/*function showErrorTwo() {
    if (!dateRegularExpTwo.test(dayValue.value)) {
        secondError[0].style.display = "inline";
        isInputValid = false;
      } else {
        secondError[0].style.display = "none";
      }
}*/

/*function validateForm() {
    showErrorOne();
    showErrorTwo()
}*/

document.getElementById("button").addEventListener("click", showErrorOne);





