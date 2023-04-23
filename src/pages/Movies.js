import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Row, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const App = () => {

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {

        const address = "https://api.themoviedb.org/3/discover/movie?api_key=082f2526d129a66e53e595b94fce8985&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

        try {

            const res = await axios.get(address);

            setMovies(res.data.results)

        } catch (err) {
            console.log(err)
        };

    };

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <Container>
            <Row>
                <Table>
                    <thead>
                    <tr>
                        <th>상영코드</th>
                        <th>영화제목</th>
                        <th>영화평점</th>
                        <th>누적평점</th>
                    </tr>
                    </thead>
                    {movies && movies.map(m => (
                        <tbody>
                        <tr>
                            <td>{m.id}</td>
                            <td>
                                <Link to={`/movies/${m.id}`}>
                                    {m.title}
                                </Link>
                            </td>
                            <td>{m.vote_average}</td>
                            <td>{m.vote_count}</td>
                        </tr>
                        </tbody>
                    ))}
                </Table>

            </Row>
        </Container>
    );
};

export default App;
