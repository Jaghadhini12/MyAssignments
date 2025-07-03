let str="function"
const strVowels = (str) => {
const Vowels = "aeiouAEIOU"
let count=0;
for(const char of str){
    if(Vowels.includes(char)){
        count++;
}
}return count;

}
console.log(`The given string - ${str}  has the count of Vowels`, +(strVowels(str)))
