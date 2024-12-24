import React, { useEffect, useState } from 'react'
import axiosInstance from '../api/Api'

export default function Details() {

    const [showdetail, setShowdetail] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, SetError] = useState(false)

    useEffect(() => {
        const fetchdetails = async (Props) => {
            try {
                const repsonse = await axiosInstance.get(`/movie/${Props.movie_id}?language=en-US`)
                setShowdetail(repsonse.data.results);
                setLoading(false);

            } catch (error) {
                SetError(error.message)
                setLoading(false)
            }
        }

        fetchdetails();
    }, []);





    return (
        <>

            <div class="container text-center">
                <div class="row">
                    <div className="col-md-2">
                        <div className="card" style={{ width: "18rem;" }}>
                            <img src="/" className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        Column
                    </div>
                    <div class="col">
                        Column
                    </div>
                </div>
            </div>


            <div className="container text-center">
                <h2 className="my-4 text-start">Popular Movies and Shows</h2>
                <div className="d-flex overflow-auto"
                    style={{ whiteSpace: 'nowrap', gap: '1rem' }}>
                    <div className="col-md-2">
                        <div className="card" style={{ width: "18rem;" }}>
                            <img src="/" className="card-img-top" alt="..." />
                        </div>
                    </div>


                </div>
            </div>



        </>




    )
}
