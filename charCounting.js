function countLetters(inputString) {

  var shortString = removeSpaces(inputString);

  var letterObj = {}

  for (var i = 0; i < shortString.length; i++) {

      if (!letterObj[shortString[i]]) {
        letterObj[shortString[i]] = 1;
      }
      else {
        letterObj[shortString[i]]++;
      }
  }

  return letterObj;
}

function removeSpaces(input) {
  var output = "";

  for (var i = 0; i < input.length; i++) {

    if (input[i] !== " ") output = output + input[i];
  }

  return output;
}

console.log(countLetters("Lighthouse in the house"));