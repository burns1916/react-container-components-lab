import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'WGPM8SzPPAu7QDFbae7cwHghAGHKHsGb';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    render () {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

    componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(movieData => this.setState({reviews: movieData.results}))
    }

}

export default LatestMovieReviewContainer