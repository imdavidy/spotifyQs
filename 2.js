function decodeString(s) {
  // use recursion for decodeString nested in the string
  
  let matchStr = s.match(/\d+[\[]\w*[\]]/) ? s.match(/\d+[\[]\w*[\]]/)[0] : '';
  let repeatCount = matchStr ? +(matchStr.match(/\d+/)[0]) : 0;
  let repeatStr = matchStr ? matchStr.match(/\w+(?=\])/)[0] : '';
  let result = '';
  
  if (!matchStr) { // exit condition
    return s;
  } else {
    for (let i = 0; i < repeatCount; i++) {
      result += repeatStr;
    }
    s = s.replace(matchStr, result)
    s = decodeString(s); // decodeString()
  }
  return s;
}


/* -------  basic testing --------- */

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

assertEqual(decodeString('4[ab]'), 'abababab', 'test "decodeString" function for single decode');
assertEqual(decodeString('aaa'), 'aaa', 'test "decodeString" function for non-code');
assertEqual(decodeString('2[a3[b2[c]]]'), 'abccbccbccabccbccbcc', 'test "decodeString" function for nested decode');