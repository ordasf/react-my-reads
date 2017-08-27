import React from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import Book from './Book';

class SearchBook extends React.Component {

  state = {
    results: []
  }

  searchBooks = (event) => {
    BooksAPI.search(event.target.value, 20).then(data => {
      if (data.error) {
        this.setState({results: []})
      } else {
        this.setState({ results: data })
      }
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" onChange={(event) => this.searchBooks(event)} placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.map((book) => (
              <li>
                <Book bookInfo={book}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook