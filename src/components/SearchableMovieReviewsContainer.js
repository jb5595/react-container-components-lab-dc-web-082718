import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component{
  constructor(){
    super()
    this.state = {
      searchTerm: "",
      reviews: []
    }
  }

  handleSearch = (e) =>{
    e.preventDefault()

    let url = BASE_URL + `${this.state.searchTerm}`
    fetch(url)
    .then(resp => resp.json())
    .then(data => this.setState({reviews: data.results}))
  }

  handleTextInput = (e) =>{
    this.setState({
      searchTerm: e.target.value
    })
  }
  render(){
    return(
      <div className = "searchable-movie-reviews">
        <form onSubmit = {this.handleSearch}>
          <label htmlFor = "searchTerm">Search For Reviews</label>
          <input type = "text" name="searchTerm" onChange = {this.handleTextInput}></input>
          <button type="submit">Submit</button>
        </form>
        <h2> Searchable Movie Reviews</h2>
        <MovieReviews reviews={this.state.reviews} />


      </div>
    )
  }

}


export default SearchableMovieReviewsContainer
