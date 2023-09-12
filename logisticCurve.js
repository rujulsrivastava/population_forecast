// Function to calculate population forecast
function logisticCurveMethod(Po,P1,P2,t1,t) {
    // Perform calculations
    const Ps = ((2*Po*P1*P2) - (P1**2 * (Po + P2))) / ((Po*P2) - P1**2);
    const m = (Ps - Po) / Po;
    const n = (2.3/t1) * Math.log((Po * (Ps - P1)) / (P1 * (Ps - Po)));
    const Pn = Math.ceil(Ps / (1 + (m * Math.exp((n * t)))));

    if (isNaN(Pn) || Pn < 0) {
        // Display an error message to the user
        alert("The logistic curve method could not provide a valid result for the given data. " +
              "Possible reasons include insufficient data or inappropriate parameter values.");
              return;
    }

    // Display the result
    document.getElementById('logisticCurveResult').textContent = `Approximate population forecast rounded above: ${Pn}`;
}

document.getElementById('logisticButton').addEventListener('click', function () {
    // Get input values from HTML form
       const Po = parseFloat(document.getElementById('Po').value);
       const P1 = parseFloat(document.getElementById('P1').value);
       const P2 = parseFloat(document.getElementById('P2').value);
       const t1 = parseFloat(document.getElementById('t1').value);
       const t = parseFloat(document.getElementById('t').value);

    // Check if any input is NaN (not a number)
    if (isNaN(Po) || isNaN(P1) || isNaN(P2) || isNaN(t1) || isNaN(t)) {
        alert("Please enter valid numeric values.");
        return;
    }

    logisticCurveMethod(Po,P1,P2,t1,t);
});

