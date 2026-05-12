function generateReport(name, scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    const average = sum / scores.length;

  let letterGrade;
  if (average >= 90) {
    letterGrade = "A";
  } else if (average >= 80) {
    letterGrade = "B";
  } else if (average >= 70) {
    letterGrade = "C";
  } else if (average >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  console.log(`${name} Avg: ${average.toFixed(1)} Grade: ${letterGrade}`);
}

const studentName = "Sara";
const testScores = [85, 92, 78, 88, 95];

generateReport(studentName, testScores);//Sara Avg: 87.6 Grade: B
