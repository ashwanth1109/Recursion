recursiveArray = [[1], 2, [3, [4]], [[5], [[6, [7]]]]];
recursiveArray2 = [[1], 2, [3, [4]], [[5], [[6, [8]]]]];

checkFor7 = arr => {
    for (const element of arr) {
        if (Array.isArray(element)) {
            if (checkFor7(element)) {
                return true;
            }
        } else if (element === 7) {
            return true;
        }
    }
    return false;
};

console.log(checkFor7(recursiveArray)); // true
console.log(checkFor7(recursiveArray2)); // false
