import React, {Component} from 'react';
import Card from './components/Card';
import Search from './components/Search';
import axios from 'axios';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super();

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then((res) => {
        this.setState({
          users: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getUser = (searchInput) => {
    this.setState({ search: searchInput })
    fetch(`http://localhost:5000/api/players/${searchInput}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ users: res.data })
      })
      .catch(err => console.log(err))
    }

  render() {
    return (
      <div className='App'>
        <Search getUser={this.getUser} />
        <Card user={this.state.users} />
      </div>
    )
  }
}
