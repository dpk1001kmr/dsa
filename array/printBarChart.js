export function printBarChart(array) {
  for (let row = array.length - 1; row >= 0; row--) {
    let str = "";
    for (let col = 0; col < array.length; col++) {
      if (array[col] <= row) {
        str += "  ";
      } else {
        str += "* ";
      }
    }
    console.log(str);
  }
}
