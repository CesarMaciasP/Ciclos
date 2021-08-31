function getFactorial(number){
  
  let result = 1
  
  for(let i = number; i >= 1; i--){
  	result *= i 
  }
  	return result
}

function calculateE(limit){
  
  let sum = 1
  
	for(let i = limit; i >= 1; i--){
 	 sum += (1/getFactorial(i))
   
	}
  
  return sum

}
  
function calculateS(limit){
  
  let sum = 4
  let p = 1
  
  for(let i = 3; i <= limit; i += 2){
    
   if(p % 2 == 1){
 	 	sum -= (4/i)
 	 	p = 1	
 	 }else if(p % 2 == 0){
  	 sum += (4/i)
  	 p = 0 
   } 
    
    p++
  }
  
  return sum
    
}
  
console.log("E = " + calculateE(5)) 
console.log("S = " + calculateS(7))