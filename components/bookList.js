import {createFactory, createClass, DOM} from 'react';
import {assign} from 'lodash';
const {li, ul, p, div} = DOM;

const bookListItem = createFactory(createClass({
  render() {
    return li({},
      p({}, this.props.name)
    )
  }
}));

export const bookList = createFactory(createClass({
  render() {
    return ul({}, this.props.books.map(book => bookListItem(assign({key: book.id}, book))))
  }
}));
