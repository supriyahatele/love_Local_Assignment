let nums = [1,3,-1,-3,5,3,6,7], k = 3
var maxslidingWindow = function (a, k) {
    let q = []
    let res = []
    for (let i = 0; i < a.length; i++) {
        while (q.length - 1 >= 0 && a[i] > q[q.length - 1]) q.pop();
        q.push(a[i])
        const j = i + 1 - k
        if (j >= 0) {
            res.push(q[0]);
            if (q[0] === a[j]) q.shift()
        }
        
    }
    return res
}
console.log(maxslidingWindow(nums,k))