let Input="Hello good World!"
let String = Input.split(' ')
let newString = String[String.length-1]
let Characters = console.log(newString.length)

let Input1=" fly   me to the moon "
let TrimmedString= Input1.trim()
console.log(TrimmedString)
let String1 = TrimmedString.split(' ')
let newString1= String1[String1.length-1]
console.log(newString1)
let Characters1 = console.log(newString1.length)

function Anagram(ana1,ana2){
    
    if (ana1.length!=ana2.length){
    console.log("This is not an Anagram")}
    const Sortedana1=ana1.split('').sort().join()
    const Sortedana2=ana2.split('').sort().join()

    if(Sortedana1===Sortedana2){
        console.log("This is an Anagram")
    }
    else{
        console.log("This is not an Anagram")
    }
} Anagram('Hellow','silent')