
function calculateDesiredCGPA() {
  const current = parseFloat(document.getElementById("currentCgpa").value);
  const done = parseInt(document.getElementById("completedSem").value);
  const target = parseFloat(document.getElementById("targetCgpa").value);
  const remaining = parseInt(document.getElementById("remainingSem").value);
  const required = ((target * (done + remaining)) - (current * done)) / remaining;
  document.getElementById("desiredCgpaResult").innerText = `Required SGPA: ${required.toFixed(2)}`;
}
