recursiveArray = [[1], 2, [3, [4]], [[5], [[6, [7]]]]];

spreadArray = arr =>
    arr.reduce((accArray, currentVal) => {
        return accArray.concat(
            Array.isArray(currentVal) ? spreadArray(currentVal) : currentVal
        );
    }, []);

console.log(spreadArray(recursiveArray)); // O/P => [1, 2, 3, 4, 5, 6, 7]
