import React, { Component } from 'react';
import { CardList } from './componens/card-list/card-list.component';
import { SearchBox } from './componens/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }
  hendleChange = e => {
    this.setState({ searchField: e.target.value });
  }
  render() {
    
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters
      .filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.hendleChange} />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
