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
            <Bookshelf
              name="Currently Reading"
              bookList={this.props.shelves.currentlyReading}
              onChangeBookShelf={this.props.onChangeBookShelf}
            />
            <Bookshelf
              name="Want to Read"
              bookList={this.props.shelves.wantToRead}
              onChangeBookShelf={this.props.onChangeBookShelf}
            />
            <Bookshelf
              name="Read"
              bookList={this.props.shelves.read}
              onChangeBookShelf={this.props.onChangeBookShelf}
            />
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