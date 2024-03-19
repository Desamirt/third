function calculateBMI() {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  if (height === "" || weight === "") {
    alert("Please enter both height and weight.");
    return;
  }

  var heightMeters = height / 100;
  var bmi = weight / (heightMeters * heightMeters);
  var result = document.getElementById("result");
  result.innerHTML = "Your BMI is: " + bmi.toFixed(2);
}