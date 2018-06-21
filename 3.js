function changePossibilities(amount, numCollection) {
    if (amount === 0) return 1;
    if (amount < 0) return 0;
    if (numCollection.length - 1 < 0 && amount > 0) return 0;
    
    return changePossibilities(amount - numCollection[numCollection.length - 1], numCollection) + changePossibilities(amount, numCollection.slice(0, numCollection.length - 1));
}
//0x00A2 cent hex code (String.fromCharCode(0x00A2))
/* -------  basic testing --------- */

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

assertEqual(changePossibilities(4, [1,2,3]), 4, 'test "changePossibilities" function');
assertEqual(changePossibilities(6, [1,2,3]), 7, 'test "changePossibilities" function');
assertEqual(changePossibilities(8, [2,4]), 3, 'test "changePossibilities" function');