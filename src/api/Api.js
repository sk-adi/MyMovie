import React from 'react'
import axios from 'axios';


const api_key="ba753669431b7877596cccbfae745a65"
const tokken="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTc1MzY2OTQzMWI3ODc3NTk2Y2NjYmZhZTc0NWE2NSIsIm5iZiI6MTczNDk0MTE4Ny4zMDIsInN1YiI6IjY3NjkxYTAzY2Q1Y2I3ZWQxZDBiMDRhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIqn3w9The-aOCRljNKxG93QD9E44I2VjlHTfGWMuSo"


const axiosInstance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers:{
        Accept:"application/json",
        Authorization:`Bearer ${tokken}`

    }

})

export default axiosInstance

