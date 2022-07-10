const sumAll = function(var1, var2) {
    let totalSum;
    if (var1 <= 0 || var2 <= 0 || typeof(var1) !== 'number' || typeof(var2) !== 'number'){
        return 'ERROR'
    } else{
        let numberElements = var1 - var2;
        if (numberElements < 0){
            totalSum = (var1 + var2)*(-numberElements + 1)/2;
        }else{
            totalSum = (var1 + var2)*(numberElements + 1)/2;
        }
    }
    
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
