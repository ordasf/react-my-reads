import React from 'react'
import { Link } from 'react-router-dom'

import Bookshelf from './Bookshelf'

class BookList extends React.Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf name="currentlyReading" bookList={this.props.bookList} filter="currentlyReading"/>
            <Bookshelf name="Want to Read" bookList={this.props.bookList} filter="wantToRead"/>
            <Bookshelf name="Read" bookList={this.props.bookList} filter="read"/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookList