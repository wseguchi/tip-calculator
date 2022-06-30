let tipPercentage, billValue, peopleValue, tipAmount, totalAmount;

// Input field mask to allow only numbers:
function inputMaskNumbers(evt) { 
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if ((charCode > 7 && charCode < 58) || (charCode == 110) || (charCode == 190)) {
		return true;
	}
	return false;
}

// Check input value - Can't be zero:
function checkInput(id, varValue) {
	if (varValue == 0 || isNaN(varValue)) {
		document.getElementById(id + '_zero').style.display = 'block';
	} else {
		document.getElementById(id + '_zero').style.display = 'none';
	}
}

// This funticion is called by HTML input - "onInput":
function input(id, varValue) {
	checkInputValue(id, varValue);
	getInputValue(id, varValue);
	doTheMath();
}

function checkInputValue(id, varValue) {
	varValue = parseFloat(document.getElementById(id).value);
	checkInput(id, varValue);
}

// Set values to JS variables: "billValue" and "peopleValue":
function getInputValue(id, varValue) {
	if (varValue == 'billValue') {
		billValue = parseFloat(document.getElementById(id).value);
	} else {
		peopleValue = parseFloat(document.getElementById(id).value);
	}
}

// Gets the tip percentage from buttons/custom input:
function btnGetTipPercentage(id) {
	tipPercentage = parseFloat(document.getElementById(id).value);
	doTheMath();
}

// Time to do some math! =) 
function doTheMath() {
    // Calculate tip value:
	tipAmount = billValue * (tipPercentage / 100);
	if (isNaN(tipAmount)) {
		document.getElementById('tip_amount_value').style.color = 'hsl(184, 80%, 24%)';
		document.getElementById("tip_amount_value").innerHTML = '$0.00';
	} else {
		document.getElementById('tip_amount_value').style.color = 'hsl(172, 67%, 45%)';
		document.getElementById("tip_amount_value").innerHTML = '$' + tipAmount.toFixed(2);
	}

    // Calculate total amount per person:
	totalAmount = (billValue * (1 + (tipPercentage / 100))) / peopleValue;
	if (isNaN(totalAmount) || totalAmount == Infinity) {
		document.getElementById('total_amount_value').style.color = 'hsl(184, 80%, 24%)';
		document.getElementById("total_amount_value").innerHTML = '$0.00';
	} else {
		document.getElementById('total_amount_value').style.color = 'hsl(172, 67%, 45%)';
		document.getElementById("total_amount_value").innerHTML = '$' + totalAmount.toFixed(2);
	}
}

// Reset App:
function btnReset() {
	// Set all variable to zero:
	tipPercentage = 0;
	billValue = 0;
	peopleValue = 0;
	tipAmount = 0;
	totalAmount = 0;

	// Clear input values:
	document.getElementById("bill_value").value = '';
	document.getElementById("people_value").value = '';
	document.getElementById("customp").value = '';

	// Clear output values and restore cdefault colors:
	document.getElementById('tip_amount_value').style.color = 'hsl(184, 80%, 24%)';
	document.getElementById("tip_amount_value").innerHTML = '$0.00';
	document.getElementById('total_amount_value').style.color = 'hsl(184, 80%, 24%)';
	document.getElementById("total_amount_value").innerHTML = '$0.00';

	// Tip Selector Buttons - Clear "active" class from all buttons and add it to "customp" div:
	var current = document.getElementsByClassName("active");
	current[0].className = current[0].className.replace(" active", "");
	document.getElementById("customp").classList.add("active");
}

// Highlight active button:
var header = document.getElementById("buttons_grid");
var btns = header.getElementsByClassName("btn-act");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}