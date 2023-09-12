// Function to calculate population forecast
function arithmeticalIncreaseMethod(populations, decades, targetYear) {
    // Calculate the total increase
    let totalIncrease = 0;
    for (let i = 1; i < populations.length; i++) {
        totalIncrease += populations[i] - populations[i - 1];
    }
    // Calculate the average increase (x̄)
    const averageIncrease = Math.ceil(totalIncrease / (populations.length - 1));
    
    // Calculate the population forecast (Pn)
    const interval = decades[1]-decades[0];
    const Plast = populations[populations.length-1];
    const Llast = decades[decades.length-1];
    const n = (targetYear-Llast)/interval;
    const Pn = Math.ceil(Plast + (n * averageIncrease));
    console.log(Pn);
     // Display the result
    document.getElementById('arithmeticResult').textContent = `Approximate population forecast in ${targetYear} rounded above: ${Pn}`;
}

document.getElementById('arithmeticButton').addEventListener('click', function () {
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
    arithmeticalIncreaseMethod(populationsArray, decadesArray, targetYearInput);
});
