import React from 'react'

import Book from './Book'

class Bookshelf extends React.Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.bookList.map(book => (
              <li key={book.id}>
                <Book bookInfo={book} onChangeBookShelf={this.props.onChangeBookShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf