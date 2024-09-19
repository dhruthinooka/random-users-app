import React from 'react';
import UserList from './UserList';

function App() {
  //Rendering App component using React.createElement instead of using direct tags
  // return React.createElement(
  //   'div',
  //   { className: 'App' },
  //   React.createElement(UserList, null)
  // );

  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default App;