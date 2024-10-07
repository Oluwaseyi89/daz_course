import React, {useState} from 'react';

import '../../styles/coursesaccordion.css';

function CoursesAccordion (props) {

    const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    { title: 'Introduction', lessons: [] },
    {
      title: 'Color Theory',
      lessons: [
        { title: 'Find combine a Color Palette', duration: '05:32' },
        { title: 'How to Combine a Color Palette', duration: '07:51' },
        { title: 'Tools for designing with color resources', duration: '03:16' },
      ],
    },
    { title: 'Typography', lessons: [] },
    { title: 'User Interface Design', lessons: [] },
    { title: 'User Experience Design', lessons: [] },
    { title: 'Designing for iOS and Android', lessons: [] },
  ];

  return (
    <div className="coursesaccordion">
      {sections.map((section, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-header" onClick={() => toggleSection(index)}>
            <h3>{section.title}</h3>
            <span>{activeIndex === index ? '▲' : '▼'}</span>
          </div>
          {activeIndex === index && section.lessons.length > 0 && (
            <div className="accordion-content">
              {section.lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="lesson-item">
                  <span className="lesson-title">{lesson.title}</span>
                  <span className="lesson-duration">{lesson.duration}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

};

export default CoursesAccordion