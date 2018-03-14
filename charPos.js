function indexLetters(inputString) {

  var shortString = removeSpaces(inputString);   // removes spaces and saved to variable

  var letterObj = {}  //ls blank object for writing to

  for (var i = 0; i < shortString.length; i++) {

      if (!letterObj[shortString[i]]) { // if a key for this letter doesn't exit
        letterObj[shortString[i]] = [i]; // create the key and assign its value as an array with an index
      }
      else {
        letterObj[shortString[i]].push(i); // push new index on end of array
      }
  }

  return letterObj;
}

function removeSpaces(input) { //removes spaces from value put into indexLetters
  var output = "";

  for (var i = 0; i < input.length; i++) {

    if (input[i] !== " ") output = output + input[i];
  }

  return output;
}

console.log(indexLetters("Lighthouse in the house"));
