import {createFactory, createClass, DOM} from 'react';
import {assign} from 'lodash';
const {li, ul, a, div} = DOM;

const bookListItem = createFactory(createClass({
  render() {
    return li({},
      a({href: this.props.link}, this.props.name)
    )
  }
}));

export const bookList = createFactory(createClass({
  render() {
    return ul({}, this.props.books.map(book => bookListItem(assign({key: book.id}, book))))
  }
}));
