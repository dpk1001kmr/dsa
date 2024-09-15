export function grading(n) {
  if (n > 90) {
    console.log("Excellent");
  } else if (n > 80) {
    console.log("Very good");
  } else if (n > 70) {
    console.log("Good");
  } else if (n > 60) {
    console.log("Pass");
  } else {
    console.log("Looser");
  }
}
