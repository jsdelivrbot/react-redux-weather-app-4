import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      term: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    });
  }

  render(){
    return (
    <form className="input-group" onSubmit={this.onFormSubmit}>
      <input
        className="form-control"
        value={this.state.term}
        placeholder="Enter city name"
        onChange={this.onInputChange}
      />
      <span className="input-group-btn">
        <button className="btn btn-secondary" type="submit">Search</button>
      </span>
    </form>
    ); 
  }
}
// const mapStateToProps = state => ({
//   book: state.activeBook
// });
const matchDispatchToProps = dispatch => (
  bindActionCreators({fetchWeather}, dispatch)
)
export default connect(null, matchDispatchToProps)(SearchBar);
