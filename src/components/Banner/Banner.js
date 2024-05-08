import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY, imgURL } from '../../constants/constants'
import './Banner.css'
function Banner() {

    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                const num = Math.floor(Math.random() * 10)
                setMovie(response.data.results[num])
            })
    }, [])
    return (
        <div
            style={{ backgroundImage: `url(${movie ? imgURL + movie.backdrop_path : ''})` }}
            className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.original_title : ""}</h1>
                <div className='bannerButton'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ''}</h1>
            </div>
            <div className='fadeBottom'></div>
        </div>
    )
}

export default Banner
