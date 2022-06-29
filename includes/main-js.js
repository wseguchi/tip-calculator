
var tipPercentage;
var billValue;
var peopleValue;
var tipAmount;
var totalAmount;

function input(id, varValue) {
    checkInputValue(id, varValue);
    getInputValue(id, varValue);
    doTheMath();
}

function getInputValue(id, varValue) {
    console.log(varValue);
    if (varValue == 'billValue') {
        billValue = parseFloat(document.getElementById(id).value);
    } else {
        peopleValue = parseFloat(document.getElementById(id).value);
    }
} 

function checkInputValue(id, varValue) {
    varValue = parseFloat(document.getElementById(id).value);
    console.log(varValue);
    checkInput(id, varValue);
}

function btnGetTipPercentage(id) {
    tipPercentage = parseFloat(document.getElementById(id).value);
    //console.log(tipPercentage);
    doTheMath();
}

function inputMaskNumbers(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 7 && charCode < 58) || (charCode == 110) || (charCode == 190)) {
        return true;
    }
    return false;
}

function checkInput(id, varValue) {
    if (varValue == 0 || isNaN(varValue)) {
        document.getElementById(id+'_zero').style.display='block';
    } else {
        document.getElementById(id+'_zero').style.display='none';
    }
}

function doTheMath() {
    console.log('1) billValue: ' + billValue);
    console.log('2) tipPercentage: ' + tipPercentage);
    console.log('3) peopleValue: ' + peopleValue);

    tipAmount = billValue * (tipPercentage / 100);
    console.log('Resultado - tipAmount: ' + tipAmount);
    if (isNaN(tipAmount)) {
        document.getElementById('tip_amount_value').style.color='hsl(184, 80%, 24%)';
        document.getElementById("tip_amount_value").innerHTML = '$0.00';
    } else {
        document.getElementById('tip_amount_value').style.color='hsl(172, 67%, 45%)';
        document.getElementById("tip_amount_value").innerHTML = '$'+ tipAmount.toFixed(2);
    }

    totalAmount = (billValue * (1 + (tipPercentage / 100))) / peopleValue;
    console.log('Resultado - totalAmount: ' + totalAmount);
    if (isNaN(totalAmount)) {
        document.getElementById('total_amount_value').style.color='hsl(184, 80%, 24%)';
        document.getElementById("total_amount_value").innerHTML = '$0.00';
    } else {
        document.getElementById('total_amount_value').style.color='hsl(172, 67%, 45%)';
        document.getElementById("total_amount_value").innerHTML = '$'+ totalAmount.toFixed(2);
    }
}

function btnReset() {
    alert("I'll clear all values!");
}
