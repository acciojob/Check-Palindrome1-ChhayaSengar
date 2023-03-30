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
  var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  /* reverse removeChar for comparison*/
  var checkPalindrome = removeChar.split('').reverse().join('');

  /* Check to see if str is a Palindrome*/
   if(removeChar === checkPalindrome){
     return true;
   }else{
     return false;
   }
}


// true

}
module.exports = palindrome
