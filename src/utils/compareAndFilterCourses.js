export const compareAndFilterCourses = (largeArray, smallArray, objectKey) => {
    // Create a Set of keys from the smallArray for fast lookup
    const smallArrayKeys = new Set(smallArray.map(item => item[objectKey]));
    
    // Filter largeArray, keeping only items whose key is not in the smallArray Set
    return largeArray.filter(item => !smallArrayKeys.has(item[objectKey]));
};

// export const compareAndReturnSimilarArray = (largeArray, smallArray, objectKey) => {
//     // Create a Set of keys from the smallArray for fast lookup
//     const smallArrayKeys = new Set(smallArray.map(item => item[objectKey]));
    
//     // Filter largeArray, keeping only items whose key is in the smallArray Set
//     return largeArray.filter(item => smallArrayKeys.has(item[objectKey]));
// };



export const compareAndReturnSimilarArray = (largeArray, smallArray, objectKey) => {
    let filterResult = [];
    
    for (let i = 0; i < largeArray.length; i++) {
        const element = largeArray[i];
        let isSimilar = false;
        smallArray.forEach(course => {
            if(course[objectKey] == element[objectKey] ) isSimilar = true;
        });
        if(isSimilar) filterResult.push(element)
    }   

    return filterResult;
}


// export const compareAndFilterCourses = (largeArray, smallArray, objectKey) => {
    
//     let filterResult = [];
    
//     for (let i = 0; i < largeArray.length; i++) {
//         const element = largeArray[i];
//         let isRegistered = false;
//         smallArray.forEach(course => {
//             if(course[objectKey] == element[objectKey] ) isRegistered = true
//         });
//         if(!isRegistered) filterResult.push(element)
//     }   

//     return filterResult;
// }