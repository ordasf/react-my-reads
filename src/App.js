import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import SearchBook from './SearchBook'
import BookList from './BookList'

class BooksApp extends React.Component {
  state = {
    shelves: {
      currentlyReading: [],
      read: [],
      wantToRead: []
    }
  }

  updateState = (bookList) => {
    this.setState({
      shelves: {
        currentlyReading: bookList.filter(book => book.shelf === 'currentlyReading'),
        read: bookList.filter(book => book.shelf === 'read'),
        wantToRead: bookList.filter(book => book.shelf === 'wantToRead')
      }
    })
  }

  updateBookShelf = (book, targetShelf) => {
    BooksAPI.update(book, targetShelf).then((newShelves) => {
      let promises = []
      promises = promises.concat(newShelves.currentlyReading.map(bookId => BooksAPI.get(bookId)))
      promises = promises.concat(newShelves.wantToRead.map(bookId => BooksAPI.get(bookId)))
      promises = promises.concat(newShelves.read.map(bookId => BooksAPI.get(bookId)))
      Promise.all(promises).then(results => {
        this.updateState(results)
      })
    })
  }

  searchInBookShelves = (bookId) => {
    for (const book of this.state.shelves.currentlyReading) {
      if (bookId === book.id) {
        return 'currentlyReading'
      }
    }
    for (const book of this.state.shelves.wantToRead) {
      if (bookId === book.id) {
        return 'wantToRead'
      }
    }
    for (const book of this.state.shelves.read) {
      if (bookId === book.id) {
        return 'read'
      }
    }
    return 'none'
  }

  componentDidMount() {
    BooksAPI.getAll().then((bookList) => {
      this.updateState(bookList)
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList
            shelves={this.state.shelves}
            onChangeBookShelf={this.updateBookShelf} />
        )} />
        <Route path="/search" render={() => (
          <SearchBook
            onChangeBookShelf={this.updateBookShelf}
            searchInBookShelves={this.searchInBookShelves}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
