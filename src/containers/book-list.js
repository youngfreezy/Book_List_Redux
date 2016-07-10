import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book)=>{
      return (
        <li 
        className="list-group-item" 
        key={book.title} 
        onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      )
    });
  }

  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

}

function mapStateToProps(state) {
  //whatever is returned will show up as props inside of booklist
  return {
    books: state.books
  }
}
//the first argument to bindActionCreators will end up as props on the booklist container, similar to mapStateToProps
function mapDispatchToProps(dispatch) {
  //whenever select book is called, result is passed to all of our reducers, that's what bindActionCreators does.
  //dispatch function takes all the actions, like a funnel, spits them back out to all the reducers in our app. 
  return bindActionCreators({ selectBook : selectBook}, dispatch);
}

//promote book list from a component to a container, needs to know about this new dispatch method, make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);