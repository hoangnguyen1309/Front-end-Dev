import React, { Component } from 'react';
//import logo from './logo.svg';
import Course from './components/Course';
import Lifecycle from './components/Lifecycle';
import './App.css';

class App extends Component {
  render() {
    const items = [
      {
        name: 'ReactJS',
        time: '30h',
        free: true,
        desc: 'ReactJS is fucking difficult!'
      },
      {
        name: 'Angular',
        time: '55h',
        free: false,
        desc: 'Angular what?'
      },
      {
        name: 'NodeJS',
        time: '30h',
        free: true,
        desc: 'Hmmmmm'
      }
    ];

    let elmCourses = items.map((item, index) => 
    <Course key={index} name={item.name} time={item.time} free={item.free} desc={item.desc}/>
    );

    elmCourses = null;

    return (
      <div className='row'>
        {elmCourses}
        <Lifecycle />
      </div>
    );
  }
}

export default App;
