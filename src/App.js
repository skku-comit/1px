import React from 'react';

// components
import NavigationBar from './components/NavigationBar/NavigationBar';

// css
import './App.css';

function App() {
  const numbers = [];

  // Generate numbers from 1 to 100
  for (let i = 1; i <= 100; i++) {
    numbers.push(
      <React.Fragment key={i}>
        {i}
        <br />
      </React.Fragment>
    );
  }

  return (
    <div className="App">
      {numbers}
      <NavigationBar />
    </div>
  );
}

export default App;
