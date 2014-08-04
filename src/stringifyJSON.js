// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  //console.log("Should be", JSON.stringify(obj));
  console.log(obj);
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
  	console.log("ARRAY");
  	if(obj.length > 0)
  	{
  		var newArray = obj.slice(0);
      var nextObj = newArray.shift();

      //Do not remove brackets surrounding arrays
      if(nextObj instanceof Array)
      {
  		  toReturn += stringifyJSON(nextObj);
      }
      else
      {
        toReturn += removeOutsideBrackets(stringifyJSON(nextObj));
      }


  		if(obj.length > 1){ toReturn += ",";}
  		//console.log("Recurse upward to: ", obj);
  		toReturn += removeOutsideBrackets(stringifyJSON(newArray));  		
  		//console.log("Recurse upward to: ", obj);
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
