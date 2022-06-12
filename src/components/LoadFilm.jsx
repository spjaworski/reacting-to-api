import React, { useState,useEffect } from 'react';

const LoadFilm = () => {

    // const [buttonText, setBtnText] = useState('Films');

    const [isloaded, setloaded] = useState(false);

    const [films, setFilms] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://ghibliapi.herokuapp.com/films');
            const allFilms = await response.json();
            setFilms(allFilms)
            console.log(allFilms);
        })();
    }, [isloaded]);

    const handleLoad = () => {

        // if (loadStatus == 'none' || loadStatus == 'people') {
        //     setLoadStatus('films')
        //     setloaded(true);
        // } else if (loadStatus == 'films') {
        //     setLoadStatus('none')
        //     setloaded(false)
        // }
        
        if (isloaded === true) {
            setloaded(false);
            // setBtnText("Load Films")
        } else if (isloaded === false) {
            setloaded(true);
            // setBtnText("Hide Films")
            
        }
    }



    return (
        <main>
       
            <div>
                {/* <button onClick={handleLoad} type="button" value="LoadFilm">{buttonText}</button> */}
                <div className='row justify-content-center mt-5'>
                
                    {films.map(film => (
                        <div key ={`film-card-${film.id}`}>
                            <div style={{width: "1300px"}} className="card shadow my-2">
                                <div className='card-body'>
                                    <h1 className='card-title'>{film.title}</h1>
                                    <h6 className='card-first-title text-muted'>Original Title: {film.original_title_romanised}</h6>
                                    <p className='card-desc'>{film.description}</p>
                                    <img className='banner' src={film.movie_banner} alt= 'Movie Banner'></img>
                                </div>
                            </div>
                        </div>
                            

                    ))}
                </div>
            </div>
       
        </main>
        );
}

export default LoadFilm;