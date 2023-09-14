function incrementalIncreaseMethod(populations, decades, targetYear) {
    // Calculate growth rates
    const growthRates = [];
    var X = 0;
    for (let i = 1; i < populations.length; i++) {
        const rate = populations[i] - populations[i - 1];
        growthRates.push(rate);
        X+=rate;
    }
    console.log(growthRates);
    const increments = [];
    var Y = 0;
    for (let i = 1; i < growthRates.length; i++) {
        const rate = growthRates[i] - growthRates[i - 1];
        increments.push(rate);
        Y+=rate;
    }

    // Calculate the averages of first increments and second increments
    const avgX = Math.ceil(X/growthRates.length);
    const avgY = Math.ceil(Y/increments.length);
    
    // Calculate the population forecast (Pn)
    const interval = decades[1]-decades[0];
    const Plast = populations[populations.length-1];
    const Llast = decades[decades.length-1];
    const n = (targetYear-Llast)/interval;
    const Pn = Math.ceil(Plast + (n*avgX) + ((n*(n+1))/2)*avgY);
    
    // Display the result
    document.getElementById('incrementalResult').textContent = `Approximate population forecast in ${targetYear} rounded above: ${Pn}`;
}

document.getElementById('incrementalButton').addEventListener('click', function () {
    // Get input values from HTML form as strings
    const populationsInput = document.getElementById('populations').value;
    const decadesInput = document.getElementById('decades').value;
    const targetYearInput = document.getElementById('targetYear').value;

    // Split comma-separated values into arrays
    const populationsArray = populationsInput.split(',').map(Number);
    const decadesArray = decadesInput.split(',').map(Number);

    // Check if any input is NaN (not a number)
    if (isNaN(populationsArray[0]) || isNaN(decadesArray[0]) || isNaN(targetYearInput)) {
        alert("Please enter valid numeric values.");
        return;
    }

    // Call the corresponding function from script.js
    incrementalIncreaseMethod(populationsArray, decadesArray, targetYearInput);
});
