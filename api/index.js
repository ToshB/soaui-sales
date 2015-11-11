import reqwest from 'reqwest';
import {find} from 'lodash';
import Q from 'q';

const books = [
  {id: 1, name: 'Book 1', edition: '1st', author: 'Alice', tags: ['tag1', 'tag2']},
  {id: 2, name: 'Book 2', edition: '1st', author: 'Bob', tags: ['tag1', 'tag2']},
  {id: 3, name: 'Book 3', edition: '1st', author: 'Charlie', tags: ['tag1', 'tag2']}
];

export default {
  loadBooks: function () {
    return Q.Promise((resolve, reject) => {
      resolve(books);

      //reqwest({
      //  url: 'http://webstepfagfredag.cloudapp.net/sales/books',
      //  method: 'get',
      //  type: 'json',
      //  success: function (response) {
      //    resolve(response);
      //  },
      //  error: function (err) {
      //    console.error(err);
      //  }
      //});
    });
  },
  details: function(bookId){
    return Q.Promise((resolve, reject) => {
      resolve(find(books, 'id', bookId))

    //  reqwest({
    //    url: 'http://webstepfagfredag.cloudapp.net/sales/books/' + bookId,
    //    method: 'get',
    //    type: 'json',
    //    success: function (response) {
    //      resolve(response);
    //    },
    //    error: function (err) {
    //      console.error(err);
    //    }
    //  });
    });
  }
};
