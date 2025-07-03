function convertTemperature() {
  const input = document.getElementById("tempInput").value;
  const unit = document.getElementById("unitSelect").value;
  const resultField = document.getElementById("result");

  if (input === "" || isNaN(input)) {
    resultField.value = "Invalid input";
    return;
  }

  const temp = parseFloat(input);
  let result = "";

  if (unit === "F") {
    result = `${((temp - 32) * 5 / 9).toFixed(4)} °C`;
  } else if (unit === "C") {
    result = `${(temp * 9 / 5 + 32).toFixed(4)} °F`;
  } else if (unit === "K") {
    result = `${(temp - 273.15).toFixed(4)} °C`;
  }

  resultField.value = result;
}
