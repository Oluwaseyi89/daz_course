import React, { useRef, useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import '../../styles/videopage.css';
import { AppContext } from '../../App';
import { CourseDetailBreadCrumbs } from '../explore';
import VideoPlayer from './VideoPlayer';
import CoursesAccordion from './CoursesAccordion';

function VideoPage (props) {

    const [activeTab, setActiveTab] = useState('Overview'); // Default tab is "Overview"
    const location = useLocation();

    const {...item} = location.state;
    console.log(item);

    const breadcrumbTitleRef = useRef();

    const {showMenu} = useContext(AppContext)

    

    useEffect(() => {
        const setBreadcrumbTitle = () => {
            if(showMenu) {
                breadcrumbTitleRef.current.style.position = "static";
            } else {
                breadcrumbTitleRef.current.style.position = "fixed";
            }
        }
        setBreadcrumbTitle();
        return () => {}
    },[showMenu]);

    const renderContent = () => {
      switch (activeTab) {
        case 'Overview':
          return (
            <div>
              <p>
                Color is perception. Our eyes see something (the sky, for example), and data sent from our eyes to our brains tells us it’s a certain color (blue). Objects reflect light in different combinations of wavelengths. Our brains pick up on those wavelength combinations and translate them into the phenomenon we call color.
              </p>
              <p>
                Humans see colors in light waves. Mixing light—or the additive color mixing model—allows you to create colors by mixing red, green, and blue light sources of various intensities. The more light you add, the brighter the color mix becomes. If you mix all three colors of light, you get pure, white light.
              </p>
              <span>See more</span>
            </div>
          );
        case 'QnA':
          return <div>No questions have been asked yet.</div>;
        case 'Notes':
          return <div>You have not added any notes yet.</div>;
        case 'Information':
          return <div>Course information will be available soon.</div>;
        default:
          return null;
      }
    };
  
    return (
        <div className='videopage'>
            <div ref={breadcrumbTitleRef} className='bread-crumbs-container'>
                <CourseDetailBreadCrumbs/>
            </div>
            <div className='video-body'>
                <div className='video-body-left'>
                    <div className='video-top'>
                        <VideoPlayer title={item.courseTitle} videoId={item.lessons[0].lessonVideoId}/>                        
                    </div>
                    <div className="video-bottom">
                        <h1>{item.courseTitle}</h1>
                        <div className="tab-header">
                        {['Overview', 'QnA', 'Notes', 'Information'].map((tab) => (
                            <button
                            key={tab}
                            className={activeTab === tab ? 'active' : ''}
                            onClick={() => setActiveTab(tab)}
                            >
                            {tab}
                            </button>
                        ))}
                        </div>
                        <div className="tab-content">{renderContent()}</div>
                    </div>
                </div>
                <div className='video-body-right'>
                    <div className='video-accordion-container'>
                        <h3 className='video-course-content'>Course Content</h3>
                        <CoursesAccordion/>
                    </div>
                </div>
                <div style={{clear: "both"}}></div>
            <div style={{height: "150px"}}></div>
                
            </div>
        </div>
    );

};

export default VideoPage;