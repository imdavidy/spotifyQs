function sortByStrings(s, t) {
  // sort string 's' by the order of string 't'('t' not having repeating characters)
  if (typeof s !== 'string' || typeof t !== 'string') {
    return 'Please input a string';
  }
  if (s === '' || t === '') {
    return s;
  } 
  
  s = s.toLowerCase().split('').sort();
  t = t.toLowerCase().split('');
  sSortedArr = [];
  while (s.length) {

    for (let i = 0; i < t.length; i++) {
      while (t[i] <= s[0] && t[i] === s[0]) {
        sSortedArr[i] ? sSortedArr[i] += (s.shift()) : sSortedArr[i] = s.shift();
      }
      
    }
  }
  return sSortedArr.join('');
  
}



/* -------  basic testing --------- */

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
  	console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

assertEqual(sortByStrings('weather', 'therapyw'), 'theeraw', 'test "sortByStrings" function');
assertEqual(sortByStrings('good', 'odg'), 'oodg', 'test "sortByStrings" function');
assertEqual(sortByStrings(1, 'odg'), 'Please input a string', 'test "sortByStrings" function with non-string');