// complete the given function

function palindrome(str){
	const palindrome = (str) => {
  const check = str.split('').reverse().join('')

  return str === check;
}


// true

}
module.exports = palindrome
