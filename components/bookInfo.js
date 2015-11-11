import {createFactory, createClass, DOM} from 'react';
import {assign} from 'lodash';
const {li, ul, p, div} = DOM;

const tagItem = createFactory(createClass({
  render() {
    return li({}, this.props.tag);
  }
}));

export const bookDetails = createFactory(createClass({
  render() {
    console.log('bookinfo', this.props);
    return div({className: 'section'},
      p({}, `Name: ${this.props.name}`),
      p({}, `Edition: ${this.props.edition}`),
      p({}, `Author: ${this.props.author}`),
      p({},
        'Tags',
        ul({}, this.props.tags.map((tag) => tagItem(assign({key: tag}, {tag: tag}))))
      )
    );
  }
}));