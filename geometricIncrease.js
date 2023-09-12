function geometricalIncreaseMethod(populations, decades, targetYear) {
    // Calculate growth rates
    const growthRates = [];
    for (let i = 1; i < populations.length; i++) {
        const rate = ((populations[i] - populations[i - 1]) / populations[i - 1]).toFixed(2);
        growthRates.push(rate);
    }
    console.log(growthRates);
    // Calculate the geometric mean of growth rates
    let product = 1;
    for (const rate of growthRates) {
        product *= rate;
    }
    const geometricMean = Math.pow(product, 1 / growthRates.length);
    
    // Calculate the population forecast (Pn)
    const interval = decades[1]-decades[0];
    const Plast = populations[populations.length-1];
    const Llast = decades[decades.length-1];
    const n = (targetYear-Llast)/interval;
    const Pn = Math.ceil(Plast * Math.pow(1 + geometricMean, n));
    
    // Display the result
    document.getElementById('geometricalResult').textContent = `Approximate population forecast in ${targetYear} rounded above: ${Pn}`;
}

document.getElementById('geometricButton').addEventListener('click', function () {
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
    geometricalIncreaseMethod(populationsArray, decadesArray, targetYearInput);
});
