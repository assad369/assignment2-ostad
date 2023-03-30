function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value / 100; // convert cm to m
    var bmi = weight / (height * height);
    var result = document.getElementById("result");

    if (bmi < 18.5) {
        result.innerHTML = "Your BMI is " + bmi.toFixed(1) + ", which means you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result.innerHTML = "Your BMI is " + bmi.toFixed(1) + ", which means you have a normal weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        result.innerHTML = "Your BMI is " + bmi.toFixed(1) + ", which means you are overweight.";
    } else {
        result.innerHTML = "Your BMI is " + bmi.toFixed(1) + ", which means you are obese.";
    }
}