import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import { imgURL, API_KEY } from '../../constants/constants'

function RowPost(props) {

    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState()
    useEffect(() => {
        axios.get(props.url)
            .then((response) => {
                // console.log(response.data, `${props.title}`)
                setMovies(response.data.results)
            })
    }, [])

    const handelYouTube = (id) => {
        console.log(id, 'ididididididi')
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                console.log(response.data.results[0].key, 'response respone respone response-------------------')
                if (response.data.results) {
                    setUrlId(response.data.results[0].key)
                }
            }).catch((err) => {
                alert('error')
            })
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };


    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                    movies.map((obj) =>
                        <img className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imgURL + obj.backdrop_path}`} alt='posters' onClick={() => {
                            handelYouTube(obj.id)
                        }} />
                    )
                }

            </div>
            {urlId ? <YouTube opts={opts} videoId={urlId} /> : ''}

        </div>
    )
}

export default RowPost
