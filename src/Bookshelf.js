import React from 'react'

import Book from './Book'

class Bookshelf extends React.Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.bookList.filter(book => book.shelf === this.props.filter).map(book => (
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

export default Bookshelf