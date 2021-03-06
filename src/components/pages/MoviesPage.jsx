import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import MoviesList from '../MoviesList';

import { fetchMovies } from '../../actions/movies';

class MoviesPage extends Component {

    static propTypes = {
        movies: PropTypes.shape({
            movies : PropTypes.array.isRequired
        }).isRequired
    };

    componentDidMount = () => {
      this.props.fetchMovies();
    }
    

    render() {
        return (
            <div>
                <h3>Movies List</h3>
                <MoviesList movies = {this.props.movies} />
            </div>
        )
    }
}

const mapStateToProps = ({ movies }) => {
    return {
        movies
    }
}

const mapDispatchToProps = {
    fetchMovies
};

export default connect(mapStateToProps,mapDispatchToProps)(MoviesPage);
