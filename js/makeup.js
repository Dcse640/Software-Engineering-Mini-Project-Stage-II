
function calculateMakeupClasses() {
  const attended = parseFloat(document.getElementById("currentAttended").value);
  const total = parseFloat(document.getElementById("currentTotal").value);
  const target = parseFloat(document.getElementById("targetAttendance").value);
  let required = 0;
  while ((attended + required) / (total + required) * 100 < target) required++;
  document.getElementById("makeupResult").innerText = `Attend next ${required} classes to reach ${target}%`;
}
