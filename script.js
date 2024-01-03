const userInput = document.querySelector("#word");
const btn = document.querySelector("button");
const res=document.querySelector("#res")

function palindrome(userInput) {
  const cleanStr = userInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let revStr = "";
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    revStr += cleanStr[i];
  }

  return cleanStr === revStr;
}

btn.addEventListener("click", () => {
  result()
  const inputText = userInput.value;

  if (inputText === "") {
    alert("Please enter a word or phrase to check!");
    return;
  } 
        
  const isPalindrome = palindrome(inputText);

  if (isPalindrome) {
    result(`${inputText} is Palindrome`)
  } else {
    result(`${inputText} is not a Palindrome`)
  }

});

function result(message) {
  res.innerText = message;
}
