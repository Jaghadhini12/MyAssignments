function Intersection(){
    let arr1= [1,2,3,4,5,6]
    let arr2=[2,7,8,9,1,4]
    arr3=[];
    

    for(let i=0;i<arr1.length;i++)
    {
        for(let j=0;j<arr2.length;j++)
        {
            if(arr1[i]===arr2[j])
            {
                arr3.push(arr1[i]);
                break;
                        }

        }
    }
    console.log("Intersection of Arrays:", arr3)
}
Intersection()