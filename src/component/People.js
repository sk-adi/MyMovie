import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/Api';


export default function People() {
    const [movies, setMovies] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [error, SetError] = useState(null);

    useEffect(() => {
        const fetchtheMovies = async () => {
            try {
                const repsonse = await axiosInstance.get("/person/popular?language=en-US&page=1")
                setMovies(repsonse.data.results);
                SetLoading(false);

            } catch (error) {
                SetError(error.message)
                SetLoading(false)
            }
        }

        fetchtheMovies();
    }, []);

    return (
        <div className="container text-center">
            <h2 className="my-4 text-start">Popular Movies and Shows</h2>
            <div className="d-flex overflow-auto"
            style={{whiteSpace:'nowrap',gap:'1rem'}}>
                {movies.map((movie) => (
                    <div className="col-md-2">
                        <div className="card" style={{ width: "18rem;"}}>
                            <img src={`https://image.tmdb.org/t/p/w200/${movie.profile_path}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title fs-6">{movie.title ||movie.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

