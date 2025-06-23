let browserName="Chrome"
function LaunchBrowser(){
    if(browserName=="Chrome")
        console.log("The current browser is Chrome")
else
{
    console.log("The current browser is Firefox")
}
} LaunchBrowser()

let TestType="Regression";
switch(TestType){
    
case "Smoke":

console.log(`The current Test Type is: ${TestType}`)
break;
case "Regression":

console.log(`The current Test Type is: ${TestType}`)
break;
case "Sanity":

console.log(`The current Test Type is: ${TestType}`)
break;
default:
console.log(`The current Test Type is: ${TestType}`)
    break;
}