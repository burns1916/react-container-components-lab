// Code MovieReviews Here
import React, { Component } from 'react';

const Review = ({byline, headline, summary_short}) => {
    return(
        <div className="review">
            <ul>
                <h3>{headline}</h3>
                <h4>By: {byline}</h4>
                <p>{summary_short}</p>
            </ul>
        </div>
    )
}

const MovieReview = ({reviews}) => (
    <div className="review-list">
        {reviews.map(Review)}
    </div>
)


export default MovieReview
