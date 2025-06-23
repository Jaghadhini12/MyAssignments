let Grade=15;
switch(true){
    case (Grade>85 && Grade<=100):
        {
           
            console.log(`The Student's Grade is A-Grade`)
        break;
        }
        case (Grade>=70 && Grade<=84):
        {
            
            console.log(`The Student's Grade is B-Grade`)
        break;
        }
        case (Grade<=69 && Grade>=50):
        {
            
            console.log(`The Student's Grade is C-Grade`)
        break;
        }
        case (Grade>40 && Grade<=49):
        {
            
            console.log(`The Student's Grade is D-Grade`)
        break;
        }
        default:
        console.log("The student has failed")}
console.log(Grade)
