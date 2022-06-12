import React, { useState,useEffect } from 'react';

const LoadPeople = () => {

    // const [buttonText, setBtnText] = useState('People');

    const [isloaded, setloaded] = useState(false);

    const [people, setPeople] = useState([]);

    const [personFilm, setPersonFilm] = useState([])

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
    }, [isloaded]);


    // const handleLoad = () => {
        
    //     // if (loadStatus == 'none' || loadStatus == 'films') {
    //     //     setLoadStatus('people')
    //     //     setloaded(true);
    //     // } else if (loadStatus == 'people') {
    //     //     setLoadStatus('none')
    //     //     setloaded(false)
    //     // }

    //     if (isloaded === true) {
    //         setloaded(false);
    //         // setBtnText("Load People")
    //     } else if (isloaded === false) {
    //         setloaded(true);
    //         // setBtnText("Hide People")
            
    //     }
    // }



    return (
        <main>
       
            <div>
                {/* <button onClick={handleLoad} type="button" value="LoadPeople">{buttonText}</button> */}
                <div className='row justify-content-center mt-5'>
                
                    {/* {peopleLoaded && people.map(person => ( */}
                    {people.map(person => (
                        <div key ={`person-card-${person.id}`}>
                            <div style={{width: "1300px"}} className="card shadow my-2">
                                <div className='card-body'>
                                    <h1 className='card-name'>{person.name}</h1>
                                    <h6 className='card-age'>Age: {person.age}</h6>
                                    <p className='card-gender'>{person.gender}</p>
                                    {/* <p className='card-movie'>{personFilm.title}</p> */}
                                    <p className='card-url'> <a href={person.url} target="_blank" rel='noopener noreferrer'>JSON Data</a></p>
                                    
                                </div>
                            </div>
                        </div>
                            

                    ))}
                </div>
            </div>
       
        </main>
        );
}

export default LoadPeople;