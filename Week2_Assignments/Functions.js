let Name="Jaghadhini"

function UserProfile(){
console.log("Hello " +Name)
}

UserProfile()


let  Multiple=a=>2*a
    console.log(Multiple(5))

console.log("Testing Anonymous Function")

setTimeout(function(){
console.log("This message is set to print after 2 seconds")
},2000)

console.log("This message is printed before waiting for 2 seconds")

function getUserData(callback){
    setTimeout(function(){
        console.log("This message is set to print after 3 seconds")
    },3000)
    callback
}
 function getUserDetails(){
    console.log("User name is Jaghadhini and User age is 25")    
}
getUserData(getUserDetails())
