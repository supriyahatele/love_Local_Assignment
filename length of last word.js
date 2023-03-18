  let s = "Hello World"
  var lengthOfLastWord = function(s) {
    s = s.trim();
    let count = 0;
    for(let i = s.length-1; i>=0; i--){
        if(s[i] === ' '){
            break;
        }
        else{
            count++;
        }
    }
    return count;
};
console.log(lengthOfLastWord(s))