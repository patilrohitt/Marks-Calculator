
// const resultEl = document.getElementById("result");

const calculateMarks = (event) => {
    event.preventDefault();
    const maxMarks = 400;

    const calculateFormEl = document.getElementById("calculateform");
    const resultEl = document.getElementById("result");

    const formData = new FormData(calculateFormEl);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = +value;
    });

    const totalMarks = data.maths + data.english + data.hindi + data.science;
    console.log("totalMarks", totalMarks);

    const percentage = Math.round((totalMarks / maxMarks) * 100);
    console.log("percentage", percentage);

    resultEl.innerText = `You got ${totalMarks} marks out of ${maxMarks}, and your percentage is ${percentage}%`;
};
