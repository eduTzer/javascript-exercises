const removeFromArray = function(array, ...removeElement) {
    let removeArray = [...removeElement];
    for (let i = 0; i < removeArray.length; i++){
        let removeVar = removeArray[i];
        for (let j = 0; j < array.length; j++){
            if (removeVar === array[j]){
                array.splice(j, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
