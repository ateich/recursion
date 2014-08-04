// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  console.log("Should be", JSON.stringify(obj));

  var toReturn = '';

  //String Case
  if(typeof obj == 'string' || obj instanceof String)
  {
  	console.log("Is ", '"' + obj + '"');
	return '"' + obj + '"';
  }

  //Array Case
  if(typeof obj == 'array' || obj instanceof Array)
  {
  	if(obj.length > 0)
  	{
  		toReturn += removeOutsideBrackets(stringifyJSON(obj.pop()));
  		toReturn += removeOutsideBrackets(stringifyJSON(obj));
  	}

  	console.log("Is ", '[' + toReturn + ']');
  	return '[' + toReturn + ']';
  }

  //DEFAULT
  console.log("Is ", '' + obj);
  return '' + obj;

  function removeOutsideBrackets(string)
  {
  	var returnString = string.replace('[', "");
  	return returnString.replace(/]$/, '');
  }
};
