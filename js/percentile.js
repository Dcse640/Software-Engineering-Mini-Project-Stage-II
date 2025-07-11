function addSubject() {
  const container = document.getElementById("subjectsContainer");
  const div = document.createElement("div");
  div.className = "subject";
  div.style.marginBottom = "1rem";
  div.innerHTML = `
    <input type="text" placeholder="Subject Name" class="subjectName">
    <input type="number" placeholder="Marks Obtained" class="marks">
    <input type="number" placeholder="Full Marks" class="fullMarks">
    <input type="number" placeholder="Pass Marks" class="passMarks">
    <button onclick="this.parentElement.remove()">Remove</button>
  `;
  container.appendChild(div);
}

function calculatePercentage() {
  const subjects = document.querySelectorAll(".subject");

  let totalMarks = 0;
  let fullMarks = 0;
  let failedSubjects = [];

  subjects.forEach(sub => {
    const name = sub.querySelector(".subjectName").value || "Unnamed Subject";
    const obtained = parseFloat(sub.querySelector(".marks").value);
    const full = parseFloat(sub.querySelector(".fullMarks").value);
    const pass = parseFloat(sub.querySelector(".passMarks").value);

    if (!isNaN(obtained) && !isNaN(full) && full > 0 && !isNaN(pass)) {
      totalMarks += obtained;
      fullMarks += full;
      if (obtained < pass) failedSubjects.push(name);
    }
  });

  if (fullMarks === 0) {
    document.getElementById("percentageResult").innerText = "Please enter valid inputs.";
    return;
  }

  const percentage = (totalMarks / fullMarks) * 100;

  let result = `Total Marks: ${totalMarks}/${fullMarks}<br>`;
  result += `Percentage: ${percentage.toFixed(2)}%<br>`;
  if (failedSubjects.length > 0) {
    result += `Failed in: ${failedSubjects.join(", ")}`;
  } else {
    result += `All subjects passed.`;
  }

  document.getElementById("percentageResult").innerHTML = result;
}
