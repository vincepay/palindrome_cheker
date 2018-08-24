var startBtn = document.getElementById("startBtn")
// debugger
startBtn.addEventListener("click", palindrome)

function palindrome() {
  var word = prompt("Enter a word:").toLowerCase();
  len = word.length;

  palindrome = true;
  i = 0;
  while (palindrome && i < Math.floor(len/2)) {
    i += 1
    if (word[i-1] !== word[len-i]) {
      palindrome = false
    }
  }
  if (palindrome) {
    alert("It is a palindrome!")
  } else {
    alert("It is NOT a palindrome!")
  }
}