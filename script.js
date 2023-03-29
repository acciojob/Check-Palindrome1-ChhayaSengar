// complete the given function

function palindrome(str){
	var l = str.length;
    for (var i = 0; i < l / 2; i++) {
        if (str.charAt(i) !== str.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}


// true

}
module.exports = palindrome
