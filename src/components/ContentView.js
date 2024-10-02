import React from 'react';

import '../styles/contentview.css';

function ContentView ({children}) {

    return (
        <div className='contentview'>{children}</div>
    );

};

export default ContentView