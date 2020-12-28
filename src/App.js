import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '정진우',
  'birthday' : '931216',
  'gender' : '남자',
  'job' : '취준생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '931216',
  'gender' : '남자',
  'job' : '프로그래머'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '나길동',
  'birthday' : '931216',
  'gender' : '남자',
  'job' : '의사'
}
]

class App extends Component {
  render() {
    return(
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
