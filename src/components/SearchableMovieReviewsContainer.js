import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'WGPM8SzPPAu7QDFbae7cwHghAGHKHsGb';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSearchInputChange = event =>
        this.setState({searchTerm: event.target.value});

    handleSubmit = event => {
        event.preventDefault();

        fetch(URL)
        .then(resp => resp.json())
        .then(movieSearch => this.setState({reviews: movieSearch.results}))
    }

    render () {
        return (
            <div className="searchable-movie-review">
                <form onSubmit={this.handleSubmit}>
                    <input id="search-input" type="text" onChange={this.handleSearchInputChange} />
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}

export default SearchableMovieReviewContainer