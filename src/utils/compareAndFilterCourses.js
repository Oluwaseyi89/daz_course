export const compareAndFilterCourses = (largeArray, smallArray, objectKey) => {
    
    let filterResult = [];
    
    for (let i = 0; i < largeArray.length; i++) {
        const element = largeArray[i];
        let isRegistered = false
        smallArray.forEach(course => {
            if(course[objectKey] == element[objectKey] ) isRegistered = true
        });
        if(!isRegistered) filterResult.push(element)
    }   

    return filterResult;
}

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