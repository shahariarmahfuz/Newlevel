function getAge() {
    const dobInput = document.getElementById("inputDob").value;
    const dob = new Date(dobInput);
    const now = new Date();

    const yearDiff = now.getFullYear() - dob.getFullYear();
    const monthDiff = now.getMonth() - dob.getMonth();
    const dateDiff = now.getDate() - dob.getDate
