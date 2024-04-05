/*
    Example 1:
        Input str1 = "ahmadbashir"
        Result = m
*/

function getFirstNotRepeatedCharacter(str) {
  if (!str || str == null || str.length == 0) return -1;

  let charIndex;
  let ignoredChars = []; // cost memory
  for (let i = 0; i < str.length; i++) {
    charIndex = i;
    if (ignoredChars.find((e) => e == str[charIndex])) continue;
    if (i + 1 == str.length) return str[i];
    for (let j = 0; j < str.length; j++) {
      if (j == charIndex) continue;
      if (str[j] == str[charIndex]) {
        ignoredChars.push(str[charIndex]);
        break;
      }
      if (j == str.length - 1) return str[charIndex];
    }
  }

  return -1;
}

function logTimeWithFunc(str) {
  console.time();
  console.timeLog("default", "start time");
  let res = getFirstNotRepeatedCharacter(str);
  console.timeEnd("default");
  return res;
}
