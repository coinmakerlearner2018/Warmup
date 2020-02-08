
// ====================================
// The Odd Integer Warmup
// You have an array of integers. Find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// For Example: [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], answer is 5 since it is the only number that appears an odd number of times.

// ==================================
let arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]

var arrCount = 
                arr
                .filter((a,b) => arr.indexOf(a) === b )
    
for(let dupIndex = 0; dupIndex < arrCount.length; dupIndex++ ){
        
        let count = 0
        
        for(let arrNumber = 0; arrNumber < arr.length; arrNumber++){
                if (arrCount[dupIndex] === arr[arrNumber]){
                    count++       

                }
        }
        if(count % 2 !== 0){
        console.log( `${arrCount[dupIndex]} is ${count}`)
        }
}


    