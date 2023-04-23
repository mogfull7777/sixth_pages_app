import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import movies from "./Movies";

const MoviesDetail = () => {

    const { moviesid } = useParams()

    const [Movies, setMovies] = useState({});

    const getMoviesInfo = async () => {

        const address = `https://api.themoviedb.org/3/movie/${moviesid}?api_key=082f2526d129a66e53e595b94fce8985&language=ko-KR`;

        try {

            const moviesData = await axios.get(address)
            setMovies(moviesData.data)

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getMoviesInfo()
    }, [])

    return (
        <Container>
            <Row>
                <h1>{moviesid}</h1>
                <h2>{Movies.original_title}</h2>
                <h3>{Movies.overview}</h3>
            </Row>
        </Container>
    );
};

export default MoviesDetail;