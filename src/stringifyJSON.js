// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  //console.log("Should be", JSON.stringify(obj));
  var toReturn = '';

  //String Case
  if(typeof obj == 'string' || obj instanceof String)
  {
  	return '"' + obj + '"';
  }

  //Array Case
  if(typeof obj == 'array' || obj instanceof Array)
  {
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

  	return '[' + toReturn + ']';
  }

  if(obj instanceof Object)
  {
    for(var key in obj)
    {
      if(obj.hasOwnProperty(key))
      {
        if(typeof obj[key]  === 'function' || typeof obj[key] === 'undefined')
        {
          //INVALID ENTRIES, ADD NOTHING
        }
        else
        {
          toReturn += '"'+ key + '":' + stringifyJSON(obj[key]) + ',';
        }
      }
    }

    toReturn = toReturn.replace(/,$/, '');;
    return "{" + toReturn + "}";
  }

  //DEFAULT
  return '' + obj;

  function removeOutsideBrackets(string)
  {
  	var returnString = string.replace('[', "");
  	return returnString.replace(/]$/, '');
  }
};
