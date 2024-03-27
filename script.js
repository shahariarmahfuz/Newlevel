function getAge() {
    const dobInput = document.getElementById("inputDob").value;
    const dob = new Date(dobInput);
    const now = new Date();

    const yearDiff = now.getFullYear() - dob.getFullYear();
    const monthDiff = now.getMonth() - dob.getMonth();
    const dateDiff = now.getDate() - dob.getDate();

    if (yearDiff < 0) {
        document.getElementById("currentAge").textContent = "Invalid Date";
        return;
    }

    document.getElementById("currentAge").textContent = `Your current age is ${yearDiff} years, ${monthDiff} months, and ${dateDiff} days.`;
}
