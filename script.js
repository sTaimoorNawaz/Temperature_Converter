const cel = document.getElementById("celsius");
const fer = document.getElementById("fahrenheit");
const form = document.getElementById("formula");

cel.addEventListener("input", function () {
  let ce = this.value;
  let fe = (ce * 9) / 5 + 32;
  fer.value = fe;
  if (cel.value) {
      form.innerText = `Celsius To Fahrenheit = (${ce}°C x 9/5) + 32 = ${fe}°F`;
  }
});

fer.addEventListener("input", function () {
  let fr = this.value;
  let cl = (((fr - 32) * 5) / 9).toFixed(4);
  cel.value = cl;
  if (fer.value) {
    form.innerText = `Fahrenheit To Celsius = (${fr}°F-32) x 5/9=${cl}°C`;
}
});
