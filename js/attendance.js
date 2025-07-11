
function calculateAttendance() {
  const attended = parseFloat(document.getElementById("attended").value);
  const total = parseFloat(document.getElementById("totalClasses").value);
  if (isNaN(attended) || isNaN(total)) return alert("Enter valid inputs");
  const percent = (attended / total) * 100;
  document.getElementById("attendanceResult").innerText = `Attendance: ${percent.toFixed(2)}%`;
}
