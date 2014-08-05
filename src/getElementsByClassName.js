// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  
  console.log(document.getElementsByClassName(className));

  var children = document.body.childNodes;
  var matchingNodes = new Array();

  if(hasClasses(className, document.body))
  {
  	matchingNodes.push(document.body);
  }

  for(var i=0; i<children.length; i++)
  {
  	var result = getElementsByClassNameInNode(className, children.item(i));
  	if(result)
  	{
  		matchingNodes.push(result);
  	}
  }
  console.log(matchingNodes);
  return matchingNodes;

  function hasClasses(className, node)
  {
  	//Check if className contains multiple classes
  	var classesArray = className.split(" ");

  	//Check if node matches classes
  	var nodeClassesArray = node.classList;

  	for(var i=0; i<classesArray.length; i++)
  	{
  		var containsClassI = false;
  		for(var j=0; j<nodeClassesArray.length; j++)
  		{
  			if(classesArray[i] == nodeClassesArray[j])
  			{
  				containsClassI = true;
  				break;
  			}
  		}
  		if(!containsClassI)
  		{
  			return false;
  		}
  	}

  	return true;
  }

  function getElementsByClassNameInNode(className, node)
  {
  	//Element
  	if(node.nodeType == 1)
  	{
  		console.log("Element: ", node);
  		//Check if Element has Classes
  		if(hasClasses(className, node))
  		{
  			return node;
  		}
  		else
  		{
  			return false;
  		}
  	}  	
  }
};
