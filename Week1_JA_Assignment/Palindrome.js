let Input="Madam"
function Palindrome(){
     let Reversed=""
for(i=Input.length-1;i>=0;i--){
   
    Reversed=Reversed+Input[i]
    
}
console.log("The Reversed string is " +Reversed)

if (Input.toLowerCase===Reversed.toLowerCase){
    console.log("The given string " +Input+ " is a Palindrome")
}
else
console.log("The given string is not a Palindrome")
        }

Palindrome()

    