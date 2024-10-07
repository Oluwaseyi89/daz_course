import { courses } from "../states"

export const UseSearch = (searchParam) => {

    let lowerCaseParam = searchParam.toLowerCase();

    const searchWords = lowerCaseParam.split(" ");

    // console.log(searchWords)

    const searchResults = [];
    const courseTitles = []

    //fetching all course titles
    courses.forEach(course => {
        courseTitles.push(course.courseTitle);
    })

    //search by title

    courses.forEach(course => {
        let eachLowerTitle = course.courseTitle.toLowerCase();
        let eachTitle = eachLowerTitle.split(" ");
        searchWords.forEach(word => {
            if(eachTitle.includes(word)) searchResults.push(course);
        })
    });
  


    //search by category

    courses.forEach(course => {
        let eachLowerCategory = course.category.toLowerCase();
        let eachCategory = eachLowerCategory.split(" ");
        searchWords.forEach(word => {
            if(eachCategory.includes(word)) searchResults.push(course);
        })
    });


    //search by subcategory

    courses.forEach(course => {
        let eachLowerSubCategory = course.subCategory.toLowerCase();
        let eachSubCategory = eachLowerSubCategory.split(" ");
        searchWords.forEach(word => {
            if(eachSubCategory.includes(word)) searchResults.push(course);
        })
    });

    //remove duplicates

    function removeDuplicates(arr, key) {
        const seen = new Set();
        return arr.filter((item) => {
          const val = item[key];
          if (seen.has(val)) {
            return false;
          }
          seen.add(val);
          return true;
        });
      }

      const filteredResults = removeDuplicates(searchResults, 'courseTitle');


    return filteredResults;

}