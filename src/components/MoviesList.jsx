import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { css } from 'react-emotion';
import { Card } from 'semantic-ui-react';
import { ClipLoader } from 'react-spinners';


const loaderOverride = css`
    margin-left : 50%;
    margin-top : 18%;
    color : green;
`;

const MoviesList = ({ movies }) => {

    const emptyMessage = (
        <p>There are no movies yet.</p>
    );

    const moviesList = (
        <div>
            
            <ClipLoader className={loaderOverride} sizeUnit={'px'} size={70} color={'#00BCB1'} loading={movies.fetching}/>

            <Card.Group itemsPerRow={4}>
                {movies.error.response ?
                    <h3>Error retrieving data</h3> :
                    movies.movies.map((movie) =>{
                        return <MovieCard key={movie._id} movie={movie} />
                    })
                };
            </Card.Group>
        </div>
    );

    return (
        <div>
            {movies.length === 0 ? emptyMessage : moviesList}
        </div>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.shape({
        movies: PropTypes.array.isRequired
    }).isRequired
};

export default MoviesList

// rfcp