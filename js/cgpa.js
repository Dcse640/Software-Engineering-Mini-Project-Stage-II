function addSubject() {
  const container = document.getElementById("subjectsContainer");
  const div = document.createElement("div");
  div.className = "subject";
  div.style.marginBottom = "1rem";
  div.innerHTML = `
    <input type="text" placeholder="Subject Name" class="subjectName">
    <input type="number" placeholder="Marks Obtained" class="marks">
    <input type="number" placeholder="Full Marks" class="fullMarks">
    <input type="number" placeholder="Credits" class="credits">
    <button onclick="this.parentElement.remove()">Remove</button>
  `;
  container.appendChild(div);
}

function calculateCGPA() {
  const subjects = document.querySelectorAll(".subject");
  let totalCredits = 0;
  let weightedScore = 0;
  let summary = "";

  subjects.forEach(sub => {
    const name = sub.querySelector(".subjectName").value || "Unnamed Subject";
    const marks = parseFloat(sub.querySelector(".marks").value);
    const full = parseFloat(sub.querySelector(".fullMarks").value);
    const credit = parseFloat(sub.querySelector(".credits").value);

    if (isNaN(marks) || isNaN(full) || isNaN(credit) || full === 0) return;

    const percentage = (marks / full) * 100;

    // Grading scale (adjust if needed)
    let gradePoint;
    if (percentage >= 90) gradePoint = 10;
    else if (percentage >= 80) gradePoint = 9;
    else if (percentage >= 70) gradePoint = 8;
    else if (percentage >= 60) gradePoint = 7;
    else if (percentage >= 50) gradePoint = 6;
    else if (percentage >= 40) gradePoint = 5;
    else gradePoint = 0;

    weightedScore += gradePoint * credit;
    totalCredits += credit;

    summary += `${name}: Grade Point ${gradePoint} × Credit ${credit} = ${gradePoint * credit}\n`;
  });

  if (totalCredits === 0) {
    document.getElementById("cgpaResult").innerText = "Please fill in valid inputs.";
    return;
  }

  const cgpa = weightedScore / totalCredits;
  document.getElementById("cgpaResult").innerText =
    `${summary}\n\nFinal CGPA: ${cgpa.toFixed(2)}`;
}
