import React, { useState,useEffect} from 'react';
import $ from 'jquery'
import LoadFilm from './components/LoadFilm';
import LoadPeople from './components/LoadPeople';


const App = () => {

    // const handleLoad = () => {
        
    //     if (isloaded === true) {
    //         setloaded(false);
            
    //     } else if (isloaded === false) {
    //         setloaded(true);
           
            
    //     }
    // }

    // const [loadStatus, setLoadStatus] = useState('none');
    
    const [peopleLoaded, setPeopleLoaded] = useState(false);
    const [people, setPeople] = useState([]);

    const [filmsLoaded, setFilmsLoaded] = useState(false);
    const [films, setFilms] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://ghibliapi.herokuapp.com/people');
            const allPeople = await response.json();
            setPeople(allPeople)
            console.log(allPeople);
        })();
        // (async () => {
        //     const response = await fetch(people.films.url);
        //     const personFilm = await response.json();
        //     setPersonFilm(personFilm)
        //     console.log(personFilm)
        // })();
    }, [peopleLoaded]);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://ghibliapi.herokuapp.com/films');
            const allFilms = await response.json();
            setFilms(allFilms)
            console.log(allFilms);
        })();
    }, [filmsLoaded]);

    const handlePeopleLoad = () => {

    if (peopleLoaded === true) {
        setPeopleLoaded(false);
        
    } else if (peopleLoaded === false) {
        setPeopleLoaded(true);
        setFilmsLoaded(false);
        
    }
}

    const handleFilmLoad = () => {

        if (filmsLoaded === true) {
            setFilmsLoaded(false);
        } else if (filmsLoaded === false) {
            setFilmsLoaded(true);
            setPeopleLoaded(false);
        }
    }


    return (
        <div>

            <div className='welcome'>
                Welcome to the Studio Ghibli Database
            </div>
                
                <div className='btnContainer'>
               
                <button  onClick={handleFilmLoad} className="button" value="LoadFilm">Films</button>

                <button  onClick={handlePeopleLoad} className="button" value="LoadPeople">People</button>

                    {/* <h1><LoadFilm /></h1>
                
                    <h1><LoadPeople /></h1> */}
            </div>
                    <h1>{peopleLoaded && <LoadPeople />}</h1>
                    <h1>{filmsLoaded && <LoadFilm />}</h1>
            </div>
        
    );
};

export default App;