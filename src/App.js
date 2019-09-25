import React from 'react';
import Form from './components/Form';
import Welcome from './components/Welcome';
import './App.scss';


function App() { 
  return (
    <div className="App container-fluid">
      <div className="row main">
        <div className="col-sm-6 welcome">
          <Welcome />
        </div>
        <div className="col-sm-6">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
