import React from 'react'

import ShelfChanger from './ShelfChanger'

class Book extends React.Component {

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${this.props.bookInfo.imageLinks.thumbnail})` }}>
          </div>
          <ShelfChanger bookInfo={this.props.bookInfo} onChangeBookShelf={this.props.onChangeBookShelf}/>
        </div>
        <div className="book-title">{this.props.bookInfo.title}</div>
        <div className="book-authors">{this.props.bookInfo.authors}</div>
      </div>
    )
  }
}

export default Book