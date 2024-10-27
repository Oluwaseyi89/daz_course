import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import '../../styles/mylearning.css';
import { AppContext } from '../../App';
import CourseProgressCard from './CourseProgressCard';
import { MyProgress } from '../dashboard';

function MyLearning () {
  const { appState, showMenu, userMenuVisible } = useContext(AppContext);
  const { courseLearning } = appState;
  const [activeId, setActiveId] = useState(1);

  const [tabOptions, setTabOptions] = useState([
    { id: 1, title: "All Courses", amount: 0, isActive: true },
    { id: 2, title: "In Progress", amount: 0, isActive: false },
    { id: 3, title: "Completed", amount: 0, isActive: false }
  ]);

  const learningTitleRef = useRef();

  useEffect(() => {
    const setInstructorPageTitle = () => {
      if (showMenu) {
        learningTitleRef.current.style.position = "static";
      } else if(!showMenu) {
        learningTitleRef.current.style.position = "fixed";
      }

    
    };
    setInstructorPageTitle();

    // return () => {}
  }, [showMenu]);

  useEffect(() => {
    const setInstructorPageTitle =  () => {
      

      if(userMenuVisible) {
        learningTitleRef.current.style.position = "static";
      } else {
        learningTitleRef.current.style.position = "fixed";
      }
    };
    setInstructorPageTitle();

    // return () => {}
  }, [userMenuVisible]);

  const handleTabClick = (id) => {
    let modifiedTabs = tabOptions.map(tab => ({
      ...tab,
      isActive: tab.id === id
    }));

    setTabOptions(modifiedTabs);
    setActiveId(id);
  };

  console.log(activeId);

  const setNumbersOfCourses = useCallback(() => {
    let numCompleted = 0;
    let numInprogress = 0;
    let numOfAll = courseLearning.length;

    courseLearning.forEach(course => {
      let containsIncompleted = course.lessons.some(lesson => !lesson.isCompleted);
      if (containsIncompleted) numInprogress++;
      else numCompleted++;
    });

    setTabOptions(tabOptions.map(tab => {
      if (tab.id === 1) return { ...tab, amount: numOfAll };
      if (tab.id === 2) return { ...tab, amount: numInprogress };
      if (tab.id === 3) return { ...tab, amount: numCompleted };
      return tab;
    }));
  }, [courseLearning, tabOptions]);

  useEffect(() => {
    setNumbersOfCourses();
  }, [courseLearning]);

  const renderCourses = () => {
    return courseLearning
      .filter(item => {
        if (activeId === 1) return true; // All courses
        const containsIncomplete = item.lessons.some(lesson => !lesson.isCompleted);
        return activeId === 2 ? containsIncomplete : !containsIncomplete; // In Progress or Completed
      })
      .map(item => {
        const totalCompleted = item.lessons.filter(lesson => lesson.isCompleted).length;
        return (
          <CourseProgressCard
            key={item.courseTitle}
            item={item}
            image={item.courseImage}
            title={item.courseTitle}
            subtitle={item.currentLesson}
            totalCompleted={totalCompleted}
            totalLessons={item.lessons.length}
          />
        );
      });
  };

  return (
    <div className='mylearning'>
      <div ref={learningTitleRef} className='my-learning-title'>My Learning</div>
      <div className='learning-heading-tabs'>
        {
          tabOptions.map(tab => (
            <span
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              style={tab.isActive ? { fontFamily: "Mulish Bold",  boxShadow: "1px 1px 2px 1px gray" } : { fontFamily: "Mulish" }}
            >
              {tab.title} ({tab.amount})
            </span>
          ))
        }
      </div>
      <div className='my-learning-bottom'>
        <div className='learning-bottom-left'>
          {renderCourses()}
        </div>
        <div className='learning-bottom-right'>
          <MyProgress />
        </div>
      </div>
    </div>
  );
}

export default MyLearning;




















// import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';

// import '../../styles/mylearning.css';
// import { AppContext } from '../../App';
// import CourseProgressCard from './CourseProgressCard';
// import { MyProgress } from '../dashboard';


// function MyLearning (props) {

//     const {appState, showMenu} = useContext(AppContext);
//     const { courseLearning }= appState;
//     const [activeId, setActiveId] = useState(1);

//     const [tabOptions, setTabOptions] = useState([
//         {id: 1, title: "All Courses", amount: 0, isActive: true},
//         {id: 2, title: "In Progress", amount: 0, isActive: false},
//         {id: 3, title: "Completed", amount: 0, isActive: false}
//     ]);

//     const learningTitleRef = useRef();

//     useEffect(() => {
//         const setIntructorPageTitle = () => {
//             if(showMenu) {
//                 learningTitleRef.current.style.position = "static";
//             } else {
//                 learningTitleRef.current.style.position = "fixed";
//             }
//         }
//         setIntructorPageTitle();
//         return () => {}
//     },[showMenu]);

//     const findActiveTabId = useCallback(() => {
    
//         let activeTab = tabOptions.find(tab => tab.isActive === true);
//         return activeTab.id;
//     },[tabOptions]);

//     console.log(courseLearning)



//     const normalTabStyle = {
//         fontFamily: "Mulish"
//     }

//     const boldTabStyle = {
//         fontFamily: "Mulish Bold",
//         borderBottom: "solid var(--active-nav-btn-color) 1px" ,
//         boxShadow: "1px 1px 2px 1px gray"
//     }

//     const handleTabClick = (id) => {
//         let modifiedTabs = tabOptions.map(tab => {
//             if(tab.id === id) tab.isActive = true;
//             else tab.isActive = false;
//             return {...tab};
//         });

//         setTabOptions(modifiedTabs);
//     }

//     const setNumbersOfCourses = useCallback(() => {
//         let numCompleted = 0;
//         let numInprogress = 0;
//         let numOfAll = courseLearning.length;

//         courseLearning.forEach(course => {
//             let containsIncompleted = course.lessons.some(lesson => lesson.isCompleted === false);
//             if(containsIncompleted) numInprogress++;
//             if(!containsIncompleted) numCompleted++;
//         });

//        let newTabOptions = tabOptions.map(tab => {
//         if(tab.id === 1) return {...tab, amount: numOfAll};
//         else if(tab.id === 2) return {...tab, amount: numInprogress};
//         else if(tab.id === 3) return {...tab, amount: numCompleted};
//         else return {...tab}
//        });

//        setTabOptions(newTabOptions);


//     },[courseLearning, tabOptions, setTabOptions]);

//     useEffect(() => {   
//         setNumbersOfCourses();
//         return () => {}
//     },[]);

   
    

//     useEffect(() => {
//         let actId = findActiveTabId();
//         setActiveId(actId);
//         return () => {}
//     },[findActiveTabId]);

//     return (
//         <div className='mylearning'>
//             <div ref={learningTitleRef} className='my-learning-title'>My Learning</div>
//             <div className='learning-heading-tabs'>
//                 {
//                     tabOptions.map(tab => {
//                         return (
//                             <span onClick={() => handleTabClick(tab.id)} style={tab.isActive ? boldTabStyle : normalTabStyle} >{tab.title} ({tab.amount})</span>
//                         )
//                     })
//                 }
               
//             </div>
//             <div className='my-learning-bottom'>
//                 <div className='learning-bottom-left'>
                   
//                     {
//                         activeId === 1 ? (
//                             courseLearning.map(item => {
//                                 const totalCompleted = item.lessons.filter(lesson => lesson.isCompleted);
//                                 return(

//                                     <CourseProgressCard key={item.courseTitle} item={item} image={item.courseImage} title={item.courseTitle} subtitle={item.currentLesson} totalCompleted={totalCompleted.length} totalLessons={item.lessons.length}/>
//                                 ) 

//                             })
//                         ) : (
//                             activeId === 2 ? (
//                                 courseLearning.map(item => {

//                                     let containsIncompleted = item.lessons.some(lesson => lesson.isCompleted === false);
//                                     if(containsIncompleted) {
//                                         const totalCompleted = item.lessons.filter(lesson => lesson.isCompleted);
//                                 return(

//                                     <CourseProgressCard key={item.courseTitle} item={item} image={item.courseImage} title={item.courseTitle} subtitle={item.currentLesson} totalCompleted={totalCompleted.length} totalLessons={item.lessons.length}/>
//                                 ) 
//                                     }
//                                     return null;
                                    
//                                 })
//                             ): (
//                                 activeId === 3 ? (
//                                     courseLearning.map(item => {
//                                         let containsIncompleted = item.lessons.some(lesson => lesson.isCompleted === false);
//                                         if(!containsIncompleted) {
//                                             const totalCompleted = item.lessons.filter(lesson => lesson.isCompleted);
//                                     return(
    
//                                         <CourseProgressCard key={item.courseTitle} item={item} image={item.courseImage} title={item.courseTitle} subtitle={item.currentLesson} totalCompleted={totalCompleted.length} totalLessons={item.lessons.length}/>
//                                     ) 
//                                         }
//                                         return null;
                                        
//                                     })
//                                 ): (() => <>0</>)
//                             )
//                         )
//                     }
                  
//                 </div>
//                 <div className='learning-bottom-right'>
//                     <MyProgress/>
//                 </div>
//             </div>
            
//         </div>
//     );

// };

// export default MyLearning
