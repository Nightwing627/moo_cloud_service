

const CURRENCY_KEY = "CURRENCY"
const CURRENCY_EUR = "eur"
const CURRENCY_CHF = "chf"


$(async function () {
	const currencySelector = document.getElementById("currencySelector")

	// SETTING DEFAULT VALUE
	const currentValue = localStorage.getItem(CURRENCY_KEY) || "eur"
	localStorage.setItem(CURRENCY_KEY, currentValue)

	if(localStorage.getItem(CURRENCY_KEY) == "eur"){
		currencySelector.value = "EUR"
	}
	if(localStorage.getItem(CURRENCY_KEY) == "chf"){
		currencySelector.value = "CHF"
	}


	$('#currencySelector').on('change', function() {
		
		if(currencySelector.value == "EUR"){
			localStorage.setItem(CURRENCY_KEY, CURRENCY_EUR)
		}
		if(currencySelector.value == "CHF"){
			localStorage.setItem(CURRENCY_KEY, CURRENCY_CHF)
		}

	});

	console.log("Currency: ", currencySelector.value)
})
