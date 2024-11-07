// script.js file
// Sample students list
// const students = [
//     { roll: 1, name: "John Doe", status: null },
//     { roll: 2, name: "Jane Smith", status: null },
//     // Add more students as needed
// ];
const students = [
    { roll: 1, name: "John Doe", status: null },
    { roll: 2, name: "Jane Smith", status: null },
    { roll: 3, name: "Alice Johnson", status: null },
    { roll: 4, name: "Bob Brown", status: null },
    { roll: 5, name: "Charlie Wilson", status: null },
    { roll: 6, name: "David Lee", status: null },
    { roll: 7, name: "Emily Davis", status: null },
    { roll: 8, name: "Michael Clark", status: null },
    { roll: 9, name: "Sarah Martinez", status: null },
    { roll: 10, name: "Daniel Garcia", status: null },
    { roll: 11, name: "Laura Lewis", status: null },
    { roll: 12, name: "Ryan Young", status: null },
    { roll: 13, name: "Sophia Allen", status: null },
    { roll: 14, name: "Joshua King", status: null },
    { roll: 15, name: "Isabella Wright", status: null },
    { roll: 16, name: "Nathan Scott", status: null },
    { roll: 17, name: "Chloe Harris", status: null },
    { roll: 18, name: "Jacob Hill", status: null },
    { roll: 19, name: "Madison Green", status: null },
    { roll: 20, name: "Lucas Adams", status: null },
    { roll: 21, name: "Mia Baker", status: null },
    { roll: 22, name: "Alexander Carter", status: null },
    { roll: 23, name: "Olivia Perez", status: null },
    { roll: 24, name: "Ethan Roberts", status: null },
    { roll: 25, name: "Ava Turner", status: null },
    { roll: 26, name: "Christopher Parker", status: null },
    { roll: 27, name: "Sophia Evans", status: null },
    { roll: 28, name: "Matthew Edwards", status: null },
    { roll: 29, name: "Lily Collins", status: null },
    { roll: 30, name: "Anthony Stewart", status: null },
    { roll: 31, name: "Grace Morris", status: null },
    { roll: 32, name: "Andrew Flores", status: null },
    { roll: 33, name: "Emma Nelson", status: null },
    { roll: 34, name: "Samuel Carter", status: null },
    { roll: 35, name: "Ella Reed", status: null },
    { roll: 36, name: "Logan Campbell", status: null },
    { roll: 37, name: "Avery Hughes", status: null },
    { roll: 38, name: "Joseph Rogers", status: null },
    { roll: 39, name: "Lillian Richardson", status: null },
    { roll: 40, name: "James Cox", status: null },
    { roll: 41, name: "Hannah Howard", status: null },
    { roll: 42, name: "Benjamin Ward", status: null },
    { roll: 43, name: "Addison Morgan", status: null },
    { roll: 44, name: "Mason Cooper", status: null },
    { roll: 45, name: "Brooklyn Peterson", status: null },
    { roll: 46, name: "Dylan Bell", status: null },
    { roll: 47, name: "Zoey Cook", status: null },
    { roll: 48, name: "Landon Bailey", status: null },
    { roll: 49, name: "Scarlett Reed", status: null },
    { roll: 50, name: "Carter Gray", status: null },
    { roll: 51, name: "Riley Adams", status: null },
    { roll: 52, name: "Hunter Simmons", status: null },
    { roll: 53, name: "Aubrey Foster", status: null },
    { roll: 54, name: "Jason Powell", status: null },
    { roll: 55, name: "Claire Bennett", status: null },
    { roll: 56, name: "Isaac Murphy", status: null },
    { roll: 57, name: "Samantha Bryant", status: null },
    { roll: 58, name: "Owen Mitchell", status: null },
    { roll: 59, name: "Leah Sanders", status: null },
    { roll: 60, name: "Aiden Ross", status: null },
    { roll: 61, name: "Amelia Price", status: null },
    { roll: 62, name: "Jack Griffin", status: null },
    { roll: 63, name: "Ella James", status: null },
    { roll: 64, name: "Caleb Butler", status: null },
    { roll: 65, name: "Natalie Watson", status: null },
    { roll: 66, name: "Christian Barnes", status: null },
    { roll: 67, name: "Lila Ward", status: null },
    { roll: 68, name: "Henry Scott", status: null },
    { roll: 69, name: "Maya Henderson", status: null },
    { roll: 70, name: "Luke Simmons", status: null }
];

let currentIndex = 0;
const today = new Date().toLocaleDateString();
document.getElementById("date").innerText = `Date: ${today}`;

function updateStudentDisplay() {
    const student = students[currentIndex];
    document.getElementById("student-display").innerHTML = 
        `Roll No:<span style="color: #000080; font-size: 25px;"><b> ${student.roll}</b> </span>, <br> Name: ${student.name}`;
}

function markAttendance(status) {
    students[currentIndex].status = status;
    nextStudent();
}

function nextStudent() {
    if (currentIndex < students.length - 1) {
        currentIndex++;
        updateStudentDisplay();
    }
}

function previousStudent() {
    if (currentIndex > 0) {
        currentIndex--;
        updateStudentDisplay();
    }
}

function endAttendance() {
    const className = document.getElementById("class-name").value || "Unknown Class";
    const section = document.getElementById("section").value || "Unknown Section";
    const attendanceData = {
        date: today,
        className,
        section,
        students
    };

    // Save attendance to local storage with a unique key
    const key = `attendance-${today}-${className}-${section}`;
    localStorage.setItem(key, JSON.stringify(attendanceData));

    displaySummary(attendanceData);
}

function displaySummary(data) {
    const summarySheet = document.getElementById("summary-sheet");
    summarySheet.innerHTML = `<h3>${data.className} - Section ${data.section}</h3><p>Date: ${data.date}</p>`;
    data.students.forEach(student => {
        const statusMark = student.status === 1 ? "✅" : "❌";
        const colorClass = student.status === 1 ? "present" : "absent";
        const studentEntry = document.createElement("p");
        studentEntry.className = colorClass;
        studentEntry.innerHTML = `<span>${student.roll} - ${student.name}</span> <span>${statusMark}</span>`;
        summarySheet.appendChild(studentEntry);
    });
}


// Initialize the first student's display
updateStudentDisplay();
