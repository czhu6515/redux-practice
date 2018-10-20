import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators'

const mapStateToProps = (state) => {
  return {
    books: state.books,
    currentBook: state.currentBook
  }
}  

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators,
  dispatch);
}

const LibraryContainer = 
  connect(mapStateToProps,   
  mapDispatchToProps)(Library)

export default LibraryContainer
  