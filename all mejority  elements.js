let nums = [3,2,3]
var majorityElement = function(nums) {
    let map=new Map() 
    let arr=[] 
    for(let i of nums){
        map.set(i,map.get(i)+1||1)
    }
    for(let [key,value] of map){
        if(value>nums.length/3){
            arr.push(key)
        }
    }
    return arr
  };
  console.log(majorityElement(nums))