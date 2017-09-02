import React from 'react'

class ShelfChanger extends React.Component {

  changeBookStatus = (event) => {
    const targetShelf = event.target.value
    this.props.onChangeBookShelf(this.props.bookInfo, targetShelf)
  }

  render() {
    let shelfValue = this.props.bookInfo.shelf
    if (shelfValue === undefined) {
      shelfValue = this.props.searchInBookShelves(this.props.bookInfo.id)
    }
    return (
      <div className="book-shelf-changer">
        <select value={shelfValue} onChange={(event) => this.changeBookStatus(event)}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger