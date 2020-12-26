import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customer = {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '정진우',
  'birthday' : '931216',
  'gender' : '남자',
  'job' : '취준생'
}

class App extends Component {
  render() {
    return(
      <Customer
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;
