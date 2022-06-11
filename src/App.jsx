import React, { useState,useEffect} from 'react';
import $ from 'jquery'
import LoadFilm from './components/LoadFilm';
import LoadPeople from './components/LoadPeople';


const App = () => {

    const [loadStatus, setLoadStatus] = useState('none');
    

    return (
        <div>
            <div className='btnContainer'>
               
                    <h1><LoadFilm /></h1>
                
                    <h1><LoadPeople /></h1>
                
            
            </div>
        </div>
        
    );
};

export default App;