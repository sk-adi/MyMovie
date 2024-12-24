import React, { useEffect, useState } from 'react'
import axiosInstance from '../api/Api'

export default function Trending() {

    const [movies, setMovies] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [error, SetError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const repsonse = await axiosInstance.get("trending/all/day")
                setMovies(repsonse.data.results);
                SetLoading(false);

            } catch (error) {
                SetError(error.message)
                SetLoading(false)
            }
        }

        fetchMovies();
    }, []);

    return (
        <>
            <div className="container text-center">
                <h2 className="my-4 text-start">Today's Trending Movies and Shows</h2>
                <div className="d-flex overflow-auto"
                    style={{ whiteSpace: 'nowrap', gap: '1rem' }}>
                    {movies.map((movie) => (
                        <div className="col-md-2">
                            <div className="card" style={{ width: "18rem;" }}>
                                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fs-6">{movie.title || movie.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            
        </>
    )
}
