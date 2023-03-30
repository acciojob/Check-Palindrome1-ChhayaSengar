// complete the given function

function palindrome(str){
	// var l = str.length;
 //    for (var i = 0; i < l / 2; i++) {
 //        if (str.charAt(i) !== str.charAt(l - 1 - i)) {
 //            return false;
 //        }
 //    }
 //    return true;


	/* remove special characters, spaces and make lowercase*/
  var newStr= str.replace(/[^0-9a-z]/gi, '').toLowerCase().split("");

  for(var i=0; i < (newStr.length)/2; i++){ 
    if(newStr[i] !== newStr[newStr.length-i-1]){ 
      return false; 
    }  
  }
 return true;
}


// true

}
module.exports = palindrome
