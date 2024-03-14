const form = document.querySelector('form');
// This usecase will give empty value as it provide value just after loading site
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    let bmi = null;

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // Calculate BMI category
        let category = "";
        if (bmi < 18.6) {
            category = "Underweight";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = "Normal Range";
        } else {
            category = "Overweight";
        }
        // Show the result
        results.innerHTML = `<span>BMI: ${bmi}</span><br><span>Category: ${category}</span>`;
    }
});
