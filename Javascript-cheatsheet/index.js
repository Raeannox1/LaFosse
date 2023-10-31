const countTarget = function (target, arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return{
        success: count > 0, count
    }
}
console.log(countTarget([1,2,3,4,2,1,5,2,5], 3)); // true
