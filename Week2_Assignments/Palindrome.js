let Input="Madam"
function PalindromeCheck(){
    let reversed=""
    for(i=Input.length-1;i>=0;i--)
        {
            reversed=reversed+Input[i];
        
  } console.log(reversed)
if (Input.toLowerCase===reversed.toLowerCase){
    console.log("The given string " +Input+ " is a Plaindrome")
}
else
console.log("The given string is not a Palindrome")
        }

PalindromeCheck()

